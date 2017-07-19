import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import { FactureGlobal } from '../../models/factureGlobal';
import { Devis } from '../../models/devis';
import { FactureGlobalService } from '../../service/facture-global.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  FactureGlobal: FactureGlobal;
  ListFactureGlobal: FactureGlobal[];
  mode: boolean = false;
  message: string;
  messageClass: string;

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

  };

  onDelete(id: number) {

  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private factureGlobalService: FactureGlobalService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }

}
