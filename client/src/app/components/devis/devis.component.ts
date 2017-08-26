import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Devis } from '../../models/devis';
import { DetailsDevis } from '../../models/detailsDevis';
import { Client } from '../../models/client';
import { CONST_TAUX } from '../../models/taux.const';

// Services
import { DevisService } from '../../service/devis.service';
import { ClientService } from '../../service/client.service';
import { FactureGlobalService } from '../../service/facture-global.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { DetailsDevisService } from '../../service/details-devis.service';

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
  listDevis: Devis[];
  listClient: Client[];
  devis: any = {};
  detailsDevis1: any = { tauxTva: CONST_TAUX[ 1 ] };
  detailsDevis2: any = { tauxTva: CONST_TAUX[ 2 ] };
  detailsDevis3: any = { tauxTva: CONST_TAUX[ 3 ] };
  //listDetailsDevis = [ this.detailsDevis1, this.detailsDevis2, this.detailsDevis3 ];
  client = new Client();
  id_client: number;
  mode = false;
  processing = false;
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
    private factureGlobalService: FactureGlobalService
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
	 * Method used when params['id_client']  set into url.
   *
   * @param {any} id client._id
   * @memberof DevisComponent
   */
  getAllDevisByClient(id) {
    this.getClient(id);
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      devis => this.listDevis = devis,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * GET ONE CLIENT by ID
	 * Set current Client informations for view.
   *
   * @param {any} id client._id
   * @memberof DevisComponent
   */
  getClient(id) {
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
	 * - Si this.devis._id exists : updateDevis().
	 * - Si this.devis._id == null || 0 : addDevis().
   *
   * @memberof DevisComponent
   */
  addDevis() {
    this.processing = true;
    this.disableForm();
    // Set Devis data to save
    var newDevis = {
      ref_devis: this.devisForm.get('ref_devis').value,
      date_creation: this.devisForm.get('date_creation').value,
      montantHt: this.devisForm.get('montantHt').value,
      tauxTva: this.devisForm.get('tauxTva').value,
      montantTtc: this.devisForm.get('montantTtc').value,
      client: this.id_client,
    };
    // Check si Add ou Update
    if (this.devis._id == null || this.devis._id == 0 || this.devis._id == '') {
      this.devisService.addDevis(newDevis)
        .subscribe(
        data => {
          if (data.success) {
            console.log('Devis saved' + data);
            this.flashMessages.show('Devis créé', {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            this.addDetailsDevis(data.obj);
          } else {
            console.log(data.message);
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
      // Set Devis data to update
      var udpateDevis = {
        _id: this.devis._id,
        ref_devis: this.devisForm.get('ref_devis').value,
        date_creation: this.devisForm.get('date_creation').value,
        montantHt: this.devisForm.get('montantHt').value,
        tauxTva: this.devisForm.get('tauxTva').value,
        montantTtc: this.devisForm.get('montantTtc').value,
        client: this.id_client,
      };
      this.devisService.updateDevis(udpateDevis)
        .subscribe(
        data => {
          console.log('Devis updated' + data);
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

    /* for (var detailsDevis in this.listDetailsDevis) {
      if (this.listDetailsDevis.hasOwnProperty(detailsDevis)) {
        var element = this.listDetailsDevis[ detailsDevis ];
        this.detailsDevisService.addDetailsDevis(this.listDetailsDevis[detailsDevis])
        .subscribe(
          data => {
            console.log('Details Devis saved ' + this.detailsDevis1);
            this.onSuccess();
          }, (err) => {
            console.log(err);
            this.enableForm();
          }
        );
      }
    } */

    // Save DetailsDevis
    this.detailsDevisService.addDetailsDevis(this.detailsDevis1)
      .subscribe(
      data => {
        console.log('Details Devis saved :' + this.detailsDevis1);
        this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };

        this.detailsDevisService.addDetailsDevis(this.detailsDevis2)
          .subscribe(
          data => {
            console.log('Details Devis saved :' + this.detailsDevis2);
            this.detailsDevis2 = {};
            this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };

            this.detailsDevisService.addDetailsDevis(this.detailsDevis3)
              .subscribe(
              data => {
                console.log('Details Devis saved :' + this.detailsDevis3);
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
   *
   * update DetailsDevis
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
      data => {
        console.log('Details Devis update :' + this.detailsDevis1);
        this.detailsDevis1 = { tauxTva: CONST_TAUX[ 1 ] };

        this.detailsDevisService.updateDetailsDevis(this.detailsDevis2)
          .subscribe(
          data => {
            console.log('Details Devis update :' + this.detailsDevis2);
            this.detailsDevis2 = {};
            this.detailsDevis2 = { tauxTva: CONST_TAUX[ 2 ] };

            this.detailsDevisService.updateDetailsDevis(this.detailsDevis3)
              .subscribe(
              data => {
                console.log('Details Devis update :' + this.detailsDevis3);
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
   * @param {Devis} devis devis data
   * @memberof DevisComponent
   */
  onDelete(devis: Devis) {
    this.factureGlobalService.getAllFactureGlobalByClient(devis.client)
      .subscribe(
      data => {
        if (data.length === 0) {
          // Fetch DetailsDevis by Devis._id
          this.detailsDevisService.getDetailsDevisByDevis(devis._id)
            .subscribe(
            data => {
              // Delete detailsDevis
              this.detailsDevisService.deleteDetailsDevis(data[ 0 ]._id)
                .subscribe(
                data => {
                  console.log('detailsDevis1 deleted' + data);
                }, (err) => {
                  console.log('Erreur deleted :' + err);
                }
                );
              this.detailsDevisService.deleteDetailsDevis(data[ 1 ]._id)
                .subscribe(
                data => {
                  console.log('detailsDevis2 deleted' + data);
                }, (err) => {
                  console.log('Erreur deleted :' + err);
                }
                );
              this.detailsDevisService.deleteDetailsDevis(data[ 2 ]._id)
                .subscribe(
                data => {
                  console.log('detailsDevis3 deleted' + data);
                }, (err) => {
                  console.log('Erreur deleted :' + err);
                }
                );
            }
            );
          // Delete Devis
          this.devisService.deleteDevis(devis._id)
            .subscribe(
            msg => {
              console.log('Devis deleted'),
                this.flashMessages.show('Client supprimé', {
                  classes: [ 'alert', 'alert-warning' ],
                  timeout: 3000
                });
              this.onSuccess()
            },
            error => {
              console.log(error),
                this.flashMessages.show('Erreur : Client non supprimé', {
                  classes: [ 'alert', 'alert-danger' ],
                  timeout: 3000
                });
            }
            );
        } else {
          console.log('Impossible de supprimer'),
            this.flashMessages.show('Suppression impossible! Le devis possède des factures.', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
        }
      }, err => console.log('Erreur :' + err)
      );
  }

  /**
   * Function success for all request to service.
	 * Reset table by fetching data from database.
   *
   * @memberof DevisComponent
   */
  onSuccess() {
    this.mode = false;
    this.generateForm();
    this.devis = {};
    this.processing = false;
    this.devisForm.controls[ 'montantTtc1' ].setValue(0);
    this.devisForm.controls[ 'montantTtc2' ].setValue(0);
    this.devisForm.controls[ 'montantTtc3' ].setValue(0);
    this.enableForm();
    // Différente route à utiliser une fois le dashboard implémenté
    if (this.activatedRoute.snapshot.params[ 'id_client' ] !== undefined) {
      this.getAllDevisByClient(this.id_client);
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
    // Set controls['client'] touched for Validators.required
    this.devisForm.controls[ 'client' ].markAsTouched;
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
    let latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
    this.devis.date_creation = latest_date;
    this.devis.client = this.client._id;
    this.mode = true;
    this.devisForm.get('ref_devis').setValue(this.devis.ref_devis);

    this.detailsDevisService.getDetailsDevisByDevis(d._id)
      .subscribe(
      data => {
        console.log(data);
        // Fetch data from database
        this.detailsDevis1 = data[ 0 ];
        this.detailsDevis2 = data[ 1 ];
        this.detailsDevis3 = data[ 2 ];

        // Set devisForm value
        this.devisForm.get('montantHt1').setValue(this.detailsDevis1.montantHt);
        this.devisForm.get('montantHt2').setValue(this.detailsDevis2.montantHt);
        this.devisForm.get('montantHt3').setValue(this.detailsDevis3.montantHt);
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
        Validators.required
      ]) ],
      tauxTva1: [ { value: this.detailsDevis1.tauxTva, disabled: true }, Validators.required ],
      montantTtc1: [ { value: this.detailsDevis1.montantTtc, disabled: true }, Validators.required ],
      montantHt2: [ this.detailsDevis2.montantHt, Validators.compose([
        Validators.required
      ]) ],
      tauxTva2: [ { value: this.detailsDevis2.tauxTva, disabled: true }, Validators.required ],
      montantTtc2: [ { value: this.detailsDevis2.montantTtc, disabled: true }, Validators.required ],
      montantHt3: [ this.detailsDevis3.montantHt, Validators.compose([
        Validators.required
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
      let montantTTC = Number(this.devisForm.get('montantHt1').value) * (1 + Number(this.devisForm.get('tauxTva1').value) / 100);
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
      let montantTTC = Number(this.devisForm.get('montantHt2').value) * (1 + Number(this.devisForm.get('tauxTva2').value) / 100);
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
      let montantTTC = Number(this.devisForm.get('montantHt3').value) * (1 + Number(this.devisForm.get('tauxTva3').value) / 100);
      this.devisForm.get('montantTtc3').setValue((montantTTC).toFixed(2));
    }
  }

  /**
   * Calcul tauxTva using tauxTva1, tauxTva2 and tauxTva3 values of validerDevisForm and send new tauxTva
   *
   * @memberof DevisComponent
   */
  calculTauxTva() {
    let tauxTva = this.devisForm.get('montantHt1').value * this.devisForm.get('tauxTva1').value / 100
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
      let montantHT = Number(this.devisForm.get('montantHt1').value) + Number(this.devisForm.get('montantHt2').value)
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
    let montantTtc = Number(this.devisForm.get('montantTtc1').value)
      + Number(this.devisForm.get('montantTtc2').value)
      + Number(this.devisForm.get('montantTtc3').value);
    this.devisForm.get('montantTtc').setValue(Number(montantTtc).toFixed(2));
  }

  // VALIDATIONS
  /**
   * Validation for number
   * 
   * @param {*} n number to check
   * @returns 
   * @memberof DevisComponent
   */
  isNumber(controls) {
    console.log(isNaN(controls));
    if (isNaN(controls)) {
      return {
        isNumber: true
      };
    } else {
      return null;
    }
  }

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
    //this.getAllClient();
    // différentes routes à utiliser quand le dashboard sera implémenté
    if (this.activatedRoute.snapshot.params[ 'id_client' ] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params[ 'id_client' ];
      this.getAllDevisByClient(this.id_client);
      this.getClient(this.id_client);
    } else {
      this.getAllDevis();
    }
  }

}
