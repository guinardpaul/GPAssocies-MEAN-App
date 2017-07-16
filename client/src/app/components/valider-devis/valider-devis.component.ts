import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { Devis } from '../../models/devis';
import { DevisService } from '../../service/devis.service';

@Component({
  selector: 'app-valider-devis',
  templateUrl: './valider-devis.component.html',
  styleUrls: ['./valider-devis.component.css']
})
export class ValiderDevisComponent implements OnInit {
  devis: any = {};

  onValiderDevis() {
    this.activatedRoute.paramMap
            .switchMap((params: ParamMap) =>
            this.devisService.getOneDevis(Number(params.get('id_devis'))))
            .subscribe((devis) => this.devis = devis);
    console.log(this.devis);
}

  constructor(
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private devisService: DevisService
  ) { }

  ngOnInit() {
    this.onValiderDevis()
  }

}
