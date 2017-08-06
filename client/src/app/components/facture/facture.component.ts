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
 * @class FactureComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factureGlobal: any = {};
  ListFactureGlobal: FactureGlobal[];
  client = new Client();
  mode: boolean = false;
  id_client: number;
  processing: boolean = false;
  factureForm: FormGroup;

  /**
   * Creates an instance of FactureComponent.
   * @param {ActivatedRoute} activatedRoute request routes params
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {ClientService} clientService client service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder Reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash message
   * @memberof FactureComponent
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
   * @memberof FactureComponent
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
   *
   * @param {number} id client._id
   * @memberof FactureComponent
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
   *
   * @param {number} id client._id
   * @memberof FactureComponent
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
   * @memberof FactureComponent
   */
  onUpdate(facture: FactureGlobal) {
    this.mode = true;
    this.factureGlobal = facture;
    let latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
    this.factureGlobal.date_creation = latest_date;
    // Set form controls to touched
    this.factureForm.controls['client'].markAsTouched();
    this.factureForm.controls['montantTtc'].markAsTouched();
    this.factureForm.controls['date_creation'].markAsTouched();
    this.factureForm.controls['montantHt'].markAsTouched();
    this.factureForm.controls['tauxTva'].markAsTouched();
  }

  /**
   * Update Facture global
   *
   * @memberof FactureComponent
   */
  updateFacture() {
    this.disableForm();
    this.processing = true;
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
        this.flashMessages.show('Facture modifiée', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
      },
      error => {
        console.log('Erreur ' + error);
        this.flashMessages.show('Erreur : Facture non modifiée', {
          classes: ['alert', 'alert-danger'],
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
   * @memberof FactureComponent
   */
  onDelete(id: number) {
    this.factureGlobalService.deleteFactureGlobal(id)
      .subscribe(
      msg => {
        console.log('Facture Global deleted');
        this.flashMessages.show('Facture supprimée', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
        this.onSuccess();
      },
      error => {
        console.log(error);
        this.flashMessages.show('Erreur: Facture non supprimée', {
          classes: ['alert', 'alert-danger'],
          timeout: 3000
        });
      }
      );
  }

  /**
   * Method to fetch modified data from database and display into table.
   *
   * @memberof FactureComponent
   */
  onSuccess() {
    this.getAllFactureGlobal();
    this.factureForm.reset();
    this.mode = false;
    this.factureGlobal = {};
    this.processing = false;
    this.enableForm();
  }

  /**
   * Generate Reactive Form
   *
   * @memberof FactureComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureGlobal: [this.factureGlobal.ref_factureGlobal, Validators.required],
      date_creation: [this.factureGlobal.date_creation],
      montantHt: [this.factureGlobal.montantHt, Validators.required],
      tauxTva: [this.factureGlobal.tauxTva, Validators.required],
      montantTtc: [{ value: this.factureGlobal.montantTtc, disabled: true }],
      client: [{ value: this.factureGlobal.client, disabled: true }, Validators.required]
    });
  }

  /**
   * Enable form controls
   *
   * @memberof FactureComponent
   */
  enableForm() {
    this.factureForm.enable();
  }

  /**
   * Disable form controls
   *
   * @memberof FactureComponent
   */
  disableForm() {
    this.factureForm.disable();
  }

  /**
   * (blur) listenner.
   * Calcul montantTTC using tauxTva and montantHt values of factureForm and send new montantTtc.
   *
   * @memberof FactureComponent
   */
  calculMontant() {
    if (!(this.factureForm.controls['montantHt'].value === '') && !(this.factureForm.controls['tauxTva'].value === '')) {
      let montantTTC = this.factureForm.controls['montantHt'].value * (1 + this.factureForm.controls['tauxTva'].value / 100);
      this.factureForm.controls['montantTtc'].setValue(Number(montantTTC).toFixed(2));
      this.factureGlobal.montantTtc = Number(montantTTC).toFixed(2);
    }
  }

  /**
   * OnInit :
   * check if params['id_client'] set into url.
   * - set this.id_client = params['id_client'].
   * - get Devis using this.id_client.
   *
   * @memberof FactureComponent
   */
  ngOnInit() {
    // différentes routes à implémenter pour le dashboard
    if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params['id_client'];
      this.getAllFactureGlobalByClient(this.id_client);
      this.getClient(this.id_client);
    } else {
      this.getAllFactureGlobal();
    }
  }

}
