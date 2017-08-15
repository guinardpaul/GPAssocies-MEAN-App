import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { FactureGlobal } from '../../models/factureGlobal';
import { FactureAccompte } from '../../models/factureAccompte';
import { Reglement } from '../../models/reglement';
import { Client } from '../../models/client';

// Services
import { FactureGlobalService } from '../../service/facture-global.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';
import { ClientService } from '../../service/client.service';
import { ReglementService } from '../../service/reglement.service';
import { FlashMessagesService } from 'ngx-flash-messages';

/**
 *
 * @author Paul GUINARD
 * @export
 * @class FactureAccompteComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-facture-accompte',
  templateUrl: './facture-accompte.component.html',
  styleUrls: [ './facture-accompte.component.css' ]
})
export class FactureAccompteComponent implements OnInit {
  id_fact: number;
  factureGlobal: any = {};
  factureAccompte: any = {};
  reglement: any = {};
  client: Client;
  listFactureAccompte: FactureAccompte[];
  listReglement: Reglement[];
  listFactureGlobal: FactureGlobal[] = [];
  processing: boolean = false;
  mode: boolean = false;
  modeAddReglement: boolean = false;
  factureForm: FormGroup;
  reglementForm: FormGroup;

  /**
   * Creates an instance of FactureAccompteComponent.
   * 
   * @param {ActivatedRoute} activatedRoute request routes param
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureAccompteService} factureAccompteService facture Accompte service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @param {ClientService} ClientService client service
   * @param {ReglementService} ReglementService reglement service
   * @memberof FactureAccompteComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private factureAccompteService: FactureAccompteService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService,
    private clientService: ClientService,
    private reglementService: ReglementService
  ) {
    this.generateForm();
    this.generateReglementForm();
  }

  /**
   * Get Client to be updated
   *
   * @param {number} id client._id
   * @memberof FactureAccompteComponent
   */
  getOneClient(id: number) {
    // Fetch Client from database
    this.clientService.getOneClient(this.factureGlobal.client)
      .subscribe(
      data => this.client = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get All Facture Global by Client
   * 
   * @param {number} id 
   * @memberof FactureAccompteComponent
   */
  getAllFactureGlobalByClient(id: number) {
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(
      data => this.listFactureGlobal = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get One Facture Global
   *
   * @param {number} id factureGlobal._id
   * @memberof FactureAccompteComponent
   */
  getOneFactureGlobal(id: number) {
    this.factureGlobalService.getOneFactureGlobalById(id)
      .subscribe(
      data => {
        this.factureGlobal = data;
        this.getOneClient(data.client);
      },
      err => console.log(err)
      );
  }

  /**
   * Get All Facture Mois
   *
   * @memberof FactureAccompteComponent
   */
  getAllFactureAccompte() {
    this.factureAccompteService.getAllFactureAccompte()
      .subscribe(
      factureAccompte => this.listFactureAccompte = factureAccompte,
      err => console.log(err)
      );
  }

  /**
   * Get All Facture Mois By Facture Global
   *
   * @param {number} id factureGlobal._id
   * @memberof FactureAccompteComponent
   */
  getAllFactureAccompteByFactureGlobal(id: number) {
    this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
      .subscribe(
      factureAccompte => {
        console.log(factureAccompte);
        this.listFactureAccompte = factureAccompte;
      },
      err => console.log(err)
      );
  }

  /**
   * Get All Reglement by factureAccompte
   *
   * @param {number} id factureAccompte._id
   * @memberof FactureAccompteComponent
   */
  getAllReglementByFactureAccompte(id: number) {
    this.reglementService.getReglementByFactureAccompte(id)
      .subscribe(
      reglements => this.listReglement = reglements,
      err => console.log(err)
      );
  }

  /**
   * Create Facture Accompte
   *
   * @memberof FactureAccompteComponent
   */
  addFactureAccompte() {
    this.processing = true;
    this.disableForm();
    let newFacture = {
      ref_factureAccompte: this.factureForm.get('ref_factureAccompte').value,
      date_creation: this.factureForm.get('date_creation').value,
      montantFacture: this.factureForm.get('montantFacture').value,
      reglementClient: 0,
      factureGlobal: this.factureGlobal._id,
    };
    console.log(newFacture);
    this.factureAccompteService.addFactureAccompte(newFacture)
      .subscribe(
      data => {
        if (data.success) {
          console.log(data.message);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          // Update facture global montantTtcFacture
          this.updateMontantFactureGlobal(this.factureGlobal, newFacture.montantFacture);
          // Update facture global status
          this.updateStatusFactureGlobal(this.factureGlobal);

          this.onSuccess();
        } else {
          console.log('Erreur creation facture accompte :' + data.err);
          this.flashMessages.show('data.message', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.processing = false;
          this.enableFactureForm();
        }
      }
      );
  }

  /**
   * Add reglement. update FactureAccompte on success
   *
   * @memberof FactureAccompteComponent
   */
  addReglement() {
    this.processing = true;
    this.disableForm();
    // Récupère Reglement data du form
    let newReglement = {
      date_reglement: this.reglementForm.get('date_creation').value,
      reglementTtc: this.reglementForm.get('reglementTtc').value,
      factureAccompte: this.factureAccompte._id
    };

    // add Reglement
    this.reglementService.addReglement(newReglement)
      .subscribe(
      data => {
        if (data.success) {
          console.log(data.message);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          // update Facture accompte with new reglementClient
          this.updateReglementClientFactureAccompte(this.factureAccompte, newReglement.reglementTtc);
          // update facture Accompte Status
          this.updateStatusFactureAccompte(this.factureAccompte);
          // update facture global reglement
          this.updateReglementClientFactureGlobal(this.factureGlobal, newReglement.reglementTtc);

          this.onSuccess();
        } else {
          console.log('Erreur creation facture accompte :' + data.err);
          this.flashMessages.show('data.message', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.processing = false;
          this.enableReglementForm();
        }
      }
      );
  }

  /**
   * Delete Facture Accompte
   *
   * @param {number} id factureAccompte Id
   * @param {number} montantFacture factureAccomte montantTtcFacture
   * @param {number} reglementClient factureAccomte montantTtcRegle
   * @memberof FactureAccompteComponent
   */
  deleteFactureAccompte(id: number, montantFacture: number, reglementClient: number) {
    this.factureAccompteService.deleteFactureAccompte(id)
      .subscribe(
      data => {
        if (data.success) {
          console.log(data.message);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          // Update Facture global montantTtcFacture
          this.updateMontantFactureGlobal(this.factureGlobal, -montantFacture);
          // Update facture global reglementTtcTotal
          this.updateReglementClientFactureGlobal(this.factureGlobal, -reglementClient);
          // Update facture global status
          this.updateStatusFactureGlobal(this.factureGlobal);

          this.onSuccess();
        } else {
          console.log(data.message + ' :' + data.err);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
        }
      }
      );
  }

  /**
   * Delete reglement :
   * - Update reglementClient facture global
   * - Update status facture global
   * - Update status client
   * 
   * @param {number} id reglement._id
   * @param {number} reglementClient reglement.reglementTtc 
   * @memberof FactureAccompteComponent
   */
  deleteReglement(id: number, reglementClient: number) {
    this.reglementService.deleteReglement(id)
      .subscribe(
      data => {
        if (data.success) {
          console.log(data.message);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          // Update facture accompte reglementClient
          this.updateReglementClientFactureAccompte(this.factureAccompte, -reglementClient);
          // Update status facture accompte
          this.updateStatusFactureAccompte(this.factureAccompte);
          // Update facture global reglementTtcTotal
          this.updateReglementClientFactureGlobal(this.factureGlobal, -reglementClient);
          // Get all reglement by facture accompte
          this.getAllReglementByFactureAccompte(this.factureAccompte._id);
        } else {
          console.log(data.message + ' :' + data.err);
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
        }
      }
      );
  }

  /**
   * Update reglement client facture accompte si :
   * - réglement créé
   *
   * @param {number} reglementClient reglement client
   * @param {FactureAccompte} factureAccompte facture accompte body
   * @memberof FactureAccompteComponent
   */
  updateReglementClientFactureAccompte(factureAccompte: FactureAccompte, reglementClient: number) {
    // Set new reglementClient montant
    this.factureAccompte.reglementClient += Number(reglementClient);
    // Request service
    this.factureAccompteService.updateFactureAccompte(factureAccompte)
      .subscribe(
      data => {
        if (data.success) {
          console.log(data.message);
          // Get all facture accompte by facture global
          this.getAllFactureAccompteByFactureGlobal(this.id_fact);
          //this.onSuccess();
        } else {
          console.log(data.message + ' :' + data.err);
        }
      }
      );
  }

  /**
   * Update status factureAccompte si :
   * - modification reglement == success
   * - factureAccompte.reglementClient === factureAccompte.montantFacture
   * - factureAccompte.status_factureAccompte !== true
   *
   * @param {FactureAccompte} factureAccompte facture accompte body
   * @memberof FactureAccompteComponent
   */
  updateStatusFactureAccompte(factureAccompte: FactureAccompte) {
    // Check if montantFacture === reglementClient && status_factureAccompte === false
    if ((factureAccompte.reglementClient === factureAccompte.montantFacture)
      && !factureAccompte.status_factureAccompte) {
      this.factureAccompteService.updateStatusFactureAccompte(factureAccompte, true)
        .subscribe(
        data => {
          console.log('Status facture accompte = true');
        },
        err => console.log(err)
        );
    } else {
      console.log('Status facture accompte not updated. Status = ' + factureAccompte.status_factureAccompte);
    }
  }

  /**
   * Update status factureGlobal si :
   * - each montantFacturé factureAccompte === montantTtcTotal factureGlobal
   * - each status factureAccompte === true
   *
   * @param {FactureGlobal} factureGlobal
   * @memberof FactureAccompteComponent
   */
  updateStatusFactureGlobal(factureGlobal: FactureGlobal) {
    let status_factureGlobal: boolean = false;

    // Check montant facture
    if ((factureGlobal.montantTtcFacture === factureGlobal.montantTtcTotal) && (factureGlobal.montantTtcFacture === factureGlobal.montantTtcRegle)) {
      status_factureGlobal = true;
    }

    this.factureGlobalService.updateStatusFactureGlobal(factureGlobal, status_factureGlobal)
      .subscribe(
      data => {
        console.log('Status facture global updated :' + data.obj.status_factureGlobal);
        this.updateStatusClient();
      },
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * Update FactureGlobal montantTtcFacturé si:
   * - FactureAccompte success (add/update/delete).
   *
   * @param {FactureGlobal} factureGlobal
   * @param {number} montantFacture
   * @memberof FactureAccompteComponent
   */
  updateMontantFactureGlobal(factureGlobal: FactureGlobal, montantFacture: number) {
    factureGlobal.montantTtcFacture += Number(montantFacture);
    this.factureGlobalService.updateFactureGlobal(factureGlobal)
      .subscribe(
      data => console.log('updateMontantFactureGlobal réussi : ' + data.obj.montantTtcTotal),
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Update FactureGlobal montantTtcReglé si:
   * - Reglement success (add/update/delete).
   *
   * @param {FactureGlobal} factureGlobal
   * @param {number} Reglement
   * @memberof FactureAccompteComponent
   */
  updateReglementClientFactureGlobal(factureGlobal: FactureGlobal, reglement: number) {
    factureGlobal.montantTtcRegle += Number(reglement);
    this.factureGlobalService.updateFactureGlobal(factureGlobal)
      .subscribe(
      data => {
        console.log('updateReglementClientFactureGlobal réussi :' + data.obj.montantTtcRegle);
        // update facture Global Status
        this.updateStatusFactureGlobal(this.factureGlobal);
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Update Status Client si :
   * - update/delete FactureGlobal => Success.
   * - AllFactureGlobalByClient.status === true
   *
   * @memberof FactureAccompteComponent
   */
  updateStatusClient() {
    // init status_client
    let status_client: boolean = true;

    // Fetch Facture Globals from Database
    //this.getAllFactureGlobalByClient(this.client._id);
    this.factureGlobalService.getAllFactureGlobalByClient(this.client._id)
      .subscribe(
      data => {
        console.log(data);
        // Si list non vide : check each factureGlobal.status dans listFactureGlobal
        if (data.length > 0) {
          for (var factureGlobal in data) {
            if (data.hasOwnProperty(factureGlobal)) {
              if (data[ factureGlobal ].status_factureGlobal === false) {
                status_client = false;
              }
            }
          }
        } else {
          status_client = false;
        }
        // Update Status client
        this.clientService.updateStatus(this.client, status_client)
          .subscribe(
          data => console.log('Status client mis à jour :' + data.obj.status_client),
          err => console.log('Erreur' + err)
          );
      }, err => console.log('Erreur :' + err)
      )

    /*  // Si status_client === true && client.status_client === false
     if (status_client && this.client.status_client === false) {
       this.clientService.updateStatus(this.client, status_client)
         .subscribe(
         data => console.log('Status client mis à jour :' + data.obj.status_client),
         err => console.log('Erreur mis à jour status client :' + err)
         );
     }
 
     // Si status_client === false && client.status_client === true
     if (!(status_client) && this.client.status_client === true) {
       this.clientService.updateStatus(this.client, status_client)
         .subscribe(
         data => console.log('Status client mis à jour :' + data.obj.status_client),
         err => console.log('Erreur mis à jour status client :' + err)
         );
     } */
  }

  /**
   * Method to fetch modified data from database and display into table.
   *
   * @memberof FactureAccompteComponent
   */
  onSuccess() {
    this.getAllFactureAccompteByFactureGlobal(this.id_fact);
    this.mode = false;
    this.modeAddReglement = false;
    this.processing = false;
    this.generateForm();
    this.generateReglementForm();
  }

  /**
   * onAdd Facture accompte
   *
   * @memberof FactureAccompteComponent
   */
  onAddFactureAccompte() {
    this.generateForm();
    let latest_date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.factureForm.get('date_creation').setValue(latest_date);
    this.factureGlobal.date_creation = latest_date;
    this.factureForm.get('montantFacture').setValue(this.factureGlobal.montantTtcTotal);
    this.mode = true;
    this.modeAddReglement = false;
  }

  /**
   * onUpdate:
   * - generate ReglementForm
   * - get All reglement by FactureAccompte._id
   *
   * @param {FactureAccompte} factureAccompte FactureAccompte
   * @memberof FactureAccompteComponent
   */
  onAddReglement(factureAccompte: FactureAccompte) {
    this.generateReglementForm();
    this.factureAccompte = factureAccompte;
    let latest_date = this.datePipe.transform(this.factureAccompte.date_creation, 'yyyy-MM-dd');
    this.factureAccompte.date_creation = latest_date;
    this.reglementForm.get('date_creation').setValue(latest_date);
    this.getAllReglementByFactureAccompte(factureAccompte._id);
    this.modeAddReglement = true;
    this.mode = false;
  }

  /**
   * Cancel button
   *
   * @memberof FactureAccompteComponent
   */
  onCancel() {
    this.generateForm();
    this.generateReglementForm();
    this.mode = false;
    this.modeAddReglement = false;
    this.factureAccompte = {};
  }

  /**
   * Generate form add facture accompte
   *
   * @memberof FactureAccompteComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureAccompte: [ '', Validators.required ],
      date_creation: [ Date.now ],
      montantFacture: [ this.factureGlobal.montantFacture, Validators.required ],
      factureGlobal: [ { value: this.factureAccompte.factureGlobal, disabled: true }, Validators.required ]
    });
  }

  /**
   * Generate form add reglement
   *
   * @memberof FactureAccompteComponent
   */
  generateReglementForm() {
    this.reglementForm = this.formBuilder.group({
      ref_factureAccompte: [ { value: this.factureAccompte.ref_factureAccompte, disabled: true }, Validators.required ],
      date_creation: [ { value: this.factureAccompte.date_creation }],
      montantFacture: [ { value: this.factureAccompte.montantFacture, disabled: true }],
      reglementTtc: [ this.reglement.reglementTtc, Validators.required ],
      factureAccompte: [ { value: this.factureAccompte._id, disabled: true }, Validators.required ]
    });
  }

  /**
   * Disable form controls
   * 
   * @memberof FactureAccompteComponent
   */
  disableForm() {
    this.factureForm.disable();
    this.reglementForm.disable();
  }

  /**
   * Enable Facture accompte form controls on error
   * 
   * @memberof FactureAccompteComponent
   */
  enableFactureForm() {
    this.factureForm.controls[ 'ref_factureAccompte' ].enable();
    this.factureForm.controls[ 'date_creation' ].enable();
    this.factureForm.controls[ 'montantFacture' ].enable();
  }

  /**
   * Enable reglement form controls on error
   * 
   * @memberof FactureAccompteComponent
   */
  enableReglementForm() {
    this.reglementForm.controls[ 'date_creation' ].enable();
    this.reglementForm.controls[ 'reglementTtc' ].enable();
  }

  /**
   * OnInit :
   * check if params['id_fact'] set into url.
   * - set this.id_fact = params['id_fact'].
   * - get Devis using this.id_fact.
   *
   * @memberof FactureAccompteComponent
   */
  ngOnInit() {
    if (this.activatedRoute.snapshot.params[ 'id_fact' ] !== undefined) {
      this.id_fact = this.activatedRoute.snapshot.params[ 'id_fact' ];
      this.getAllFactureAccompteByFactureGlobal(this.id_fact);
      this.getOneFactureGlobal(this.id_fact);
    }
  }

}
