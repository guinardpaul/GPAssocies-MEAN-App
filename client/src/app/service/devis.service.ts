import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { Devis } from '../models/devis';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3000/api/devis/'

@Injectable()
export class DevisService {

	/**
	 * Get All Devis.
	 */
	getAllDevis() {
		return this.http.get(devUrl)
			.map(res => res.json());
	}

	/**
	 * Get All Devis By Client.
	 * @param client_id : client._id
	 */
	getAllDevisByClient(client_id: number) {
		return this.http.get(devUrl + 'client/' + client_id)
			.map(res => res.json());
	};

	/**
	 * Get one devis.
	 * @param id : devis._id
	 */
	getOneDevis(id: number) {
		return this.http.get(devUrl + id)
			.map(res => res.json());
	}

	/**
	 * Add Devis.
	 * @param devis : devis body
	 */
	addDevis(devis: Devis) {
		return this.http.post(devUrl, devis)
			.map(res => res.json());
	}

	/**
	 * Update Devis.
	 * @param devis: devis body
	 * @param id: devis._id
	 */
	updateDevis(devis: Devis, id: number) {
		return this.http.put(devUrl + id, devis)
			.map(res => res.json());
	}

	/**
	 * Delete devis.
	 * @param id_dev : devis._id 
	 */
	deleteDevis(id_dev: number) {
		return this.http.delete(devUrl + id_dev)
			.map(res => res.json());
	}

	/**
	 * generic to extract Data Method.
	 * @param res : Response
	 */
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	/**
	 * generic to handle error Method.
	 * @param error : error
	 */
	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}

	/**
	 * Constructor
	 * @param http : Http Module
	 */
	constructor(private http: Http) { }

}
