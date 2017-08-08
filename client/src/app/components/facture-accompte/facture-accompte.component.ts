import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { FactureGlobal } from '../../models/factureGlobal';
import { FactureAccompte } from '../../models/factureAccompte';

// Services
import { FactureGlobalService } from '../../service/facture-global.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';
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
  listFactureAccompte: FactureAccompte[];
  mode: boolean = false;
  factureForm: FormGroup;

  /**
   * Creates an instance of FactureAccompteComponent.
   * @param {ActivatedRoute} activatedRoute request routes param
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureAccompteService} factureAccompteService facture mois service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @memberof FactureAccompteComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private factureAccompteService: FactureAccompteService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService
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

  /**
   * Method to fetch modified data from database and display into table.
   *
   * @memberof FactureAccompteComponent
   */
  onSuccess() {
    this.getAllFactureAccompteByFactureGlobal(this.id_fact);
  }

  onAdd() {
    this.mode = true;
  }

  /**
   * Generate form
   *
   * @memberof FactureAccompteComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureAccompte: [ '', Validators.required ],
      date_creation: [ '', Validators.required ],
      montantHt: [ { value: this.factureGlobal._id, disabled: true }, Validators.required ],
      tauxTva: [ { value: this.factureGlobal._id, disabled: true }, Validators.required ],
      montantTtc: [ { value: this.factureGlobal._id, disabled: true }],
      factureGlobal: [ { value: this.factureGlobal._id, disabled: true }, Validators.required ]
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
      this.getAllFactureAccompteByFactureGlobal(this.id_fact);;
      this.getOneFactureGlobal(this.id_fact);
    }
  }

}
