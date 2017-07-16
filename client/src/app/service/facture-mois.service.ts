import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FactureMois } from '../models/factureMois';

/**
 * Set api url accessing app/routes/ url
 */
const apiUrl = 'http://localhost:3000/api/facture-mois/';

@Injectable()
export class FactureMoisService {
  
	/**
	 * Get All Facture Mois
	 */
  	public getAllFactureMois(): Observable<FactureMois[]> {
		return this.http.get(apiUrl)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Get One Facture Mois
	 * @param id : Facture Mois id
	 */
	public getOneFactureMois(id: number): Observable<FactureMois> {
		return this.http.get(apiUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
	}

	/**
	 * Add Facture Mois
	 * @param factureMois : Facture Mois body
	 */
	public addFactureMois(factureMois: FactureMois): Observable<FactureMois> {
		return this.http.post(apiUrl, factureMois)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Update Facture Mois
	 * @param factureMois : Facture Mois body
	 * @param id : Facture Mois id
	 */
	public updateFactureMois(factureMois: FactureMois, id): Observable<FactureMois> {
		return this.http.put(apiUrl + id, factureMois)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  /**
   * Delete Facture Mois
   * @param id_fact : Facture Mois id
   */
	public deleteFactureMois(id_fact: number): Observable<null> {
		return this.http.delete(apiUrl + id_fact)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Generic Extract Data Method
	 * @param res : Response
	 */
	private extractData(res: Response) {
      	let body = res.json();
      	return body || { };
  	}

	/**
	 * Generic Handle Error Method
	 * @param error : error
	 */
  	private handleError (error: Response | any) {
      	console.error('ApiService::handleError', error);
      	return Observable.throw(error);
  	}

	/**
	 * Constructor
	 * @param http : Http module
	 */
  	constructor(private http: Http) { }

}
