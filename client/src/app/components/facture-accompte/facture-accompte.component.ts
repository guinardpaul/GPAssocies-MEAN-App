import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

import { Client } from '../../models/client';
import { FactureAccompte } from '../../models/factureAccompte';
import { FactureGlobal } from '../../models/factureGlobal';
import { Reglement } from '../../models/reglement';
import { ClientService } from '../../service/client.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';
import { FactureGlobalService } from '../../service/facture-global.service';
import { ReglementService } from '../../service/reglement.service';
import { historique } from '../../../environments/config';

// Models
// Services
/**
 * Component used for facture accompte and reglement
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
  /**
   * list factures accomptes
   * 
   * @type {FactureAccompte[]}
   * @memberof FactureAccompteComponent
   */
  listFactureAccompte: FactureAccompte[] = [];

  /**
   * list reglements
   * 
   * @type {Reglement[]}
   * @memberof FactureAccompteComponent
   */
  listReglement: Reglement[] = [];

  /**
   * list factures global
   * 
   * @type {FactureGlobal[]}
   * @memberof FactureAccompteComponent
   */
  listFactureGlobal: FactureGlobal[] = [];

  /**
   * facture global id
   * 
   * @type {number}
   * @memberof FactureAccompteComponent
   */
  id_fact: number;

  /**
   * facture global
   * 
   * @type {*}
   * @memberof FactureAccompteComponent
   */
  factureGlobal: any = {};

  /**
   * facture accompte
   * 
   * @type {*}
   * @memberof FactureAccompteComponent
   */
  factureAccompte: any = {};

  /**
   * reglement
   * 
   * @type {*}
   * @memberof FactureAccompteComponent
   */
  reglement: any = {};

  /**
   * client
   * 
   * @type {Client}
   * @memberof FactureAccompteComponent
   */
  client: Client;

  /**
   * Description modif on delete facture accompte
   * 
   * @type {string}
   * @memberof FactureAccompteComponent
   */
  descriptionModif: string;

  // Validation form
  /**
   * validation ref facture accompte
   * 
   * @type {boolean}
   * @memberof FactureAccompteComponent
   */
  validationRef: boolean;

  /**
   * validation montant facture accompte
   * 
   * @type {boolean}
   * @memberof FactureAccompteComponent
   */
  validationMontantFacture: boolean;

  /**
   * validation reglement facture accompte
   * 
   * @type {boolean}
   * @memberof FactureAccompteComponent
   */
  validationReglement: boolean;

  /**
   * on process
   * 
   * @memberof FactureAccompteComponent
   */
  processing = false;

  // Mode display form
  /**
   * mode form facture accompte
   * 
   * @memberof FactureAccompteComponent
   */
  mode = false;

  /**
   * mode form reglement
   * 
   * @memberof FactureAccompteComponent
   */
  modeAddReglement = false;

  /**
   * montant TTC total
   * 
   * @type {number}
   * @memberof FactureAccompteComponent
   */
  montantTTCTotal: number;

  /**
   * montant TTC facturé
   * 
   * @type {number}
   * @memberof FactureAccompteComponent
   */
  montantTTCFacture: number;

  /**
   * facture form
   * 
   * @type {FormGroup}
   * @memberof FactureAccompteComponent
   */
  factureForm: FormGroup;

  /**
   * reglement form
   * 
   * @type {FormGroup}
   * @memberof FactureAccompteComponent
   */
  reglementForm: FormGroup;

  /**
   * Checkbox reglement complet
   * 
   * @type {boolean}
   * @memberof FactureAccompteComponent
   */
  reglementComplet: boolean;

  // Status images
  /**
   * image status true
   * 
   * @memberof FactureAccompteComponent
   */
  status_true = '../../assets/images/status_true.png';

  /**
   * image status false
   * 
   * @memberof FactureAccompteComponent
   */
  status_false = '../../assets/images/status_false.png';

  /**
   * Creates an instance of FactureAccompteComponent.
   * 
   * @param {ActivatedRoute} activatedRoute request routes param
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureAccompteService} factureAccompteService facture Accompte service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @param {ClientService} clientService client service
   * @param {ReglementService} reglementService reglement service
   * @param {Router} router router
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
    private reglementService: ReglementService,
    private router: Router
  ) {
    this.generateForm();
    this.generateReglementForm();
    this.reglementComplet = false;
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
   * @param {number} id client id
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
        this.listFactureAccompte = factureAccompte;
      },
      err => console.log(err)
      );
  }

  /**
  * Get All Valid Facture Mois By Facture Global
  *
  * @param {number} id factureGlobal._id
  * @memberof FactureAccompteComponent
  */
  getAllValidFactureAccompteByFactureGlobal(id: number) {
    this.listFactureAccompte = [];
    this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
      .subscribe(
      factureAccompte => {
        for (const f in factureAccompte) {
          if (factureAccompte.hasOwnProperty(f)) {
            if (factureAccompte[ f ].valid) {
              this.listFactureAccompte.push(factureAccompte[ f ]);
            }
          }
        }
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
      listReglements => {
        this.listReglement = listReglements;
      },
      err => console.log(err),
    );
  }

  /**
   * Add Facture Accompte
   *
   * @memberof FactureAccompteComponent
   */
  addFactureAccompte() {
    this.processing = true;
    this.disableFactureForm();
    const newFacture = {
      ref_factureAccompte: this.factureForm.get('ref_factureAccompte').value,
      date_creation: this.factureForm.get('date_creation').value,
      montantFacture: this.factureForm.get('montantFacture').value,
      reglementClient: 0,
      factureGlobal: this.factureGlobal._id,
    };

    this.factureAccompteService.addFactureAccompte(newFacture)
      .subscribe(
      data => {
        if (data.success) {
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
   * Add reglement
   *
   * @memberof FactureAccompteComponent
   */
  addReglement() {
    this.processing = true;
    this.disableReglementForm();
    // Récupère Reglement data du form
    const newReglement = {
      date_reglement: this.reglementForm.get('date_creation').value,
      reglementTtc: this.reglementForm.get('reglementTtc').value,
      factureAccompte: this.factureAccompte._id
    };

    // add Reglement
    this.reglementService.addReglement(newReglement)
      .subscribe(
      data => {
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
      }, err => {
        this.flashMessages.show(JSON.parse(err._body).message, {
          classes: [ 'alert', 'alert-danger' ],
          timeout: 3000
        });
        this.processing = false;
        this.enableReglementForm();
      });
  }

  /**
   * Delete Facture Accompte si NE possède pas de Reglement
   *
   * @param {number} id factureAccompte._id
   * @param {number} montantFacture factureAccomte montantTtcFacture
   * @param {number} reglementClient factureAccomte montantTtcRegle
   * @memberof FactureAccompteComponent
   */
  deleteFactureAccompte(factureAccompte: FactureAccompte) {
    this.reglementService.getReglementByFactureAccompte(factureAccompte._id)
      .subscribe(
      data => {
        if (data.length === 0) {

          if (historique) {
            // Set value delete
            factureAccompte.valid = false;
            factureAccompte.description = this.descriptionModif;
            factureAccompte.updated_at = new Date();
            this.factureAccompteService.updateFactureAccompte(factureAccompte)
              .subscribe(
              factureData => {
                if (factureData.success) {
                  this.flashMessages.show(factureData.message, {
                    classes: [ 'alert', 'alert-warning' ],
                    timeout: 3000
                  });
                  // Update Facture global montantTtcFacture
                  this.updateMontantFactureGlobal(this.factureGlobal, -factureAccompte.montantFacture);
                  // Update facture global reglementTtcTotal
                  this.updateReglementClientFactureGlobal(this.factureGlobal, -factureAccompte.reglementClient);

                  this.onSuccess();
                } else {
                  this.flashMessages.show(data.message, {
                    classes: [ 'alert', 'alert-danger' ],
                    timeout: 3000
                  });
                }
              }
              );
          } else {
            this.factureAccompteService.deleteFactureAccompte(factureAccompte._id)
              .subscribe(
              factureData => {
                if (factureData.success) {
                  this.flashMessages.show(factureData.message, {
                    classes: [ 'alert', 'alert-warning' ],
                    timeout: 3000
                  });
                  // Update Facture global montantTtcFacture
                  this.updateMontantFactureGlobal(this.factureGlobal, -factureAccompte.montantFacture);
                  // Update facture global reglementTtcTotal
                  this.updateReglementClientFactureGlobal(this.factureGlobal, -factureAccompte.reglementClient);

                  this.onSuccess();
                } else {
                  this.flashMessages.show(data.message, {
                    classes: [ 'alert', 'alert-danger' ],
                    timeout: 3000
                  });
                }
              }
              );
          }
        } else {
          this.flashMessages.show('Suppression impossible ! La facture d\'accompte est associée à des règlements', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
        }
      }, err => console.log('Erreur :' + err)
      );
  }

  /**
   * Set facture accompte to delete
   * 
   * @param {FactureAccompte} factureAccompte facture accompte body
   * @memberof FactureAccompteComponent
   */
  getFactureAccompteToDelete(factureAccompte: FactureAccompte) {
    this.factureAccompte = factureAccompte;
  }

  /**
   * on close modal
   * 
   * @memberof FactureAccompteComponent
   */
  closeModal() {
    this.factureAccompte = {};
    this.descriptionModif = '';
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
    this.processing = true;
    this.reglementService.deleteReglement(id)
      .subscribe(
      data => {
        if (data.success) {
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-warning' ],
            timeout: 3000
          });
          // Update facture accompte reglementClient
          this.updateReglementClientFactureAccompte(this.factureAccompte, -reglementClient);
          // Update facture global reglementTtcTotal
          this.updateReglementClientFactureGlobal(this.factureGlobal, -reglementClient);
          // Get all reglement by facture accompte
          this.getAllReglementByFactureAccompte(this.factureAccompte._id);

          this.processing = false;
        } else {
          this.flashMessages.show(data.message, {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.processing = false;
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
          // Update status facture accompte
          this.updateStatusFactureAccompte(data.obj);
          // this.onSuccess();
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
    let status_factureAccompte = false;
    // Check if montantFacture === reglementClient
    if (factureAccompte.reglementClient === factureAccompte.montantFacture) {
      status_factureAccompte = true;
    }

    this.factureAccompteService.updateStatusFactureAccompte(factureAccompte, status_factureAccompte)
      .subscribe(
      data => console.log('Status facture accompte'),
      err => console.log(err)
      );
    // Get all facture accompte by facture global
    if (historique) {
      this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
    } else {
      this.getAllFactureAccompteByFactureGlobal(this.id_fact);
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
    let status_factureGlobal = false;

    // Check montant facture
    if (factureGlobal.montantTtcFacture === factureGlobal.montantTtcRegle) {
      status_factureGlobal = true;
    }

    this.factureGlobalService.updateStatusFactureGlobal(factureGlobal, status_factureGlobal)
      .subscribe(
      data => {
        console.log('Status facture global updated');
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
      data => console.log('updateMontantFactureGlobal réussi'),
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
        console.log('updateReglementClientFactureGlobal réussi');
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
    let status_client = true;

    // Fetch Facture Globals from Database
    // this.getAllFactureGlobalByClient(this.client._id);
    this.factureGlobalService.getAllFactureGlobalByClient(this.client._id)
      .subscribe(
      data => {
        // Si list non vide : check each factureGlobal.status dans listFactureGlobal
        if (data.length > 0) {
          for (const factureGlobal in data) {
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
          clientData => console.log('Status client mis à jour'),
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
    if (historique) {
      this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
    } else {
      this.getAllFactureAccompteByFactureGlobal(this.id_fact);
    }

    this.mode = false;
    this.modeAddReglement = false;
    this.processing = false;
    this.factureAccompte = {};
    this.reglement = {};
    this.descriptionModif = '';
    this.reglementComplet = false;
    this.generateForm();
    this.generateReglementForm();
  }

  /**
   * onAdd Facture accompte
   * affiche le form seulement si l'ajout d'une facture d'accompte est possible
   * cad somme montant facturé < montantTotalTtc facture global
   *
   * @memberof FactureAccompteComponent
   */
  onAddFactureAccompte() {
    this.modeAddReglement = false;
    // Calcul la somme montantFacture des facture d'accompte
    let sommeMontantFacture = 0;
    let montantFactureRestant = 0;
    for (const facture in this.listFactureAccompte) {
      if (this.listFactureAccompte.hasOwnProperty(facture)) {
        sommeMontantFacture += this.listFactureAccompte[ facture ].montantFacture;
      }
    }
    // Vérif si somme des Montants Facturés est égale montant TTC total de la facture
    if (this.factureGlobal.montantTtcTotal > sommeMontantFacture) {
      // Calcul montant facturé max restant
      montantFactureRestant = this.factureGlobal.montantTtcTotal - sommeMontantFacture;
      // Generate form and set values
      this.generateForm();
      const latest_date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
      this.factureForm.get('ref_factureAccompte').setValue(this.factureGlobal.ref_factureGlobal);
      this.factureForm.get('date_creation').setValue(latest_date);
      this.factureGlobal.date_creation = latest_date;
      this.factureForm.get('montantFacture').setValue(montantFactureRestant.toFixed(2));
      this.factureAccompte.montantFacture = montantFactureRestant;
      this.mode = true;
    } else {
      this.flashMessages.show('Création impossible : le montant total de la facture est égal à la somme des montants facturés', {
        classes: [ 'alert', 'alert-warning' ],
        timeout: 6000
      });
    }
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
    this.reglementComplet = false;
    this.generateForm();
    this.generateReglementForm();
    this.getAllReglementByFactureAccompte(factureAccompte._id);
    this.reglement = {};
    this.factureAccompte = factureAccompte;
    const latest_date = this.datePipe.transform(this.factureAccompte.date_creation, 'yyyy-MM-dd');
    this.factureAccompte.date_creation = latest_date;
    this.reglementForm.get('date_creation').setValue(latest_date);
    this.modeAddReglement = true;
    this.mode = false;
  }

  onReglementComplet() {
    this.reglementComplet = !this.reglementComplet;
    if (this.reglementComplet) {
      const reglementRestant = this.factureAccompte.montantFacture - this.factureAccompte.reglementClient;
      this.reglementForm.get('reglementTtc').setValue(reglementRestant);
      this.validationReglement = false;
    } else {
      this.reglementForm.get('reglementTtc').setValue(0);
    }
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
    this.validationMontantFacture = false;
    this.validationRef = false;
    this.validationReglement = false;
    this.reglementComplet = false;
    this.factureAccompte = {};
    this.reglement = {};
  }

  /**
   * Generate form add facture accompte
   *
   * @memberof FactureAccompteComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureAccompte: [ this.factureGlobal.ref_factureGlobal, Validators.required ],
      date_creation: [ Date.now ],
      montantFacture: [ this.factureAccompte.montantFacture, Validators.compose([
        Validators.required,
        this.isNumber
      ]) ],
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
      reglementTtc: [ this.factureAccompte.reglementClient, Validators.compose([
        Validators.required,
        this.isNumber
      ]) ]
    });
  }

  /**
   * Disable facture accompte form controls
   * 
   * @memberof FactureAccompteComponent
   */
  disableFactureForm() {
    this.factureForm.disable();
  }

  /**
   * Disable reglement form controls
   * 
   * @memberof FactureAccompteComponent
   */
  disableReglementForm() {
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
   * Somme montantFacture
   * 
   * @returns {string} somme
   * @memberof FactureAccompteComponent
   */
  getSumMontantFacture(): string {
    let sum = 0;
    for (const fact in this.listFactureAccompte) {
      if (this.listFactureAccompte.hasOwnProperty(fact)) {
        sum += this.listFactureAccompte[ fact ].montantFacture;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * Somme reglementClient
   * 
   * @returns {string} somme
   * @memberof FactureAccompteComponent
   */
  getSumReglementClient(): string {
    let sum = 0;
    for (const fact in this.listFactureAccompte) {
      if (this.listFactureAccompte.hasOwnProperty(fact)) {
        sum += this.listFactureAccompte[ fact ].reglementClient;
      }
    }
    return sum.toFixed(2);
  }

  // VALIDATIONS
  /**
   * Check if controls.value is a number
   * 
   * @param {any} controls value to check
   * @returns 
   * @memberof FactureAccompteComponent
   */
  isNumber(controls) {
    const regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {
        isNumber: true
      };
    }
  }

  /**
   * 
   * (blur) listener : Verification de la ref_factureAccompte.
   * - si data.success === true && ref != factureAccompte.ref => ref_factureAccompte utilisée => validationRef = true,
   * - si data.success === false => ref_factureAccompte non utilisée => validationRef = false
   * @returns {boolean} set validationRef
   * @memberof ValiderDevisComponent
   */
  verifRef(): boolean {
    this.factureAccompteService.getOneFactureAccompteByRef(this.factureGlobal._id, this.factureForm.get('ref_factureAccompte').value)
      .subscribe(
      data => {
        if (data.success) {
          // onUpdate : Vérif si ref dans l'input == ref initial du factureAccompte 
          if (this.factureForm.get('ref_factureAccompte').value !== this.factureAccompte.ref_factureAccompte) {
            return this.validationRef = true;
          }
        }
      },
      error => {
        console.log(error)
      }
      );
    return this.validationRef = false;
  }

  /**
   * (blur) listener : Vérification du montantFacturé de la facture accompte
   * 
   * @returns {boolean} set validationMontantFacture
   * @memberof FactureAccompteComponent
   */
  verifMontantFacture(): boolean {
    const montantRestant = this.factureGlobal.montantTtcTotal - this.factureGlobal.montantTtcFacture;
    if (this.factureForm.get('montantFacture').value > montantRestant) {
      return this.validationMontantFacture = true;
    }
    return this.validationMontantFacture = false;
  }

  /**
   * (blur) listener : Vérifiaction du reglement de la facture accompte
   * 
   * @returns {boolean} set validationReglement
   * @memberof FactureAccompteComponent
   */
  verifReglement(): boolean {
    const reglementRestant = this.factureAccompte.montantFacture - this.factureAccompte.reglementClient;
    if (this.reglementForm.get('reglementTtc').value > reglementRestant) {
      return this.validationReglement = true;
    }
    return this.validationReglement = false;
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
      if (historique) {
        this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
      } else {
        this.getAllFactureAccompteByFactureGlobal(this.id_fact);
      }
      this.getOneFactureGlobal(this.id_fact);
    } else {
      this.router.navigate([ '/pageNotFound' ]);
    }
  }

}
