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

@Component({
  selector: 'app-valider-devis',
  templateUrl: './valider-devis.component.html',
  styleUrls: [ './valider-devis.component.css' ]
})
export class ValiderDevisComponent implements OnInit {
  listClient: Client[];
  devis: any = {};
  //id_client: number;
  id_devis: number;
  client = new Client();
  validationRef: boolean;
  factureGlobal = new FactureGlobal();
  validerDevisForm: FormGroup;

  /**
   * Constructor
   * @param datePipe format date for <input type="date"/>
   * @param formBuilder Reactive forms builder
   * @param activatedRoute req.params of route
   * @param router redirect to route.navigate
   * @param devisService devis service
   * @param clientService client service
   * @param factureGlobalService facture global service
   * @param flashMessages Flash messages service
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
    this.generateForm()
  }

  /**
	 * Get ALL Client.
	 * Used for Select Option on add/update Devis Form
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
	* @param id devis id
	*/
  getOneDevis(id: number) {
    this.devisService.getOneDevis(id)
      .subscribe(
      devis => {
        this.devis = devis;
        let latest_date = this.datePipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
        this.devis.date_creation = latest_date;
        this.getOneClient(this.devis.client);
        this.generateForm();
      },
      error => console.log('Error ' + error)
      );
  };

  /**
   * Create Facture Global using this.devis data
   */
  validerDevis() {
    // Set newFacture body
    const newFacture = this.validerDevisForm.value;
    newFacture.montantTtc = this.devis.montantTtc;
    newFacture.client = this.devis.client;
    // Send body to addFactureGlobal method in factureGlobalService
    this.factureGlobalService.addFactureGlobal(newFacture)
      .subscribe(
      data => {
        console.log('Devis validé' + data);
        this.flashMessages.show('Facture créée', {
          classes: [ 'alert', 'alert-success' ],
          timeout: 3000
        });
        this.onSuccess();
      },
      error => {
        console.log('Error ' + error);
        this.flashMessages.show('Erreur création facture', {
          classes: [ 'alert', 'alert-danger' ],
          timeout: 3000
        });
      });
  }

  /**
   * (blur) listener : Verification de la ref_factureGlobal.
   * - si data.success === true => ref_factureGlobal utilisée => validationRef = true,
   * - si data.success === false => ref_factureGlobal non utilisée => validationRef = false
   */
  verifRef() {
    this.factureGlobal = new FactureGlobal();
    this.factureGlobalService.getOneFactureGlobalByRef(this.validerDevisForm.get('ref_factureGlobal').value)
      .subscribe(
      data => {
        if (data.success) {
          this.validationRef = true;
        } else {
          this.validationRef = false;
        }
      },
      error => {
        console.log(error)
      }
      );
  }

  /**
  * function success after request to service.
  * Redirect to route path '/devis/client/:id_client'
  */
  onSuccess() {
    this.validerDevisForm.reset();
    this.router.navigate([ '/devis/client/:id_client', { id_client: this.devis.client }]);
  }

  /**
   * Calcul montantTTC using tauxTva and montantHt values of validerDevisForm and send new montantTtc
   */
  calculMontant() {
    if (!(this.validerDevisForm.controls[ 'montantHt' ].value === '') && !(this.validerDevisForm.controls[ 'tauxTva' ].value === '')) {
      let montantTTC = this.validerDevisForm.controls[ 'montantHt' ].value * (1 + this.validerDevisForm.controls[ 'tauxTva' ].value / 100);
      this.validerDevisForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
      this.devis.montantTtc = Number(montantTTC).toFixed(2);
    }
  };

  /**
   * Not used
   */
  onValiderDevis() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) =>
        this.devisService.getOneDevis(Number(params.get('id_devis'))))
      .subscribe((devis) => this.devis = devis);
    console.log(this.devis);
  }

  /**
   * Generate Reactive form
   */
  generateForm() {
    this.validerDevisForm = this.formBuilder.group({
      ref_factureGlobal: [ '', Validators.required ],
      date_creation: [ this.devis.date_creation ],
      montantHt: [ this.devis.montantHt ],
      tauxTva: [ this.devis.tauxTva ],
      montantTtc: [ { value: this.devis.montantTtc, disabled: true }],
      client: [ { value: this.devis.client, disabled: true }]
    });
  }

  /**
   * OnInit :
   * check if params['id_devis'] set into url.
   * - set this.id_devis = params['id_devis'].
   * - get Devis using this.id_devis.
   */
  ngOnInit() {
    //this.getAllClient();
    //this.onValiderDevis();
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
