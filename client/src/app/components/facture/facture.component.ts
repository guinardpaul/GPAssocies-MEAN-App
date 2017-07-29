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

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: [ './facture.component.css' ]
})
export class FactureComponent implements OnInit {
  factureGlobal: any = {};
  ListFactureGlobal: FactureGlobal[];
  client = new Client();
  mode: boolean = false;
  message: string;
  messageClass: string;
  id_client: number;
  factureForm: FormGroup;

  /**
   * Constructor
   * @param activatedRoute request params of routes to get client._id
   * @param factureGlobalService facture Global service
   * @param datePipe format date to display in <input type="date"/>
   * @param formBuilder builder used for Reactive forms
   * @param clientService client Service
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private clientService: ClientService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {
    this.generateForm()
  }

  /**
   * Get all Facture Global.
   * Method used when no params set into url.
   */
  getAllFactureGlobal() {
    this.factureGlobalService.getAllFactureGlobal()
      .subscribe(
      factureGlobal => this.ListFactureGlobal = factureGlobal,
      error => console.log('Error ' + error)
      );
  }

  /**
   * Get All Facture Global By Client._id.
   * Method used when params client._id set into url.
   * @param id client._id
   */
  getAllFactureGlobalByClient(id: number) {
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(
      factureGlobal => this.ListFactureGlobal = factureGlobal,
      error => console.log('Error ' + error)
      );
  }

  /**
   * Get One Client by Id.
   * Method used to display client.nom, client.prenom in table and form.
   * @param id client._id
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
   * @param facture Facture Global to update
   */
  onUpdate(facture: FactureGlobal) {
    this.mode = true;
    this.factureGlobal = facture;
    let latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
    this.factureGlobal.date_creation = latest_date;
    // Set form controls to touched
    this.factureForm.controls[ 'client' ].markAsTouched();
    this.factureForm.controls[ 'montantTtc' ].markAsTouched();
    this.factureForm.controls[ 'date_creation' ].markAsTouched();
    this.factureForm.controls[ 'montantHt' ].markAsTouched();
    this.factureForm.controls[ 'tauxTva' ].markAsTouched();
  }

  /**
   * Update Facture Global
   */
  updateFacture() {
    const newFacture = this.factureForm.value;
    newFacture._id = this.factureGlobal._id;
    newFacture.montantTtc = this.factureGlobal.montantTtc;
    newFacture.client = this.factureGlobal.client;
    console.log(newFacture)
    this.factureGlobalService.updateFactureGlobal(newFacture, this.factureGlobal._id)
      .subscribe(
      data => {
        this.onSuccess();
        console.log('Facture Modifiée');
        this.message = 'Facture modifiée';
        this.messageClass = 'alert alert-success';
      },
      error => {
        console.log('Erreur ' + error);
        this.message = 'Erreur modification facture';
        this.messageClass = 'alert alert-danger';
      }
      );
  }

  /**
   * Delete Facture Global by Id.
   * @param id id_factureGlobal to delete
   */
  onDelete(id: number) {
    this.factureGlobalService.deleteFactureGlobal(id)
      .subscribe(
      msg => {
        console.log('Facture Global deleted');
        this.message = 'Facture Global Supprimé';
        this.messageClass = 'alert alert-success';
        this.onSuccess();
      },
      error => {
        console.log(error);
        this.message = 'Erreur suppresion Facture Global';
        this.messageClass = 'alert alert-danger';
      }
      );
  }

  /**
   * Method to fetch modified data from database and display into table.
   */
  onSuccess() {
    this.getAllFactureGlobal();
    this.factureForm.reset();
    this.mode = false;
    this.factureGlobal = {};
  }

  /**
  * Generate Reactive Form
  */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureGlobal: [ this.factureGlobal.ref_factureGlobal, Validators.required ],
      date_creation: [ this.factureGlobal.date_creation ],
      montantHt: [ this.factureGlobal.montantHt, Validators.required ],
      tauxTva: [ this.factureGlobal.tauxTva, Validators.required ],
      montantTtc: [ { value: this.factureGlobal.montantTtc, disabled: true }],
      client: [ { value: this.factureGlobal.client, disabled: true }, Validators.required ]
    });
  }

  /**
  * (blur) listenner.
  * Calcul montantTTC using tauxTva and montantHt values of factureForm and send new montantTtc.
  */
  calculMontant() {
    if (!(this.factureForm.controls[ 'montantHt' ].value === '') && !(this.factureForm.controls[ 'tauxTva' ].value === '')) {
      let montantTTC = this.factureForm.controls[ 'montantHt' ].value * (1 + this.factureForm.controls[ 'tauxTva' ].value / 100);
      this.factureForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
      this.factureGlobal.montantTtc = Number(montantTTC).toFixed(2);
    }
  }

  /**
   * OnInit :
   * check if params['id_client'] set into url.
   * - set this.id_client = params['id_client'].
   * - get Devis using this.id_client.
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
