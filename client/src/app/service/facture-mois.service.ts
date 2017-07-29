import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { FactureMois } from '../models/factureMois';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3000/api/facture-mois/';

@Injectable()
export class FactureMoisService {

	/**
	 * Get All Facture Mois.
	 */
	public getAllFactureMois() {
		return this.http.get(devUrl)
			.map(res => res.json());
	}

	/**
	 * Get All Facture Mois by factureGlobal._id.
	 * @param id_fact factureGlobal._id
	 */
	getAllFactureMoisByFactureGlobal(id_fact: number) {
		return this.http.get(devUrl + 'facture-global/' + id_fact)
			.map(res => res.json());
	}

	/**
	 * Get One Facture Mois by Id.
	 * @param id factureMois._id
	 */
	public getOneFactureMois(id: number) {
		return this.http.get(devUrl + id)
			.map(res => res.json());
	}

	/**
	 * Add Facture Mois.
	 * @param factureMois Facture Mois body
	 */
	public addFactureMois(factureMois: FactureMois) {
		return this.http.post(devUrl, factureMois)
			.map(res => res.json());
	}

	/**
	 * Update Facture Mois.
	 * @param factureMois Facture Mois body
	 * @param id factureMois._id
	 */
	public updateFactureMois(factureMois: FactureMois, id: number) {
		return this.http.put(devUrl + id, factureMois)
			.map(res => res.json());
	}

	/**
	 * Delete Facture Mois.
	 * @param id : factureMois._id
	 */
	public deleteFactureMois(id: number) {
		return this.http.delete(devUrl + id)
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
	 * Generic Handle Error Method.
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
