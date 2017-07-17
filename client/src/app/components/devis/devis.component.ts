import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Devis } from '../../models/devis';
import { Client } from '../../models/client';
import { DevisService } from '../../service/devis.service';
import { ClientService } from '../../service/client.service';

@Component({
	selector: 'app-devis',
	templateUrl: './devis.component.html',
	styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
	listDevis: Devis[] = [];
	listClient: Client[] = [];
	devis: any = {};
	client: any = {};
	id_client: number;
	mode: boolean = false;
	devisForm: FormGroup;
	message: string;
	messageClass: string;
	
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
	* GET ALL DEVIS
	* Set Devis from db to listDevis
	*/
	public getAllDevis() {
		this.devisService.getAllDevis()
			.subscribe(
				devis => this.listDevis = devis,
				error => console.log('Erreur ' + error)
			);
	};
	
	/**
	* GET ALL DEVIS BY CLIENT
	* Set Devis by Client from db to listDevis
	*/
	public getAllDevisByClient() {
		this.getClient(this.id_client);
		this.devisService.getAllDevisByClient(this.id_client)
			.subscribe(
				devis => this.listDevis = devis,
				error => console.log('Erreur ' + error)
			);
	};

	/**
	 * GET ONE CLIENT
	 * Set current Client informations
	 */
	public getClient(id) {
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
				devis => this.devis = devis,
				error => console.log('Erreur ' + error)
			);
	};
	
	/**
	* ADD/UPDATE DEVIS
	*/
	public addDevis() {
		const newDevis = this.devisForm.value;
		if(this.devis._id == null || this.devis._id == 0 || this.devis._id == '') {
			// set client 
			/* if (this.id_client != null || this.id_client !== 0){
				this.devis.client = this.client;
			} */
			 /* const newDevis = new Devis({
				ref_devis: this.devisForm.get('ref_devis').value,
				date_creation: this.devisForm.get('date_creation').value,
				montantHt: this.devisForm.get('montantHt').value,
				tauxTva: this.devisForm.get('tauxTva').value,
				montantTtc: this.devisForm.get('montantTtc').value,
				client: this.devisForm.get('client').value
			});  */
			this.devisService.addDevis(newDevis)
				.subscribe(
					data => {
						console.log('Devis saved' + data),
						this.message = 'Devis créé',
						this.messageClass = 'alert alert-success',
						this.onSuccess()
					},
					error => {
						console.log('Erreur '+ error),
						this.message = 'Erreur création Devis',
						this.messageClass = 'alert alert-danger'
					}
				);
		} else {
			this.getClient(this.devis.client);
			const newDevis = new Devis({
				_id: this.devis._id,
				ref_devis: this.devis.ref_devis,
				date_creation: this.devis.date_creation,
				montantHt: this.devis.montantHt,
				tauxTva: this.devis.tauxTva,
				montantTtc: this.devis.montantTtc,
				client: this.devis.client,
			});
			this.devisService.updateDevis(newDevis, this.devis._id)
				.subscribe(
					data => {
						console.log('Devis updated' + data),
						this.message = 'Devis modifié',
						this.messageClass = 'alert alert-success',
						this.onSuccess()
					},
					error => {
						console.log('Erreur '+ error),
						this.message = 'Erreur modification Devis',
						this.messageClass = 'alert alert-danger'
					}
				);
		}
};

/**
* function success for all request to service
*/
onSuccess() {
	this.mode = false;
	this.devis = {};
	this.getAllDevisByClient();
};

/**
* Display view to add Devis form
*/
public onAdd() {
	this.mode = true;
};

/**
* Display view to update Devis form and set values
* @param d : devis
*/
public onUpdate(d) {
	this.getClient(d.client);
	this.devis = d;
	let latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
	this.devis.date_creation = latest_date;
	this.devis.client = this.client._id;
	this.mode = true;
};

/**
* delete client
* @param id : devis id
*/
public onDelete(id: number) {
	this.devisService.deleteDevis(id)
	.subscribe(
		msg => { 
			console.log('Devis deleted'),
			this.getAllDevis()
		},
		error => console.log(error)
	);
};

public generateForm() {
	this.devisForm = this.formBuilder.group({
		ref_devis: ['', Validators.compose([
			Validators.required
		])],
		date_creation: [Date.now],
		montantHt: ['', Validators.compose([
			Validators.required
		])],
		tauxTva: ['', Validators.compose([
			Validators.required
		])],
		montantTtc: [''],
		client: ['', Validators.compose([
			Validators.required
		])],
	});
};

calculMontant() {
	if (!(this.devisForm.controls['montantHt'].value === '') && !(this.devisForm.controls['tauxTva'].value === '')) {
		let montantTTC = this.devisForm.controls['montantHt'].value * (1 + this.devisForm.controls['tauxTva'].value / 100);
		this.devisForm.controls['montantTtc'].setValue(Number(montantTTC));
	}	 
};

/**
* Constructor
* @param devisService : devis service
* @param datepipe : allow to format date
* @param activatedRoute : request params of routes
* @param formBuilder : Angular FormBuilder Module
* @param clientService : client service
*/
constructor(
	private devisService: DevisService,
	private datepipe: DatePipe,
	private activatedRoute: ActivatedRoute,
	private formBuilder: FormBuilder,
	private clientService: ClientService
) { 
	this.generateForm()
}

ngOnInit() {
	this.getAllClient();
	if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
		this.id_client = this.activatedRoute.snapshot.params['id_client'];
		this.getAllDevisByClient();
	} else {
		this.getAllDevis();
	}
};

}
