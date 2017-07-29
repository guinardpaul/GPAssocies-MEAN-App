import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

// Models
import { Client } from '../../models/client';

// Services
import { ClientService } from '../../service/client.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: [ './client.component.css' ]
})
export class ClientComponent implements OnInit {
	listClient: Client[];
	client = new Client();
	mode: boolean = false;
	clientForm: FormGroup;
	processing: boolean = false;

	/**
	* Constructor
	* @param clientService client service
	* @param formBuilder Angular reactive Forms
	* @param flashMessages Flash Message Service
	*/
	constructor(
		private clientService: ClientService,
		private formBuilder: FormBuilder,
		private flashMessages: FlashMessagesService
	) {
		this.generateForm()
	}

	/**
	* Get All Clients to display in table.
	*/
	getAllClients() {
		this.clientService.getAllClients()
			.subscribe(
			data => this.listClient = data,
			error => console.log(error)
			);
	}

	/**
	* Get One Client.
	* Method not used.
	* @param id client id
	*/
	getOneClient(id: number) {
		this.clientService.getOneClient(id)
			.subscribe(
			client => this.client = client,
			error => console.log('Erreur ' + error)
			);
	}

	/**
	* ADD/UPDATE Client.
	* - Si this.client._id exists : updateClient().
	* - Si this.client._id == null || 0 : addClient().
	*/
	addClient() {
		this.processing = true;
		this.disableForm();
		this.client = this.clientForm.value;
		console.log(this.client);
		if (this.client._id == null || this.client._id == 0) {
			this.clientService.addClient(this.client)
				.subscribe(
				data => {
					this.flashMessages.show('Client créé', {
						classes: [ 'alert', 'alert-success' ],
						timeout: 3000
					});
					console.log('Client saved' + data);
					this.onSuccess();
				},
				error => {
					console.log('Erreur ' + error);
					this.flashMessages.show('Erreur : Client non créé', {
						classes: [ 'alert', 'alert-danger' ],
						timeout: 3000
					});
					this.processing = false;
					this.enableForm();
				}
				);
		} else {
			this.clientService.updateClient(this.client._id, this.client)
				.subscribe(
				data => {
					this.flashMessages.show('Client créé', {
						classes: [ 'alert', 'alert-success' ],
						timeout: 3000
					});
					console.log('Client updated' + data);
					this.onSuccess();
				},
				error => {
					console.log('Erreur ' + error);
					this.flashMessages.show('Erreur : Client non modifié', {
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
	* @param id : client id
	*/
	onDelete(id: number) {
		this.clientService.deleteClient(id)
			.subscribe(
			() => {
				console.log('Client deleted');
				this.flashMessages.show('Client supprimé', {
					classes: [ 'alert', 'alert-warning' ],
					timeout: 3000
				});
				this.getAllClients();
			},
			error => {
				console.log(error);
				this.flashMessages.show('Erreur: Client non supprimé', {
					classes: [ 'alert', 'alert-danger' ],
					timeout: 3000
				});
			}
			);
	}

	/**
	* Success function called when request to api successfull
	* Fetch data from database to update table
	*/
	onSuccess() {
		this.clientForm.reset();
		this.processing = false;
		this.enableForm();
		this.mode = false;
		this.client = new Client();
		this.getAllClients();
	}

	/**
	* Display clientForm
	*/
	onAdd() {
		this.mode = true;
	}

	/**
	* Display clientForm and set values to be updated
	* @param client client
	*/
	onUpdate(client: Client) {
		this.client = client;
		client = null;
		this.mode = true;
	}

	/**
	 * Cancel button
	 */
	onCancel() {
		this.mode = false;
		this.client = null;
	}

	/**
	* Form Generator
	*/
	generateForm() {
		this.clientForm = this.formBuilder.group({
			civilite: '',
			nom: [ '', Validators.compose([
				Validators.required,
				this.nomPrenomValidation
			]) ],
			prenom: [ '', Validators.compose([
				Validators.required,
				this.nomPrenomValidation
			]) ],
			email: [ '', Validators.compose([
				Validators.required,
				this.emailValidation
			]) ],
			numTel: [ '', Validators.compose([
				this.numTelValidation,
				Validators.minLength(10)
			]) ],
			adresseFact: '',
			complAdresseFact: '',
			cpFact: '',
			villeFact: '',
			adresseChantier: '',
			complAdresseChantier: '',
			cpChantier: '',
			villeChantier: '',
		});
	}

	enableForm() {
		this.clientForm.enable();
	}

	disableForm() {
		this.clientForm.disable();
	}

	// Input Validation
	/**
	* nom et prenom validation using RegExp
	* @param controls : form controls
	*/
	nomPrenomValidation(controls) {
		const regExp = new RegExp(/[a-zA-z-_éè]+$/);
		if (regExp.test(controls.value)) {
			return null;
		}
		return {
			nomPrenomValidation: true
		}
	}

	/**
	* email validation using RegExp
	* @param controls : form controls
	*/
	emailValidation(controls) {
		const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (regExp.test(controls.value)) {
			return null;
		}
		return {
			emailValidation: true
		}
	}

	/**
	* num tel validation using RegExp
	* @param controls : form controls
	*/
	numTelValidation(controls) {
		const regExp = new RegExp(/[0-9-_.]+$/);
		if (regExp.test(controls.value)) {
			return null;
		}
		return {
			numTelValidation: true
		};
	}

	/**
	 * Fetch All Clients from database
	 */
	ngOnInit() {
		this.getAllClients();
	}

}
