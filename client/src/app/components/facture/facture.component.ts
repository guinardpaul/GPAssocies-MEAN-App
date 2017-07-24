import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FactureGlobal } from '../../models/factureGlobal';
import { Devis } from '../../models/devis';
import { FactureGlobalService } from '../../service/facture-global.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factureGlobal: any = {};
  ListFactureGlobal: FactureGlobal[];
  mode: boolean = false;
  message: string;
  messageClass: string;
  factureForm: FormGroup;

  /**
   * Get all Facture Global
   */
  public getAllFactureGlobal() {
    this.factureGlobalService.getAllFactureGlobal()
                      .subscribe(
                        factureGlobal => this.ListFactureGlobal = factureGlobal,
                        error => console.log('Error ' + error)
                      );
  };

  onUpdate(facture: FactureGlobal) {
    this.mode = true;
    this.factureGlobal = facture;
    let latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
    this.factureGlobal.date_creation = latest_date;
  };

  updateFacture() {
    this.mode = true;

  }

  onDelete(id: number) {
    this.factureGlobalService.deleteFactureGlobal(id)
        .subscribe(
          msg => {
            console.log('Facture Global deleted'),
            this.message = 'Facture Global Supprimé',
            this.messageClass = 'alert alert-success',
            this.onSuccess()
          },
          error => {
            console.log(error),
            this.message = 'Erreur suppresion Facture Global',
            this.messageClass = 'alert alert-danger'
          }
        )
  }

  onSuccess() {
    this.getAllFactureGlobal();
  }

  generateForm(){
    this.factureForm = this.formBuilder.group({
      ref_factureGlobal: ['', Validators.required],
      date_creation: ['', Validators.required],
      montantHt: ['', Validators.required],
      tauxTva: ['', Validators.required],
      montantTtc: [''],
      client: ['', Validators.required]
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {
    this.generateForm()
   }

  ngOnInit() {
    this.getAllFactureGlobal();
  }

}
