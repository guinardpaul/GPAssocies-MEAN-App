import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { FactureGlobal } from '../../models/factureGlobal';
import { FactureAccompte } from '../../models/factureAccompte';
import { Reglement } from '../../models/reglement';

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
  listFactureAccompte: FactureAccompte[];
  listReglement: Reglement[];
  mode: boolean = false;
  modeUpdate: boolean = false;
  factureForm: FormGroup;

  /**
   * Creates an instance of FactureAccompteComponent.
   * @param {ActivatedRoute} activatedRoute request routes param
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureAccompteService} factureAccompteService facture mois service
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
    this.generateForm()
  }

  getOneFactureGlobal(id: number) {
    this.factureGlobalService.getOneFactureGlobalById(id)
      .subscribe(
      data => this.factureGlobal = data,
      error => console.log('Error :' + error)
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
      error => console.log('Error :' + error)
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
      factureAccompte => this.listFactureAccompte = factureAccompte,
      error => console.log('Error :' + error)
      );
  }

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
    let newFacture = {
      ref_factureAccompte: this.factureForm.get('ref_factureAccompte').value,
      date_creation: this.factureForm.get('date_creation').value,
      montantFacture: this.factureForm.get('montantFacture').value,
      reglementClient: this.factureForm.get('reglementClient').value,
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
          this.onSuccess();
        } else {
          console.log('Erreur creation facture accompte ' + data.message);
          this.flashMessages.show('Erreur creation facture accompte', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
        }
      }
      )
  }

  /**
   * Method to fetch modified data from database and display into table.
   *
   * @memberof FactureAccompteComponent
   */
  onSuccess() {
    this.getAllFactureAccompteByFactureGlobal(this.id_fact);
    this.mode = false;
    this.generateForm();
  }

  /**
   * onAdd
   * 
   * @memberof FactureAccompteComponent
   */
  onAdd() {
    this.mode = true;
  }

  /**
   * onUpdate. Set disable 
   * 
   * @param {FactureAccompte} factureAccompte FactureAccompte
   * @memberof FactureAccompteComponent
   */
  onUpdate(factureAccompte: FactureAccompte) {
    this.factureAccompte = factureAccompte;
    this.getAllReglementByFactureAccompte(factureAccompte._id);
    this.modeUpdate = true;
  }

  onCancel() {
    this.generateForm();
    this.generateUpdateForm();
    this.mode = false;
    this.modeUpdate = false;
    this.factureAccompte = {};
  }

  generateUpdateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureAccompte: [ { value: this.factureAccompte.ref_factureAccompte, disabled: true }, Validators.required ],
      date_creation: [ { value: this.factureAccompte.date_creation }],
      montantFacture: [ { value: this.factureAccompte.montantFacture, disabled: true }, Validators.required ],
      reglementClient: [ this.factureAccompte.reglementClient, Validators.required ],
      factureGlobal: [ { value: this.factureAccompte.factureGlobal, disabled: true }, Validators.required ]
    });
  }

  /**
   * Generate form Add
   *
   * @memberof FactureAccompteComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureAccompte: [ '', Validators.required ],
      date_creation: [ Date.now ],
      montantFacture: [ '0', Validators.required ],
      reglementClient: [ '0', Validators.required ],
      factureGlobal: [ { value: this.factureAccompte.factureGlobal, disabled: true }, Validators.required ]
    });
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
