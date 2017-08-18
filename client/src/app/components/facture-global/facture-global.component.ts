import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { FactureGlobal } from '../../models/factureGlobal';
import { Devis } from '../../models/devis';
import { Client } from '../../models/client';

// Services
import { FactureGlobalService } from '../../service/facture-global.service';
import { ClientService } from '../../service/client.service';
import { FlashMessagesService } from 'ngx-flash-messages';

/**
 *
 * @author Paul GUINARD
 * @export
 * @class FactureGlobalComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-facture-global',
  templateUrl: './facture-global.component.html',
  styleUrls: [ './facture-global.component.css' ]
})
export class FactureGlobalComponent implements OnInit {
  factureGlobal: any = {};
  listFactureGlobals: FactureGlobal[];
  client = new Client();
  id_client: number;
  mode = false;
  processing = false;
  factureForm: FormGroup;

  /**
   * Creates an instance of FactureGlobalComponent.
   * @param {ActivatedRoute} activatedRoute request routes params
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {ClientService} clientService client service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder Reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash message
   * @memberof FactureGlobalComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private clientService: ClientService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService
  ) {
    this.generateForm()
  }

  /**
   * Get all Facture Global.
   * Method used when no params set into url.
   *
   * @memberof FactureGlobalComponent
   */
  getAllFactureGlobal() {
    this.factureGlobalService.getAllFactureGlobal()
      .subscribe(
      factureGlobal => this.listFactureGlobals = factureGlobal,
      error => console.log('Error ' + error)
      );
  }

  /**
   * Get All Facture Global By Client._id.
   * Method used when params client._id set into url.
   *
   * @param {number} id client._id
   * @memberof FactureGlobalComponent
   */
  getAllFactureGlobalByClient(id: number) {
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(
      factureGlobal => this.listFactureGlobals = factureGlobal,
      error => console.log('Error ' + error)
      );
  }

  /**
   * Get One Client by Id.
   * Method used to display client.nom, client.prenom in table and form.
   *
   * @param {number} id client._id
   * @memberof FactureGlobalComponent
   */
  getClient(id: number) {
    this.clientService.getOneClient(id)
      .subscribe(
      client => this.client = client,
      error => console.log('Error ' + error)
      );
  }

  /**
   * Display factureForm.
   * Set factureForm.value = facture global data to update.
   *
   * @param {FactureGlobal} facture facture global body
   * @memberof FactureGlobalComponent
   */
  onUpdate(facture: FactureGlobal) {
    this.mode = true;
    this.factureGlobal = facture;
    let latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
    this.factureGlobal.date_creation = latest_date;
    this.factureForm.get('ref_factureGlobal').setValue(this.factureGlobal.ref_factureGlobal);
    this.factureForm.get('date_creation').setValue(latest_date);
  }

  /**
   * Update Facture global
   *
   * @memberof FactureGlobalComponent
   */
  updateFacture() {
    this.disableForm();
    this.processing = true;
    const newFacture = this.factureForm.value;
    newFacture._id = this.factureGlobal._id;
    newFacture.montantTtcTotal = this.factureGlobal.montantTtc;
    newFacture.client = this.factureGlobal.client;
    newFacture.ref_factureGlobal = this.factureForm.get('ref_factureGlobal').value;
    newFacture.date_creation = this.factureForm.get('date_creation').value;
    this.factureGlobalService.updateFactureGlobal(newFacture)
      .subscribe(
      data => {
        this.onSuccess();
        console.log('Facture Modifiée');
        this.flashMessages.show('Facture modifiée', {
          classes: [ 'alert', 'alert-success' ],
          timeout: 3000
        });
      },
      error => {
        console.log('Erreur ' + error);
        this.flashMessages.show('Erreur : Facture non modifiée', {
          classes: [ 'alert', 'alert-danger' ],
          timeout: 3000
        });
        this.processing = false;
        this.enableForm();
      }
      );
  }

  /**
   * Delete Facture Global by Id.
   *
   * @param {number} id factureGlobal._id
   * @memberof FactureGlobalComponent
   */
  onDelete(id: number) {
    this.factureGlobalService.deleteFactureGlobal(id)
      .subscribe(
      data => {
        console.log('Facture Global deleted');
        this.flashMessages.show('Facture supprimée', {
          classes: [ 'alert', 'alert-warning' ],
          timeout: 3000
        });
        this.onSuccess();
      },
      error => {
        console.log(error);
        this.flashMessages.show('Erreur: Facture non supprimée', {
          classes: [ 'alert', 'alert-danger' ],
          timeout: 3000
        });
      }
      );
  }

  /**
   * Update Status Client si :
   * - update/delete FactureGlobal => Success.
   * - AllFactureGlobalByClient.status === true
   * 
   * @param {Client} client 
   * @memberof ValiderDevisComponent
   */
  updateStatusClient(client: Client) {
    // Initialise listFactureGlobals
    this.listFactureGlobals = [];

    // Fetch Facture Globals from Database
    this.factureGlobalService.getAllFactureGlobalByClient(client._id)
      .subscribe(
      FactureGlobals =>
        this.listFactureGlobals = FactureGlobals,
      err => console.log(err)
      );

    // Check each factureGlobal.status dans listFactureGlobals
    let status_client: boolean = true;
    if (this.listFactureGlobals.length > 0) {
      for (var factureGlobal in this.listFactureGlobals) {
        if (this.listFactureGlobals.hasOwnProperty(factureGlobal)) {
          if (this.listFactureGlobals[ factureGlobal ].status_factureGlobal === false) {
            status_client = false;
          }
        }
      }
    } else {
      status_client = false;
    }

    // OPTIONNEL : faire 2 cas. si status_client == true et status_client == false
    // pour éviter requete database si status déja set comme il faut.
    // Si status_facture === true && status_client !== true
    if (status_client && this.client.status_client === false) {
      this.clientService.updateStatus(client, status_client)
        .subscribe(
        data => console.log('Status client mis à jour :' + data.obj.status_client),
        err => console.log('Erreur mis à jour status client :' + err)
        );
    }

    if (!(status_client) && this.client.status_client === true) {
      this.clientService.updateStatus(client, status_client)
        .subscribe(
        data => console.log('Status client mis à jour :' + data.obj.status_client),
        err => console.log('Erreur mis à jour status client :' + err)
        );
    }
  }

  /**
   * Method to fetch modified data from database and display into table.
   *
   * @memberof FactureGlobalComponent
   */
  onSuccess() {
    this.updateStatusClient(this.client);
    this.generateForm();
    this.mode = false;
    this.factureGlobal = {};
    this.processing = false;
  }

  /**
   * Generate Reactive Form
   *
   * @memberof FactureGlobalComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureGlobal: [ this.factureGlobal.ref_factureGlobal, Validators.required ],
      date_creation: [ this.factureGlobal.date_creation ],
      montantTtcTotal: [ { value: this.factureGlobal.montantTtc, disabled: true }],
      client: [ { value: this.factureGlobal.client, disabled: true }, Validators.required ]
    });
  }

  /**
   * Enable form controls
   *
   * @memberof FactureGlobalComponent
   */
  enableForm() {
    this.factureForm.controls[ 'ref_factureGlobal' ].enable();
    this.factureForm.controls[ 'date_creation' ].enable();
  }

  /**
   * Disable form controls
   *
   * @memberof FactureGlobalComponent
   */
  disableForm() {
    this.factureForm.disable();
  }

  /**
   * NOT USED
   * (blur) listenner.
   * Calcul montantTTC using tauxTva and montantHt values of factureForm and send new montantTtc.
   *
   * @memberof FactureGlobalComponent
   */
  calculMontant() {
    if (!(this.factureForm.controls[ 'montantHt' ].value === '') && !(this.factureForm.controls[ 'tauxTva' ].value === '')) {
      let montantTTC = this.factureForm.controls[ 'montantHt' ].value + this.factureForm.controls[ 'tauxTva' ].value;
      this.factureForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
      this.factureGlobal.montantTtc = Number(montantTTC).toFixed(2);
    }
  }

  /**
   * OnInit :
   * check if params['id_client'] set into url.
   * - set this.id_client = params['id_client'].
   * - get Devis using this.id_client.
   *
   * @memberof FactureGlobalComponent
   */
  ngOnInit() {
    // différentes routes à implémenter pour le dashboard
    if (this.activatedRoute.snapshot.params[ 'id_client' ] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params[ 'id_client' ];
      this.getAllFactureGlobalByClient(this.id_client);
      this.getClient(this.id_client);
    } else {
      this.getAllFactureGlobal();
    }
  }

}
