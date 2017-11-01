import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

// Models
import { Client } from '../../models/client';
import { FactureGlobal } from '../../models/factureGlobal';

// Services
import { ClientService } from '../../service/client.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';
import { FactureGlobalService } from '../../service/facture-global.service';
import { historique } from '../../../environments/config';
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
  /**
   * facture global
   * 
   * @type {*}
   * @memberof FactureGlobalComponent
   */
  factureGlobal: any = {};

  /**
   * list factures globals
   * 
   * @type {FactureGlobal[]}
   * @memberof FactureGlobalComponent
   */
  listFactureGlobals: FactureGlobal[] = [];

  /**
   * client
   * 
   * @memberof FactureGlobalComponent
   */
  client = new Client();

  /**
   * client id
   * 
   * @type {number}
   * @memberof FactureGlobalComponent
   */
  id_client: number;

  /**
   * Attribut Description facture global
   * 
   * @type {string}
   * @memberof FactureGlobalComponent
   */
  descriptionModif: string;

  /**
   * validation ref facture global
   * 
   * @type {boolean}
   * @memberof FactureGlobalComponent
   */
  validationRef: boolean;

  /**
   * 
   * mode form
   * @memberof FactureGlobalComponent
   */
  mode = false;

  /**
   * on process
   * 
   * @memberof FactureGlobalComponent
   */
  processing = false;

  /**
   * facture global form
   * 
   * @type {FormGroup}
   * @memberof FactureGlobalComponent
   */
  factureForm: FormGroup;

  // Status images
  /**
   * image status true
   * 
   * @memberof FactureGlobalComponent
   */
  status_true = '../../assets/images/status_true.png';

  /**
   * image status false
   * 
   * @memberof FactureGlobalComponent
   */
  status_false = '../../assets/images/status_false.png';

  /**
   * Creates an instance of FactureGlobalComponent.
   * @param {ActivatedRoute} activatedRoute request routes params
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureAccompteService} factureAccompteService facture accompte service
   * @param {ClientService} clientService client service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder Reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash message
   * @memberof FactureGlobalComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private factureAccompteService: FactureAccompteService,
    private clientService: ClientService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService
  ) {
    this.generateForm();
    this.validationRef = false;
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
   * Get All Valid facture global by client
   * 
   * @param {any} client_id client id
   * @memberof FactureGlobalComponent
   */
  getAllValidFactureGlobalByClient(client_id) {
    this.listFactureGlobals = [];
    this.factureGlobalService.getAllFactureGlobalByClient(client_id)
      .subscribe(fact => {
        for (const f in fact) {
          if (fact.hasOwnProperty(f)) {
            if (fact[ f ].valid) {
              this.listFactureGlobals.push(fact[ f ]);
            }
          }
        }
      }, err => console.log('Could not load valid factures')
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
    const latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
    this.factureGlobal.date_creation = latest_date;
    this.factureForm.get('ref_factureGlobal').setValue(this.factureGlobal.ref_factureGlobal);
    this.factureForm.get('date_creation').setValue(latest_date);
    this.factureForm.get('montantTtcTotal').setValue(this.factureGlobal.montantTtcTotal);
    this.factureForm.get('client').setValue(this.factureGlobal.client);
  }

  /**
   * Update Facture global
   *
   * @memberof FactureGlobalComponent
   */
  updateFacture() {
    this.disableForm();
    this.processing = true;

    if (historique) {
      const newFacture = {
        status_factureGlobal: this.factureGlobal.status_factureGlobal,
        ref_factureGlobal: this.factureForm.get('ref_factureGlobal').value,
        date_creation: this.factureForm.get('date_creation').value,
        montantHt: this.factureGlobal.montantHt,
        tauxTva: this.factureGlobal.tauxTva,
        montantTtcTotal: this.factureGlobal.montantTtcTotal,
        montantTtcFacture: this.factureGlobal.montantTtcFacture,
        montantTtcRegle: this.factureGlobal.montantTtcRegle,
        client: this.factureGlobal.client,
        devis: this.factureGlobal.devis
      };

      this.factureGlobalService.addFactureGlobal(newFacture)
        .subscribe(data => {
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
        });

      // Set old facture global data
      this.factureGlobal.description = this.factureForm.get('descriptionModif').value;
      this.factureGlobal.valid = false;

      this.factureGlobalService.updateFactureGlobal(this.factureGlobal)
        .subscribe(
        data => {
          this.onSuccess();
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
    } else {
      const newFacture = new FactureGlobal({
        _id: this.factureGlobal._id,
        status_factureGlobal: this.factureGlobal.status_factureGlobal,
        ref_factureGlobal: this.factureForm.get('ref_factureGlobal').value,
        date_creation: this.factureForm.get('date_creation').value,
        montantHt: this.factureGlobal.montantHt,
        tauxTva: this.factureGlobal.tauxTva,
        montantTtcTotal: this.factureGlobal.montantTtcTotal,
        montantTtcFacture: this.factureGlobal.montantTtcFacture,
        montantTtcRegle: this.factureGlobal.montantTtcRegle,
        client: this.factureGlobal.client,
        devis: this.factureGlobal.devis
      });

      this.factureGlobalService.updateFactureGlobal(newFacture)
        .subscribe(data => {
          this.flashMessages.show('Facture modifiée', {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          this.onSuccess();
        }, err => {
          console.log('Erreur ' + err);
          this.flashMessages.show('Erreur : Facture non modifiée', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.processing = false;
          this.enableForm();
        });
    }

  }

  /**
   * Change param valid facture global to false
   * 
   * @param {FactureGlobal} factureGlobal facture global body
   * @memberof FactureGlobalComponent
   */
  onDelete(factureGlobal: FactureGlobal) {
    if (historique) {
      let factValid = false;
      this.factureAccompteService.getAllFactureAccompteByFactureGlobal(factureGlobal._id)
        .subscribe(
        data => {
          if (data.length > 0) {
            for (const f in data) {
              if (data.hasOwnProperty(f)) {
                if (data[ f ].valid) {
                  factValid = true;
                }
              }
            }
          }

          if (data.length === 0 || factValid === false) {
            factureGlobal.valid = false;
            factureGlobal.updated_at = new Date();
            factureGlobal.description = this.descriptionModif;
            this.factureGlobalService.updateFactureGlobal(factureGlobal)
              .subscribe(
              factureData => {
                this.flashMessages.show('Facture supprimée', {
                  classes: [ 'alert', 'alert-warning' ],
                  timeout: 3000
                });
                this.onSuccess();
                this.descriptionModif = '';
              },
              error => {
                console.log(error);
                this.flashMessages.show('Erreur: Facture non supprimée', {
                  classes: [ 'alert', 'alert-danger' ],
                  timeout: 3000
                });
                this.factureGlobal = {};
              }
              );
          } else {
            this.flashMessages.show('Suppression impossible ! La facture est associée à des factures d\'accomptes', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.factureGlobal = {};
            this.descriptionModif = '';
          }
        }, err => console.log('Erreur :' + err)
        );
    } else {
      this.factureAccompteService.getAllFactureAccompteByFactureGlobal(factureGlobal._id)
        .subscribe(
        data => {
          if (data.length === 0) {
            this.factureGlobalService.deleteFactureGlobal(factureGlobal._id)
              .subscribe(
              msg => {
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
                this.factureGlobal = {};
              }
              );
          } else {
            this.flashMessages.show('Suppression impossible ! La facture est associée à des factures d\'accomptes', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.factureGlobal = {};
          }
        }, err => console.log('Erreur :' + err)
        );
    }
  }

  /**
   * Store Facture global data to delete. 
   * Confirm modal implementation
   * 
   * @param {FactureGlobal} factureGlobal facture global body
   * @memberof FactureGlobalComponent
   */
  getFactureGlobalToDelete(factureGlobal: FactureGlobal) {
    this.factureGlobal = factureGlobal;
  }

  /**
   * on close modal
   * 
   * @memberof FactureGlobalComponent
   */
  closeModal() {
    this.factureGlobal = {};
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
    let status_client = true;
    // Fetch Facture Globals from Database
    this.factureGlobalService.getAllFactureGlobalByClient(client._id)
      .subscribe(
      FactureGlobals => {
        // Check each factureGlobal.status dans listFactureGlobals
        if (FactureGlobals.length > 0) {
          for (const factureGlobal in FactureGlobals) {
            if (FactureGlobals.hasOwnProperty(factureGlobal)) {
              if (FactureGlobals[ factureGlobal ].status_factureGlobal === false) {
                status_client = false;
              }
            }
          }
        } else {
          status_client = false;
        }

        // Check difference entre status_facture et status_client avant de requêter à la database
        // si status_facture === true && status_client !== true || 
        // status_facture === false && status_client !== false
        if ((status_client && this.client.status_client !== true) || (!status_client && this.client.status_client === true)) {
          this.clientService.updateStatus(client, status_client)
            .subscribe(
            data => console.log('Status client mis à jour'),
            err => console.log('Erreur mis à jour status client :' + err)
            );
        }
      },
      err => console.log(err)
      );
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
    if (historique) {
      this.getAllValidFactureGlobalByClient(this.id_client);
    } else {
      this.getAllFactureGlobalByClient(this.id_client);
    }
  }

  /**
   * on cancel form
   * 
   * @memberof FactureGlobalComponent
   */
  onCancel() {
    this.mode = false;
    this.processing = false;
    this.generateForm();
    this.factureGlobal = {};
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
      client: [ { value: this.factureGlobal.client, disabled: true }, Validators.required ],
      descriptionModif: [ this.factureGlobal.description ]
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
      const montantTTC = this.factureForm.controls[ 'montantHt' ].value + this.factureForm.controls[ 'tauxTva' ].value;
      this.factureForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
      this.factureGlobal.montantTtc = Number(montantTTC).toFixed(2);
    }
  }

  /**
   * somme montant total
   * 
   * @returns {string} somme
   * @memberof FactureGlobalComponent
   */
  getSumMontantTotal(): string {
    let sum = 0;
    for (const fact in this.listFactureGlobals) {
      if (this.listFactureGlobals.hasOwnProperty(fact)) {
        sum += this.listFactureGlobals[ fact ].montantTtcTotal;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * somme montant facturé
   * 
   * @returns {string} somme
   * @memberof FactureGlobalComponent
   */
  getSumMontantFacture(): string {
    let sum = 0;
    for (const fact in this.listFactureGlobals) {
      if (this.listFactureGlobals.hasOwnProperty(fact)) {
        sum += this.listFactureGlobals[ fact ].montantTtcFacture;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * somme montant réglé
   * 
   * @returns {string} somme
   * @memberof FactureGlobalComponent
   */
  getSumMontantRegle(): string {
    let sum = 0;
    for (const fact in this.listFactureGlobals) {
      if (this.listFactureGlobals.hasOwnProperty(fact)) {
        sum += this.listFactureGlobals[ fact ].montantTtcRegle;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * 
   * (blur) listener : Verification de la ref_factureGlobal.
   * - si data.success === true && ref != factureGlobal.ref => ref_factureGlobal utilisée => validationRef = true,
   * - si data.success === false => ref_factureGlobal non utilisée => validationRef = false
   *
   * @memberof ValiderDevisComponent
   */
  verifRef() {
    this.validationRef = false;
    this.factureGlobalService.getOneFactureGlobalByRef(this.client._id, this.factureForm.get('ref_factureGlobal').value)
      .subscribe(
      data => {
        if (data.success) {
          // onUpdate : Vérif si ref dans l'input == ref initial de la facture global 
          if (this.factureForm.get('ref_factureGlobal').value !== this.factureGlobal.ref_factureGlobal) {
            return this.validationRef = true;
          }
        }
      },
      error => {
        console.log(error)
      }
      );
    return this.validationRef;
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
      if (historique) {
        this.getAllValidFactureGlobalByClient(this.id_client);
      } else {
        this.getAllFactureGlobalByClient(this.id_client);
      }
      this.getClient(this.id_client);
    } else {
      this.getAllFactureGlobal();
    }
  }

}
