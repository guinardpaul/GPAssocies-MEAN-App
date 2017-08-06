import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { FactureGlobal } from '../../models/factureGlobal';
import { FactureMois } from '../../models/factureMois';

// Services
import { FactureGlobalService } from '../../service/facture-global.service';
import { FactureMoisService } from '../../service/facture-mois.service';
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
  styleUrls: ['./facture-accompte.component.css']
})
export class FactureAccompteComponent implements OnInit {
  id_fact: number;
  factureGlobal: any = {};
  listFactureAccompte: FactureMois[];
  mode: boolean = false;
  factureForm: FormGroup;

  /**
   * Creates an instance of FactureAccompteComponent.
   * @param {ActivatedRoute} activatedRoute request routes param
   * @param {FactureGlobalService} factureGlobalService facture global service
   * @param {FactureMoisService} factureMoisService facture mois service
   * @param {DatePipe} datePipe format date
   * @param {FormBuilder} formBuilder reactive form builder
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @memberof FactureAccompteComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private factureMoisService: FactureMoisService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService
  ) {
    this.generateForm()
  }

  /**
   * Get All Facture Mois
   *
   * @memberof FactureAccompteComponent
   */
  getAllFactureAccompte() {
    this.factureMoisService.getAllFactureMois()
      .subscribe(
      factureMois => this.listFactureAccompte = factureMois,
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
    this.factureMoisService.getAllFactureMoisByFactureGlobal(id)
      .subscribe(
      factureMois => this.listFactureAccompte = factureMois,
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

  /**
   * Generate form
   *
   * @memberof FactureAccompteComponent
   */
  generateForm() {
    this.factureForm = this.formBuilder.group({
      ref_factureGlobal: ['', Validators.required],
      date_creation: ['', Validators.required],
      montantHt: ['', Validators.required],
      tauxTva: ['', Validators.required],
      montantTtc: [''],
      client: ['', Validators.required]
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
    if (this.activatedRoute.snapshot.params['id_fact'] !== undefined) {
      this.id_fact = this.activatedRoute.snapshot.params['id_fact'];
      this.getAllFactureAccompteByFactureGlobal(this.id_fact);;
    }
  }

}
