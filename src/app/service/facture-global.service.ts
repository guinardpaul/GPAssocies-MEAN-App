import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FactureGlobal } from '../models/factureGlobal';

/**
 * Set api url accessing app/routes/ url
 */
const apiUrl = '/api/facture-global/';

@Injectable()
export class FactureGlobalService {
  
	/**
	 * GET ALL FACTURE GLOBAL
	 */
  public getAllFactureGlobal(): Observable<FactureGlobal[]> {
		return this.http.get(apiUrl)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Get One Facture Global
	 * @param id : facture global id
	 */
	public getOneFactureGlobal(id: number): Observable<FactureGlobal> {
		return this.http.get(apiUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
	}

	/**
	 * Add Facture Global
	 * @param factureGlobal : Facture global body
	 */
	public addFactureGlobal(factureGlobal: FactureGlobal): Observable<FactureGlobal> {
		return this.http.post(apiUrl, factureGlobal)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Update Facture Global
	 * @param factureGlobal : Facture Global body
	 * @param id : Facture Global id
	 */
	public updateFactureGlobal(factureGlobal: FactureGlobal, id): Observable<FactureGlobal> {
		return this.http.put(apiUrl + id, factureGlobal)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

	/**
	 * Delete Facture Global
	 * @param id_fact : Facture Global id
	 */
	public deleteFactureGlobal(id_fact: number): Observable<null> {
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
	 * Generic Error handler Method
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
