import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

// Models
import { Devis } from '../../models/devis';
import { Client } from '../../models/client';

// Services
import { DevisService } from '../../service/devis.service';
import { ClientService } from '../../service/client.service';
import { FactureGlobalService } from '../../service/facture-global.service';

@Component({
  selector: 'app-valider-devis',
  templateUrl: './valider-devis.component.html',
  styleUrls: ['./valider-devis.component.css']
})
export class ValiderDevisComponent implements OnInit {
  listClient: Client[];
  devis: any = {};
  id_client: number;
  id_devis: number;
  client: any = {};
  message: string;
  messageClass: string;
  validerDevisForm: FormGroup;

  constructor(
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private devisService: DevisService,
    private clientService: ClientService,
    private factureGlobalService: FactureGlobalService
  ) {
    this.generateForm()
  }

  generateForm() {
    this.validerDevisForm = this.formBuilder.group({
      ref_factureGlobal: ['', Validators.required],
      date_creation: [''],
      montantHt: ['', Validators.required],
      tauxTva: ['', Validators.required],
      montantTtc: [''],
      client: ['', Validators.required]
    });
  }

  validerDevis() {
    const newFacture = this.validerDevisForm.value;
			this.factureGlobalService.addFactureGlobal(newFacture)
				.subscribe(
					data => {
						console.log('Devis validé' + data),
						this.message = 'Devis validé',
						this.messageClass = 'alert alert-success',
						this.onSuccess()
					},
					error => {
						console.log('Erreur '+ error),
						this.message = 'Erreur validation Devis',
						this.messageClass = 'alert alert-danger'
					});
}

  /**
  * function success for all request to service
  */
  onSuccess() {
    this.router.navigate(['/devis/client/:id_client', this.id_client]);
  }

  calculMontant() {
    if (!(this.validerDevisForm.controls['montantHt'].value === '') && !(this.validerDevisForm.controls['tauxTva'].value === '')) {
      let montantTTC = this.validerDevisForm.controls['montantHt'].value * (1 + this.validerDevisForm.controls['tauxTva'].value / 100);
      this.validerDevisForm.controls['montantTtc'].setValue(Number(montantTTC).toFixed(2));
    }
  };

	/**
	 * Get ALL Client.
	 * Used for Select Option on add/update Devis Form
	 */
	public getAllClient() {
		this.clientService.getAllClients()
			.subscribe(
				clients => this.listClient = clients,
				error => console.log('Erreur ' + error)
			);
  };

	/**
	 * GET ONE CLIENT
	 * Set current Client informations
	 */
	public getOneClient(id: number) {
		this.clientService.getOneClient(id)
			.subscribe(
				client => this.client = client,
				error => console.log('Erreur ' + error)
			);
  };

  /**
	*  GET ONE DEVIS
	* @param id : devis id
	*/
	public getOneDevis(id: number) {
		this.devisService.getOneDevis(id)
			.subscribe(
				(devis) => {
          this.devis = devis;
          this.getOneClient(this.devis.client);
        },
				(error) => console.log('Erreur ' + error)
			);
	};

  onValiderDevis() {
    this.activatedRoute.paramMap
            .switchMap((params: ParamMap) =>
            this.devisService.getOneDevis(Number(params.get('id_devis'))))
            .subscribe((devis) => this.devis = devis);
    console.log(this.devis);
  }

  ngOnInit() {
    //this.getAllClient();
    //this.onValiderDevis();
    /* if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
      this.id_client = this.activatedRoute.snapshot.params['id_client'];
      this.getOneClient(this.id_client);
    } */
    // Recupère devis by id if set
    // Set id_client and client data
    if (this.activatedRoute.snapshot.params['id_devis'] !== undefined) {
      this.id_devis = this.activatedRoute.snapshot.params['id_devis'];
      this.getOneDevis(this.id_devis);
      let latest_date = this.datePipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
      this.devis.date_creation = latest_date;
    }
  }

}
