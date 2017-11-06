import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
// Models
import { Client } from '../../models/client';
import { Devis } from '../../models/devis';
import { CONST_TAUX } from '../../models/taux.const';
import { DetailsDevis } from '../../models/detailsDevis';
// Services
import { ClientService } from '../../service/client.service';
import { DetailsDevisService } from '../../service/details-devis.service';
import { DevisService } from '../../service/devis.service';
import { FactureGlobalService } from '../../service/facture-global.service';
// Env const
import { historique } from '../../../environments/config';

/**
 *
 * @author Paul GUINARD
 * @export DevisComponent
 * @class DevisComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: [ './devis.component.css' ]
})
export class DevisComponent implements OnInit {
  /**
   * list devis
   * 
   * @type {Devis[]}
   * @memberof DevisComponent
   */
  listDevis: Devis[] = [];

  /**
   * list clients
   * 
   * @type {Client[]}
   * @memberof DevisComponent
   */
  listClient: Client[];

  /**
   * devis
   * 
   * @type {*}
   * @memberof DevisComponent
   */
  devis: any = {};

  /**
   * description field when update or delete devis
   * 
   * @type {string}
   * @memberof DevisComponent
   */
  descriptionModif: string;

  /**
   * DetailsDevis1
   * 
   * @type {*}
   * @memberof DevisComponent
   */
  detailsDevis1: any = { tauxTva: CONST_TAUX[ 1 ] };

  /**
   * DetailsDevis2
   * 
   * @type {*}
   * @memberof DevisComponent
   */
  detailsDevis2: any = { tauxTva: CONST_TAUX[ 2 ] };

  /**
   * DetailsDevis3
   * 
   * @type {*}
   * @memberof DevisComponent
   */
  detailsDevis3: any = { tauxTva: CONST_TAUX[ 3 ] };

  /**
   * client
   * 
   * @memberof DevisComponent
   */
  client = new Client();

  /**
   * validation ref devis
   * 
   * @type {boolean}
   * @memberof DevisComponent
   */
  validationRef: boolean;

  /**
   * client id
   * 
   * @type {number}
   * @memberof DevisComponent
   */
  id_client: number;

  /**
   * mode form
   * 
   * @memberof DevisComponent
   */
  mode = false;

  /**
   * updateMode form group for descriptionModif
   * 
   * @memberof DevisComponent
   */
  updateMode = false;

  /**
   * on process
   * 
   * @memberof DevisComponent
   */
  processing = false;

  /**
   * devis form
   * 
   * @type {FormGroup}
   * @memberof DevisComponent
   */
  devisForm: FormGroup;

  /**
   * Creates an instance of DevisComponent.
   * @param {DevisService} devisService devis service
   * @param {DatePipe} datepipe format date
   * @param {ActivatedRoute} activatedRoute request route params
   * @param {FormBuilder} formBuilder reactive forms builder
   * @param {ClientService} clientService client service
   * @param {FlashMessagesService} flashMessages angular flash messages
   * @param {DetailsDevisService} detailsDevisService Details Devis service
   * @param {FactureGlobalService} factureGlobalService Facture global service
   * @param {Router} router router
   * @memberof DevisComponent
   */
  constructor(
    private devisService: DevisService,
    private datepipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private flashMessages: FlashMessagesService,
    private detailsDevisService: DetailsDevisService,
    private factureGlobalService: FactureGlobalService,
    private router: Router
  ) {
    this.generateForm()
  }

  /**
   * Get ALL Client.
	 * Method used for <select options>.
	 * Used for Select Option on add/update Devis Form.
   * NOT USED
   *
   * @memberof DevisComponent
   */
  getAllClient() {
    this.clientService.getAllClients()
      .subscribe(
      clients => this.listClient = clients,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ALL DEVIS.
	 * Method used when params['id_client'] NOT set into url.
   *
   * @memberof DevisComponent
   */
  getAllDevis() {
    this.devisService.getAllDevis()
      .subscribe(
      devis => this.listDevis = devis,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ALL DEVIS BY CLIENT.
	 * Method used when params['id_client'] set into url.
   *
   * @param {number} id client._id
   * @memberof DevisComponent
   */
  getAllDevisByClient(id: number) {
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      devis => this.listDevis = devis,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ALL VALID DEVIS BY CLIENT:
   * - Method used when params['id_client'] set into url
   * - return seulement Devis valid
   * 
   * @param {number} id client._id
   * @memberof DevisComponent
   */
  getAllValidDevisByClient(id: number) {
    this.listDevis = [];
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      devis => {
        for (const dev in devis) {
          if (devis.hasOwnProperty(dev)) {
            if (devis[ dev ].valid) {
              this.listDevis.push(devis[ dev ]);
            }
          }
        }
      },
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ONE CLIENT by ID
	 * Set current Client informations for view.
   *
   * @param {number} id client._id
   * @memberof DevisComponent
   */
  getClient(id: number) {
    this.clientService.getOneClient(id)
      .subscribe(
      client => this.client = client,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ONE DEVIS by ID
	 * Method not used.
   *
   * @param {number} id devis._id
   * @memberof DevisComponent
   */
  getOneDevis(id: number) {
    this.devisService.getOneDevis(id)
      .subscribe(
      devis => this.devis = devis,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * ADD/UPDATE DEVIS.
	 * - Si this.devis._id exists : update old Devis() and Add new.
	 * - Si this.devis._id == null || 0 : addDevis().
   *
   * @memberof DevisComponent
   */
  addDevis() {
    this.processing = true;
    this.disableForm();
    // Set Devis data to save
    const newDevis = {
      ref_devis: this.devisForm.get('ref_devis').value,
      date_creation: this.devisForm.get('date_creation').value,
      montantHt: this.devisForm.get('montantHt').value,
      tauxTva: this.devisForm.get('tauxTva').value,
      montantTtc: this.devisForm.get('montantTtc').value,
      client: this.id_client,
    };
    // Check si Add ou Update
    if (this.devis._id == null || this.devis._id === 0 || this.devis._id === '') {
      this.devisService.addDevis(newDevis)
        .subscribe(
        data => {
          if (data.success) {
            this.flashMessages.show('Devis créé', {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            this.addDetailsDevis(data.obj);
          } else {
            this.flashMessages.show(data.message, {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.processing = false;
            this.enableForm();
          }
        },
        error => {
          console.log('Erreur :' + error);
        }
        );
    } else {
      // Si historique true
      if (historique) {
        // Set new Devis data to add
        const updateDevis = {
          ref_devis: this.devisForm.get('ref_devis').value,
          date_creation: this.devisForm.get('date_creation').value,
          montantHt: this.devisForm.get('montantHt').value,
          tauxTva: this.devisForm.get('tauxTva').value,
          montantTtc: this.devisForm.get('montantTtc').value,
          client: this.id_client
        };
        // Save to database
        this.devisService.addDevis(updateDevis)
          .subscribe(data => {
          }, err => console.log(err)
          );
        // Set old devis description & valid
        this.devis.description = this.devisForm.get('descriptionModif').value;
        this.devis.valid = false;
        this.devis.updated_at = new Date();

        this.devisService.updateDevis(this.devis)
          .subscribe(
          data => {
            this.flashMessages.show('Devis modifié', {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            this.fetchAnddeleteDetailsDevis(this.devis._id);
          },
          error => {
            console.log('Erreur :' + error);
            this.flashMessages.show('Erreur modification devis', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.processing = false;
            this.enableForm();
          }
          );
        // Si historique false
      } else {
        // Set new Devis data to add
        const updateDevis = {
          _id: this.devis._id,
          ref_devis: this.devisForm.get('ref_devis').value,
          date_creation: this.devisForm.get('date_creation').value,
          montantHt: this.devisForm.get('montantHt').value,
          tauxTva: this.devisForm.get('tauxTva').value,
          montantTtc: this.devisForm.get('montantTtc').value,
          client: this.id_client
        };
        // Update to database
        this.devisService.updateDevis(updateDevis)
          .subscribe(
          data => {
            this.flashMessages.show('Devis modifié', {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            this.updateDetailsDevis(data.obj);
          },
          error => {
            console.log('Erreur :' + error);
            this.flashMessages.show('Erreur modification devis', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.processing = false;
            this.enableForm();
          }
          );
      }
    }
  }

  /**
   * onAddDevis() success :
   * - set detailsDevis.devis = devis._id : get from data.obj
   * - save all DetailsDevis to database
   *
   * @param {any} devis devis data
   * @memberof DevisComponent
   */
  addDetailsDevis(devis) {
    // Set DetailsDevis data from devisForm
    this.detailsDevis1 = {
      tauxTva: this.devisForm.get('tauxTva1').value,
      montantHt: this.devisForm.get('montantHt1').value,
      montantTtc: this.devisForm.get('montantTtc1').value,
      devis: devis._id
    };
    this.detailsDevis2 = {
      tauxTva: this.devisForm.get('tauxTva2').value,
      montantHt: this.devisForm.get('montantHt2').value,
      montantTtc: this.devisForm.get('montantTtc2').value,
      devis: devis._id
    };
    this.detailsDevis3 = {
      tauxTva: this.devisForm.get('tauxTva3').value,
      montantHt: this.devisForm.get('montantHt3').value,
      montantTtc: this.devisForm.get('montantTtc3').value,
      devis: devis._id
    };

    // Save DetailsDevis
    this.detailsDevisService.addDetailsDevis(this.detailsDevis1)
      .subscribe(
      data1 => {
        this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };

        this.detailsDevisService.addDetailsDevis(this.detailsDevis2)
          .subscribe(
          data2 => {
            this.detailsDevis2 = {};
            this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };

            this.detailsDevisService.addDetailsDevis(this.detailsDevis3)
              .subscribe(
              data3 => {
                this.detailsDevis3 = {};
                this.detailsDevis3 = { tauxTva: CONST_TAUX[ 3 ] };
                this.onSuccess();
              }, (err) => {
                console.log(err);
                this.enableForm();
              }
              );
          }, (err) => {
            console.log(err);
            this.enableForm();
          }
          );
      }, (err) => {
        console.log(err);
        this.enableForm();
      }
      );
  }

  /**
   *update DetailsDevis
   * 
   * @param {any} devis devis
   * @memberof DevisComponent
   */
  updateDetailsDevis(devis) {
    // Set DetailsDevis data from devisForm
    this.detailsDevis1.montantHt = this.devisForm.get('montantHt1').value;
    this.detailsDevis1.tauxTva = this.devisForm.get('tauxTva1').value;
    this.detailsDevis1.montantTtc = this.devisForm.get('montantTtc1').value;

    this.detailsDevis2.montantHt = this.devisForm.get('montantHt2').value;
    this.detailsDevis2.tauxTva = this.devisForm.get('tauxTva2').value;
    this.detailsDevis2.montantTtc = this.devisForm.get('montantTtc2').value;

    this.detailsDevis3.montantHt = this.devisForm.get('montantHt3').value;
    this.detailsDevis3.tauxTva = this.devisForm.get('tauxTva3').value;
    this.detailsDevis3.montantTtc = this.devisForm.get('montantTtc3').value;

    // Update DetailsDevis
    this.detailsDevisService.updateDetailsDevis(this.detailsDevis1)
      .subscribe(
      data1 => {
        this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };

        this.detailsDevisService.updateDetailsDevis(this.detailsDevis2)
          .subscribe(
          data2 => {
            this.detailsDevis2 = {};
            this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };

            this.detailsDevisService.updateDetailsDevis(this.detailsDevis3)
              .subscribe(
              data3 => {
                this.detailsDevis3 = {};
                this.detailsDevis3 = { tauxTva: CONST_TAUX[ 3 ] };
                this.onSuccess();
              }, (err) => {
                console.log(err);
                this.enableForm();
              }
              );
          }, (err) => {
            console.log(err);
            this.enableForm();
          }
          );
      }, (err) => {
        console.log(err);
        this.enableForm();
      }
      );
  }

  /**
   * Delete devis and DetailsDevis associé fetch from database by getDetailsDevisByDevis() method SI :
   * - le client ne possède pas de facture global
   *
   * @param {Devis} devis devis body
   * @memberof DevisComponent
   */
  onDelete(devis: Devis) {
    if (historique) {
      let devisValid = false;
      this.factureGlobalService.getAllFactureGlobalByDevis(devis._id)
        .subscribe(
        data => {
          if (data.length > 0) {
            for (const d in data) {
              if (data.hasOwnProperty(d)) {
                if (data[ d ].valid) {
                  devisValid = true;
                }
              }
            }
          }
          if (data.length === 0 || devisValid === false) {
            devis.valid = false;
            devis.description = this.descriptionModif;
            devis.updated_at = new Date();
            // Delete Devis
            this.devisService.updateDevis(devis)
              .subscribe(msg => {
                this.flashMessages.show('Devis supprimé', {
                  classes: [ 'alert', 'alert-warning' ],
                  timeout: 3000
                });
                this.onSuccess();
                // Fetch DetailsDevis by Devis._id & delete detailsDevis
                this.fetchAnddeleteDetailsDevis(devis._id);
              },
              error => {
                console.log(error),
                  this.flashMessages.show('Erreur : Devis non supprimé', {
                    classes: [ 'alert', 'alert-danger' ],
                    timeout: 3000
                  });
              }
              );
          } else {
            this.flashMessages.show('Suppression impossible ! Le devis est associé à des factures.', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.onSuccess();
          }
        }, err => console.log('Erreur :' + err)
        );
    } else {
      this.factureGlobalService.getAllFactureGlobalByDevis(devis._id)
        .subscribe(
        data => {
          if (data.length === 0) {
            this.devisService.deleteDevis(devis._id)
              .subscribe(
              dev => {
                this.flashMessages.show('Devis supprimé', {
                  classes: [ 'alert', 'alert-warning' ],
                  timeout: 3000
                });
                this.onSuccess();
                // Fetch DetailsDevis by Devis._id & delete detailsDevis
                this.fetchAnddeleteDetailsDevis(devis._id);
              }, err => {
                console.log(err);
                this.flashMessages.show('Erreur : Devis non supprimé', {
                  classes: [ 'alert', 'alert-danger' ],
                  timeout: 3000
                });
              }
              )
          } else {
            this.flashMessages.show('Suppression impossible ! Le devis est associé à des factures.', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.onSuccess();
          }
        }, err => {
          console.log(err)
        });
    }
  }

  /**
   * get DetailsDevis list by devis Id & delete details devis
   * 
   * @param {number} id_devis devis ID
   * @memberof DevisComponent
   */
  fetchAnddeleteDetailsDevis(id_devis: number) {
    // Fetch DetailsDevis by Devis._id
    this.detailsDevisService.getDetailsDevisByDevis(id_devis)
      .subscribe(detailsDevisList => {
        // Delete detailsDevis
        detailsDevisList.forEach(detailsDevis => {
          this.detailsDevisService.deleteDetailsDevis(detailsDevis._id)
            .subscribe(data => {
              this.onSuccess();

            }, err => {
              console.log('Erreur deleted :' + err);
            });
        });
      });
  }

  /**
   * on close modal
   * 
   * @memberof DevisComponent
   */
  closeModal() {
    this.devis = {};
  }

  /**
   * Function success for all request to service.
   * Reset table by fetching data from database.
   *
   * @memberof DevisComponent
   */
  onSuccess() {
    this.mode = false;
    this.updateMode = false;
    this.descriptionModif = '';
    this.generateForm();
    this.devis = {};
    this.processing = false;
    this.devisForm.controls[ 'montantTtc1' ].setValue(0);
    this.devisForm.controls[ 'montantTtc2' ].setValue(0);
    this.devisForm.controls[ 'montantTtc3' ].setValue(0);
    this.enableForm();
    // Différente route à utiliser une fois le dashboard implémenté
    if (this.activatedRoute.snapshot.params[ 'id_client' ] !== undefined) {
      if (historique) {
        this.getAllValidDevisByClient(this.id_client);
      } else {
        this.getAllDevisByClient(this.id_client);
      }
    } else {
      this.getAllDevis();
    }
  }

  /**
   * Display devisForm
   *
   * @memberof DevisComponent
   */
  onAdd() {
    this.mode = true;
    this.updateMode = false;
    this.generateForm();
    this.devis = {};
    this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };
    this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };
    this.detailsDevis3 = { tauxTva: CONST_TAUX[ 3 ] };
    const latest_date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
    this.devisForm.get('date_creation').setValue(latest_date);
    this.devis.date_creation = latest_date;
  }

  /**
   * Display devisForm and set devis values to update
   *
   * @param {any} d devis body
   * @memberof DevisComponent
   */
  onUpdate(d) {
    this.getClient(d.client);
    this.devis = d;
    const latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
    this.devis.date_creation = latest_date;
    this.devis.client = this.client._id;
    this.mode = true;
    this.updateMode = true;
    this.devisForm.get('ref_devis').setValue(this.devis.ref_devis);

    this.detailsDevisService.getDetailsDevisByDevis(d._id)
      .subscribe(
      data => {
        // Fetch data from database
        this.detailsDevis1 = data[ 0 ];
        this.detailsDevis2 = data[ 1 ];
        this.detailsDevis3 = data[ 2 ];

        // Si detailsDevis undefined => set new DetailsDevis()
        if (this.detailsDevis1 === undefined) {
          this.detailsDevis1 = new DetailsDevis({
            montantHt: 0,
            tauxTva: CONST_TAUX[ 1 ],
            montantTtc: 0
          });
        }
        if (this.detailsDevis2 === undefined) {
          this.detailsDevis2 = new DetailsDevis({
            montantHt: 0,
            tauxTva: CONST_TAUX[ 2 ],
            montantTtc: 0
          });
        }
        if (this.detailsDevis3 === undefined) {
          this.detailsDevis3 = new DetailsDevis({
            montantHt: 0,
            tauxTva: CONST_TAUX[ 3 ],
            montantTtc: 0
          });
        }
        // Set devisForm value
        this.devisForm.get('montantHt1').setValue(this.detailsDevis1.montantHt);
        this.devisForm.get('montantHt2').setValue(this.detailsDevis2.montantHt);
        this.devisForm.get('montantHt3').setValue(this.detailsDevis3.montantHt);
        // force le calcul des (blur) montantTTC des Détails Devis
        this.calculMontant1();
        this.calculMontant2();
        this.calculMontant3();
      }, (err) => {
        console.log('Erreur :' + err);
      }
      );
  }

  /**
   * onCancel form
   *
   * @memberof DevisComponent
   */
  onCancel() {
    this.mode = false;
    this.generateForm();
    this.devis = {};
    this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };
    this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };
    this.detailsDevis3 = { tauxTva: CONST_TAUX[ 3 ] };
  }

  /**
   * Set devis to delete on confirm
   * 
   * @param {Devis} devis devis body
   * @memberof DevisComponent
   */
  getDevisToDelete(devis: Devis) {
    this.devis = devis;
  }

  /**
   * Generate Reactive Form
   *
   * @memberof DevisComponent
   */
  generateForm() {
    this.devisForm = this.formBuilder.group({
      ref_devis: [ this.devis.ref_devis, Validators.compose([
        Validators.required
      ]) ],
      date_creation: [ Date.now ],
      // DetailsDevis data
      montantHt1: [ this.detailsDevis1.montantHt, Validators.compose([
        Validators.required,
        this.isNumber
      ]) ],
      tauxTva1: [ { value: this.detailsDevis1.tauxTva, disabled: true }, Validators.required ],
      montantTtc1: [ { value: this.detailsDevis1.montantTtc, disabled: true }, Validators.required ],
      montantHt2: [ this.detailsDevis2.montantHt, Validators.compose([
        Validators.required,
        this.isNumber
      ]) ],
      tauxTva2: [ { value: this.detailsDevis2.tauxTva, disabled: true }, Validators.required ],
      montantTtc2: [ { value: this.detailsDevis2.montantTtc, disabled: true }, Validators.required ],
      montantHt3: [ this.detailsDevis3.montantHt, Validators.compose([
        Validators.required,
        this.isNumber
      ]) ],
      tauxTva3: [ { value: this.detailsDevis3.tauxTva, disabled: true }, Validators.required ],
      montantTtc3: [ { value: this.detailsDevis3.montantTtc, disabled: true }, Validators.required ],
      // Devis data
      montantHt: [ { value: this.devis.montantHt, disabled: true }],
      tauxTva: [ { value: this.devis.tauxTva, disabled: true }],
      montantTtc: [ { value: this.devis.montantTtc, disabled: true }],
      client: [ { value: this.id_client, disabled: true }, Validators.compose([
        Validators.required
      ]) ],
      descriptionModif: [ { value: this.descriptionModif }],
    });
  }

  /**
   * Enable form controls
   *
   * @memberof DevisComponent
   */
  enableForm() {
    this.devisForm.controls[ 'ref_devis' ].enable();
    this.devisForm.controls[ 'date_creation' ].enable();
    this.devisForm.controls[ 'montantHt1' ].enable();
    this.devisForm.controls[ 'montantHt2' ].enable();
    this.devisForm.controls[ 'montantHt3' ].enable();
  }

  /**
   * Disable form controls
   *
   * @memberof DevisComponent
   */
  disableForm() {
    this.devisForm.disable();
  }


  /* (blur) CALCUL MONTANT TTC DetailsDevis & Devis data */
  /**
   * Calcul montantTtc1 using tauxTva1 and montantHt1 values of validerDevisForm and send new montantTtc1
   *
   * @memberof DevisComponent
   */
  calculMontant1() {
    if (!(this.devisForm.controls[ 'montantHt1' ].value === '') && !(this.devisForm.controls[ 'tauxTva1' ].value === '')) {
      const montantTTC = Number(this.devisForm.get('montantHt1').value) * (1 + Number(this.devisForm.get('tauxTva1').value) / 100);
      this.devisForm.get('montantTtc1').setValue((montantTTC).toFixed(2));
    }
  }

  /**
   * Calcul montantTtc2 using tauxTva2 and montantHt2 values of validerDevisForm and send new montantTtc2
   *
   * @memberof DevisComponent
   */
  calculMontant2() {
    if (!(this.devisForm.controls[ 'montantHt2' ].value === '') && !(this.devisForm.controls[ 'tauxTva2' ].value === '')) {
      const montantTTC = Number(this.devisForm.get('montantHt2').value) * (1 + Number(this.devisForm.get('tauxTva2').value) / 100);
      this.devisForm.get('montantTtc2').setValue((montantTTC).toFixed(2));
    }
  }

  /**
   * Calcul montantTtc3 using tauxTva3 and montantHt3 values of validerDevisForm and send new montantTtc3
   *
   * @memberof DevisComponent
   */
  calculMontant3() {
    if (!(this.devisForm.controls[ 'montantHt3' ].value === '') && !(this.devisForm.controls[ 'tauxTva3' ].value === '')) {
      const montantTTC = Number(this.devisForm.get('montantHt3').value) * (1 + Number(this.devisForm.get('tauxTva3').value) / 100);
      this.devisForm.get('montantTtc3').setValue((montantTTC).toFixed(2));
    }
  }

  /**
   * Calcul tauxTva using tauxTva1, tauxTva2 and tauxTva3 values of validerDevisForm and send new tauxTva
   *
   * @memberof DevisComponent
   */
  calculTauxTva() {
    const tauxTva = this.devisForm.get('montantHt1').value * this.devisForm.get('tauxTva1').value / 100
      + this.devisForm.get('montantHt2').value * this.devisForm.get('tauxTva2').value / 100
      + this.devisForm.get('montantHt3').value * this.devisForm.get('tauxTva3').value / 100;
    this.devisForm.get('tauxTva').setValue(Number(tauxTva).toFixed(2));
  }

  /**
   * Calcul MontantHt using MontantHt1, MontantHt2 and MontantHt3 values of validerDevisForm and send new MontantHt
   *
   * @memberof DevisComponent
   */
  calculMontantHt() {
    if (!(this.devisForm.get('montantHt1').value === '') && !(this.devisForm.get('montantHt2').value === '')
      && !(this.devisForm.get('montantHt3').value === '')) {
      const montantHT = Number(this.devisForm.get('montantHt1').value) + Number(this.devisForm.get('montantHt2').value)
        + Number(this.devisForm.get('montantHt3').value);
      this.devisForm.get('montantHt').setValue(Number(montantHT).toFixed(2));
    }
  }

  /**
   * Calcul MontantTtc using MontantTtc1, MontantTtc2 and MontantTtc3 values of validerDevisForm and send new MontantTtc
   *
   * @memberof DevisComponent
   */
  calculMontantTtc() {
    const montantTtc = Number(this.devisForm.get('montantTtc1').value)
      + Number(this.devisForm.get('montantTtc2').value)
      + Number(this.devisForm.get('montantTtc3').value);
    this.devisForm.get('montantTtc').setValue(Number(montantTtc).toFixed(2));
  }

  /**
   * somme montant HT
   * 
   * @returns {string} somme
   * @memberof DevisComponent
   */
  getSumMontantHt(): string {
    let sum = 0;
    for (const dev in this.listDevis) {
      if (this.listDevis.hasOwnProperty(dev)) {
        sum += this.listDevis[ dev ].montantHt;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * somme taux TVA
   * 
   * @returns {string} somme
   * @memberof DevisComponent
   */
  getSumTauxTva(): string {
    let sum = 0;
    for (const dev in this.listDevis) {
      if (this.listDevis.hasOwnProperty(dev)) {
        sum += this.listDevis[ dev ].tauxTva;
      }
    }
    return sum.toFixed(2);
  }

  /**
   * somme montant TTC
   * 
   * @returns {string} somme
   * @memberof DevisComponent
   */
  getSumMontantTtc(): string {
    let sum = 0;
    for (const dev in this.listDevis) {
      if (this.listDevis.hasOwnProperty(dev)) {
        sum += this.listDevis[ dev ].montantTtc;
      }
    }
    return sum.toFixed(2);
  }

  // VALIDATIONS
  /**
   * Validation for number
   * 
   * @param {*} n string to check
   * @returns 
   * @memberof DevisComponent
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
   * (blur) listener : Verification de la ref_devis.
   * - si data.success === true && ref != devis.ref => ref_devis utilisée => validationRef = true,
   * - si data.success === false => ref_devis non utilisée => validationRef = false
   *
   * @memberof ValiderDevisComponent
   */
  verifRef() {
    this.devisService.getOneDevisByRef(this.client._id, this.devisForm.get('ref_devis').value)
      .subscribe(
      data => {
        if (data.success) {
          // onUpdate(devis) : Vérif si ref dans l'input !== ref initial du devis 
          if (this.devisForm.get('ref_devis').value !== this.devis.ref_devis) {
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

  /*  getAllValidDevis() {
     this.devisService.getAllValidDevis()
       .subscribe(data => this.listDevis = data);
   } */

  /**
   * OnInit :
   * check if params['id_client'] set into url.
   * - set this.id_client = params['id_client'].
   * - get Client using this.id_client.
   *
   * @memberof DevisComponent
   */
  ngOnInit() {
    // used for <select> client options
    // this.getAllClient();
    // différentes routes à utiliser quand le dashboard sera implémenté
    if (this.activatedRoute.snapshot.params[ 'id_client' ] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params[ 'id_client' ];
      // this.getAllDevisByClient(this.id_client);
      if (historique) {
        this.getAllValidDevisByClient(this.id_client);
      } else {
        this.getAllDevisByClient(this.id_client);
      }
      this.getClient(this.id_client);
    } else {
      this.router.navigate([ '/pageNotFound' ]);
    }
  }

}
