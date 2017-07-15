import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Devis } from '../../models/devis';
import { Client } from '../../models/client';
import { DevisService } from '../../service/devis.service';

@Component({
	selector: 'app-devis',
	templateUrl: './devis.component.html',
	styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
	listDevis: Devis[] = [];
	devis: any = {};
	client: any = {};
	id_client: number;
	mode: boolean = false;
	devisForm: FormGroup;
	
	/**
	* GET ALL DEVIS
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
	*/
	public getAllDevisByClient() {
		console.log(this.id_client);
		this.devisService.getAllDevisByClient(this.id_client)
		.subscribe(
			devis => this.listDevis = devis,
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
	}
	
	/**
	* ADD/UPDATE DEVIS
	*/
	public addDevis() {
		if(this.devis._id == null || this.devis._id == 0 || this.devis._id == '') {
			this.devis.montantTtc = this.devis.montantHt * (1 + this.devis.tauxTva/100);
			// set id_client 
			if (this.id_client != null || this.id_client !== 0){
				this.devis.client = this.client;
			}
			this.devisService.addDevis(this.devis)
			.subscribe(
				devis => { console.log('Devis saved' + devis),
				this.onSuccess()
			},
			error => console.log('Erreur '+ error)
		);
	} else {
		this.devis.montantTtc = this.devis.montantHt * (1 + this.devis.tauxTva/100);
		this.devisService.updateDevis(this.devis, this.devis._id)
		.subscribe(
			devis => { console.log('Devis updated' + devis),
			this.onSuccess()
		},
		error => console.log('Erreur '+ error)
	);
}
};

/**
* function success for all request to service
*/
onSuccess() {
	this.mode = false;
	this.devis = {};
	this.getAllDevis();
}

/**
* Display view to add Devis form
*/
public onAdd() {
	this.mode = true;
}

/**
* Display view to update Devis form and set values
* @param d : devis
*/
public onUpdate(d) {
	this.devis = d;
	let latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
	this.devis.date_creation = latest_date;
	this.mode = true;
}

/**
* delete client
* @param id : devis id
*/
public onDelete(id: number) {
	this.devisService.deleteDevis(id)
	.subscribe(
		msg => { console.log('Devis deleted'),
		this.getAllDevis()
	},
	error => console.log(error)
);
}

public generateForm() {
	this.devisForm = this.formBuilder.group({
		ref_devis: ['', Validators.compose([
			Validators.required
		])],
		date_creation: [''],
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

/**
* Constructor
* @param devisService : devis service
* @param datepipe : allow to format date
* @param activatedRoute : request params of routes
* @param formBuilder : Angular FormBuilder Module
*/
constructor(
	private devisService: DevisService,
	private datepipe: DatePipe,
	private activatedRoute: ActivatedRoute,
	private formBuilder: FormBuilder
) { 
	this.generateForm()
}

ngOnInit() {
	if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
		this.id_client = this.activatedRoute.snapshot.params['id_client'];
		this.getAllDevisByClient();
	} else {
		this.getAllDevis();
	}
};

}
