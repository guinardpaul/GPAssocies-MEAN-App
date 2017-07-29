import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { FactureGlobal } from '../models/factureGlobal';

/**
* Set dev url accessing app/routes/ url
*/
const devUrl = 'http://localhost:3000/api/facture-global/';

@Injectable()
export class FactureGlobalService {

	/**
	* GET ALL FACTURE GLOBAL.
	*/
	getAllFactureGlobal() {
		return this.http.get(devUrl)
			.map(res => res.json());
	}

	/**
	* Get One Facture Global by ID.
	* @param id factureGlobal._id
	*/
	getOneFactureGlobalById(id: number) {
		return this.http.get(devUrl + id)
			.map(res => res.json());
	}

	/**
	 * Get All Facture Global by Client.
	 * @param client client_id
	 */
	getAllFactureGlobalByClient(id_client: number) {
		return this.http.get(devUrl + 'client/' + id_client)
			.map(res => res.json());
	}

	/**
	* Get One Facture Global by ref.
	* Method to check unique key of ref_factureGlobal.
	* @param ref factureGlobal.ref_factureGlobal
	*/
	getOneFactureGlobalByRef(ref: string) {
		return this.http.get(devUrl + 'ref/' + ref)
			.map(res => res.json());
	}

	/**
	* Add Facture Global.
	* @param factureGlobal : Facture global body
	*/
	addFactureGlobal(factureGlobal: FactureGlobal) {
		return this.http.post(devUrl, factureGlobal)
			.map(res => res.json());
	}

	/**
	* Update Facture Global.
	* @param factureGlobal : Facture Global body
	* @param id : factureGlobal._id
	*/
	updateFactureGlobal(factureGlobal: FactureGlobal, id) {
		return this.http.put(devUrl + id, factureGlobal)
			.map(res => res.json());
	}

	/**
	* Delete Facture Global.
	* @param id_fact : factureGlobal._id
	*/
	deleteFactureGlobal(id_fact: number) {
		return this.http.delete(devUrl + id_fact)
			.map(res => res.json());
	}

	/**
	* Generic Extract Data Method.
	* @param res : Response
	*/
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	/**
	* Generic Error handler Method.
	* @param error : error
	*/
	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}

	/**
	* Constructor
	* @param http : Http module
	*/
	constructor(private http: Http) { }

}
