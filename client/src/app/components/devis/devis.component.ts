import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Devis } from '../../models/devis';
import { Client } from '../../models/client';

// Services
import { DevisService } from '../../service/devis.service';
import { ClientService } from '../../service/client.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-devis',
	templateUrl: './devis.component.html',
	styleUrls: [ './devis.component.css' ]
})
export class DevisComponent implements OnInit {
	listDevis: Devis[];
	listClient: Client[];
	devis: any = {};
	client = new Client();
	id_client: number;
	mode: boolean = false;
	processing: boolean = false;
	devisForm: FormGroup;

	/**
	* Constructor
	* @param devisService devis service
	* @param datepipe allow to format date
	* @param activatedRoute request params of routes
	* @param formBuilder Angular FormBuilder Module
	* @param clientService client service
	* @param FlashMessagesService Flash messages service
	*/
	constructor(
		private devisService: DevisService,
		private datepipe: DatePipe,
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private clientService: ClientService,
		private flashMessages: FlashMessagesService
	) {
		this.generateForm()
	}

	/**
	 * Get ALL Client.
	 * Method used for <select options>.
	 * Used for Select Option on add/update Devis Form.
	 */
	getAllClient() {
		this.clientService.getAllClients()
			.subscribe(
			clients => this.listClient = clients,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	* GET ALL DEVIS.
	* Method used when params['id_client'] NOT set into url.
	*/
	getAllDevis() {
		this.devisService.getAllDevis()
			.subscribe(
			devis => this.listDevis = devis,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	* GET ALL DEVIS BY CLIENT.
	* Method used when params['id_client']  set into url.
	*/
	getAllDevisByClient(id) {
		this.getClient(id);
		this.devisService.getAllDevisByClient(id)
			.subscribe(
			devis => this.listDevis = devis,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	 * GET ONE CLIENT.
	 * Set current Client informations for view.
	 */
	getClient(id) {
		this.clientService.getOneClient(id)
			.subscribe(
			client => this.client = client,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	* GET ONE DEVIS.
	* Method not used.
	* @param id : devis id
	*/
	getOneDevis(id: number) {
		this.devisService.getOneDevis(id)
			.subscribe(
			devis => this.devis = devis,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	* ADD/UPDATE DEVIS.
	* - Si this.devis._id exists : updateDevis().
	* - Si this.devis._id == null || 0 : addDevis().
	*/
	addDevis() {
		this.processing = true;
		this.disableForm();
		const newDevis = this.devisForm.value;
		newDevis.client = this.id_client;
		if (this.devis._id == null || this.devis._id == 0 || this.devis._id == '') {
			this.devisService.addDevis(newDevis)
				.subscribe(
				data => {
					console.log('Devis saved' + data);
					this.flashMessages.show('Devis créé', {
						classes: [ 'alert', 'alert-success' ],
						timeout: 3000
					});
					this.onSuccess();
				},
				error => {
					console.log('Erreur ' + error);
					this.flashMessages.show('Erreur création devis', {
						classes: [ 'alert', 'alert-danger' ],
						timeout: 3000
					});
					this.processing = false;
					this.enableForm();
				}
				);
		} else {
			const newDevis = this.devisForm.value;
			newDevis.client = this.id_client;
			this.devisService.updateDevis(newDevis, this.devis._id)
				.subscribe(
				data => {
					console.log('Devis updated' + data);
					this.flashMessages.show('Devis modifié', {
						classes: [ 'alert', 'alert-success' ],
						timeout: 3000
					});
					this.onSuccess();
				},
				error => {
					console.log('Erreur ' + error);
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
	* Delete client
	* @param id : devis id
	*/
	onDelete(id: number) {
		this.devisService.deleteDevis(id)
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
	}

	/**
	* Function success for all request to service.
	* Reset table by fetching data from database.
	*/
	onSuccess() {
		this.mode = false;
		this.devisForm.reset();
		this.devis = {};
		this.processing = false;
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
	*/
	onAdd() {
		this.mode = true;
		// Set controls['client'] touched for Validators.required
		this.devisForm.controls[ 'client' ].markAsTouched;
	}

	/**
	* Display devisForm and set devis values to update
	* @param d : devis
	*/
	onUpdate(d) {
		this.getClient(d.client);
		this.devis = d;
		let latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
		this.devis.date_creation = latest_date;
		this.devis.client = this.client._id;
		this.mode = true;
	}

	/**
	 * Generate Reactive Form
	 */
	generateForm() {
		this.devisForm = this.formBuilder.group({
			ref_devis: [ '', Validators.compose([
				Validators.required
			]) ],
			date_creation: [ Date.now ],
			montantHt: [ '', Validators.compose([
				Validators.required
			]) ],
			tauxTva: [ '', Validators.compose([
				Validators.required
			]) ],
			montantTtc: [ { value: '', disabled: true }],
			client: [ { value: this.id_client, disabled: true }, Validators.compose([
				Validators.required
			]) ],
		});
	}

	/**
	 * Enable form controls
	 */
	enableForm() {
		this.devisForm.enable();
	}

	/**
	 * Disable form controls
	 */
	disableForm() {
		this.devisForm.disable();
	}

	/**
   	* Calcul montantTTC using tauxTva and montantHt values of validerDevisForm and send new montantTtc
   	*/
	calculMontant() {
		if (!(this.devisForm.controls[ 'montantHt' ].value === '') && !(this.devisForm.controls[ 'tauxTva' ].value === '')) {
			let montantTTC = this.devisForm.controls[ 'montantHt' ].value * (1 + this.devisForm.controls[ 'tauxTva' ].value / 100);
			this.devisForm.controls[ 'montantTtc' ].setValue(Number(montantTTC).toFixed(2));
		}
	}

	/**
	* OnInit :
	* check if params['id_client'] set into url.
	* - set this.id_client = params['id_client'].
	* - get Client using this.id_client.
	*/
	ngOnInit() {
		// used for <select> client options
		this.getAllClient();
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
