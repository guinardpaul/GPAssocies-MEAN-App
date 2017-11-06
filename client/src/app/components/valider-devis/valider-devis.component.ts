import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

// Models
import { Devis } from '../../models/devis';
import { Client } from '../../models/client';
import { FactureGlobal } from '../../models/factureGlobal';

// Services
import { DevisService } from '../../service/devis.service';
import { ClientService } from '../../service/client.service';
import { FactureGlobalService } from '../../service/facture-global.service';
import { FlashMessagesService } from 'ngx-flash-messages';

/**
 *
 * @author Paul GUINARD
 * @export
 * @class ValiderDevisComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-valider-devis',
  templateUrl: './valider-devis.component.html',
  styleUrls: [ './valider-devis.component.css' ]
})
export class ValiderDevisComponent implements OnInit {
  /**
   * list clients
   * 
   * @type {Client[]}
   * @memberof ValiderDevisComponent
   */
  listClient: Client[];

  /**
   * list factures globals
   * 
   * @type {FactureGlobal[]}
   * @memberof ValiderDevisComponent
   */
  listFactureGlobals: FactureGlobal[];

  /**
   * devis
   * 
   * @type {*}
   * @memberof ValiderDevisComponent
   */
  devis: any = {};

  /**
   * id devis
   * 
   * @type {number}
   * @memberof ValiderDevisComponent
   */
  id_devis: number;

  /**
   * client
   * 
   * @memberof ValiderDevisComponent
   */
  client = new Client();

  /**
   * validation ref facture global
   * 
   * @type {boolean}
   * @memberof ValiderDevisComponent
   */
  validationRef: boolean;

  /**
   * facture global
   * 
   * @memberof ValiderDevisComponent
   */
  factureGlobal = new FactureGlobal();

  /**
   * valider devis form
   * 
   * @type {FormGroup}
   * @memberof ValiderDevisComponent
   */
  validerDevisForm: FormGroup;

  /**
   * on process
   * 
   * @memberof ValiderDevisComponent
   */
  processing = false;

  /**
   * Creates an instance of ValiderDevisComponent.
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder reactive form builder
   * @param {ActivatedRoute} activatedRoute request routes params
   * @param {Router} router redirect to route
   * @param {DevisService} devisService devis service
   * @param {ClientService} clientService client service
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @memberof ValiderDevisComponent
   */
  constructor(
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private devisService: DevisService,
    private clientService: ClientService,
    private factureGlobalService: FactureGlobalService,
    private flashMessages: FlashMessagesService
  ) {
    this.generateForm();
  }

  /**
   * Get ALL Client.
	 * Used for Select Option on add/update Devis Form
   *
   * @memberof ValiderDevisComponent
   */
  getAllClient() {
    this.clientService.getAllClients()
      .subscribe(
      clients => this.listClient = clients,
      error => console.log('Error ' + error)
      );
  };

  /**
   * GET ONE CLIENT.
	 * Used to display client.nom & client.prenom to the form
   *
   * @param {number} id client._id
   * @memberof ValiderDevisComponent
   */
  getOneClient(id: number) {
    this.clientService.getOneClient(id)
      .subscribe(
      client => this.client = client,
      error => console.log('Error ' + error)
      );
  };

  /**
   * GET ONE DEVIS.
   * une fois le devis obtenu de la database :
   * - set date_creation au format géré par input type="date".
   * - cherche client à partir de l'id du devis.client.
   *
   * @param {number} id devis._id
   * @memberof ValiderDevisComponent
   */
  getOneDevis(id: number) {
    this.devisService.getOneDevis(id)
      .subscribe(
      devis => {
        this.devis = devis;
        // Change devis.date_creation
        const latest_date = this.datePipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
        this.devis.date_creation = latest_date;
        this.getOneClient(this.devis.client);
        this.generateForm();
      },
      error => console.log('Error ' + error)
      );
  };

  /**
   * Create Facture Global using this.devis data
   *
   * @memberof ValiderDevisComponent
   */
  validerDevis() {
    this.disableForm();
    this.processing = true;
    // Set newFacture body
    const newFacture = this.validerDevisForm.value;
    newFacture.montantTtcTotal = this.devis.montantTtc;
    newFacture.client = this.devis.client;
    newFacture.montantHt = this.devis.montantHt;
    newFacture.tauxTva = this.devis.tauxTva;
    newFacture.devis = this.devis._id;

    // Send body to addFactureGlobal method in factureGlobalService
    this.factureGlobalService.addFactureGlobal(newFacture)
      .subscribe(
      data => {
        this.flashMessages.show(data.message, {
          classes: [ 'alert', 'alert-success' ],
          timeout: 3000
        });
        this.onSuccess();
      },
      error => {
        this.processing = false;
        console.log('Error ' + error);
        this.flashMessages.show('Erreur création facture', {
          classes: [ 'alert', 'alert-danger' ],
          timeout: 3000
        });
        this.enableForm();
      });
  }

  /**
   * Update Status Client si :
   * - valider Devis => Success.
   * - AllFactureGlobalByClient.status === true
   * 
   * @param {Client} client 
   * @memberof ValiderDevisComponent
   */
  updateStatusClient(client: Client) {
    let status_facture = true;
    // Fetch Facture Globals from Database
    this.factureGlobalService.getAllFactureGlobalByClient(client._id)
      .subscribe(
      FactureGlobals => {
        // Check each factureGlobal.status dans listFactureGlobals       
        if (FactureGlobals !== null) {
          for (const factureGlobal in FactureGlobals) {
            if (FactureGlobals.hasOwnProperty(factureGlobal)) {
              if (FactureGlobals[ factureGlobal ].status_factureGlobal === false) {
                status_facture = false;
              }
            }
          }

          // Check difference entre status_facture et status_client avant de requêter à la database
          // si status_facture === true && status_client !== true || 
          // status_facture === false && status_client !== false
          if ((status_facture && this.client.status_client !== true) || (!status_facture && this.client.status_client === true)) {
            this.clientService.updateStatus(client, status_facture)
              .subscribe(
              data => console.log('Status client mis à jour'),
              err => console.log('Erreur mis à jour status client')
              );
          }
        }
      },
      err => console.log(err)
      );
  }

  /**
   * 
   * (blur) listener : Verification de la ref_factureGlobal.
   * - si data.success === true => ref_factureGlobal utilisée => validationRef = true,
   * - si data.success === false => ref_factureGlobal non utilisée => validationRef = false
   *
   * @memberof ValiderDevisComponent
   */
  verifRef() {
    this.factureGlobalService.getOneFactureGlobalByRef(this.client._id, this.validerDevisForm.get('ref_factureGlobal').value)
      .subscribe(
      data => {
        if (data.success) {
          return this.validationRef = true;
        }
      },
      error => {
        console.log(error)
      }
      );
    return this.validationRef = false;
  }

  /**
   * function success after request to service.
   * Redirect to route path '/devis/client/:id_client'
   *
   * @memberof ValiderDevisComponent
   */
  onSuccess() {
    this.updateStatusClient(this.client);
    setTimeout(() => {
      this.processing = false;
      // this.enableForm();
      this.generateForm();
      this.router.navigate([ '/devis/client/:id_client', { id_client: this.devis.client }]);
    }, 1000);
  }

  /**
   * on cancel form
   * 
   * @memberof ValiderDevisComponent
   */
  onCancel() {
    this.router.navigate([ '/devis/client/:id_client', { id_client: this.devis.client }]);
  }

  /**
   * NOT USED
   * 
   * Calcul montantTTC using tauxTva and montantHt values of validerDevisForm and send new montantTtc
   *
   * @memberof ValiderDevisComponent
   */
  calculMontant() {
    if (!(this.validerDevisForm.controls[ 'montantHt' ].value === '') && !(this.validerDevisForm.controls[ 'tauxTva' ].value === '')) {
      const montantTTC = this.validerDevisForm.controls[ 'montantHt' ].value * (1 + this.validerDevisForm.controls[ 'tauxTva' ].value / 100);
      this.validerDevisForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
      this.devis.montantTtc = Number(montantTTC).toFixed(2);
    }
  };

  /**
   * Generate Reactive form
   *
   * @memberof ValiderDevisComponent
   */
  generateForm() {
    this.validerDevisForm = this.formBuilder.group({
      ref_factureGlobal: [ this.devis.ref_devis, Validators.compose([
        Validators.required
      ]) ],
      date_creation: [ this.devis.date_creation ],
      montantHt: [ { value: this.devis.montantHt, disabled: true }],
      tauxTva: [ { value: this.devis.tauxTva, disabled: true }],
      montantTtcTotal: [ { value: this.devis.montantTtc, disabled: true }],
      client: [ { value: this.devis.client, disabled: true }]
    });
  }

  /**
   * Enable form
   * 
   * @memberof ValiderDevisComponent
   */
  enableForm() {
    this.validerDevisForm.controls[ 'ref_factureGLobal' ].enable();
    this.validerDevisForm.controls[ 'date_creation' ].enable();
  }

  /**
   * Disable form
   * 
   * @memberof ValiderDevisComponent
   */
  disableForm() {
    this.validerDevisForm.disable();
  }

  /**
   * OnInit :
   * check if params['id_devis'] set into url.
   * - set this.id_devis = params['id_devis'].
   * - get Devis using this.id_devis.
   *
   * @memberof ValiderDevisComponent
   */
  ngOnInit() {
    // this.getAllClient();
    // this.onValiderDevis();
    /* if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params['id_client'];
      this.getOneClient(this.id_client);
    } */
    // Recupère devis by id if set into url
    // Set id_client and client data
    if (this.activatedRoute.snapshot.params[ 'id_devis' ] !== undefined) {
      this.id_devis = this.activatedRoute.snapshot.params[ 'id_devis' ];
      this.getOneDevis(this.id_devis);
    }
  }

}
