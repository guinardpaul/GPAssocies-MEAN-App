import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Devis } from '../models/devis';

/**
 * Set api url accessing app/routes/ url
 */ 
const apiUrl = '/api/devis/'

@Injectable()
export class DevisService {

	/**
	 * Get All Devis
	 */
	public getAllDevis(): Observable<Devis[]> {
		return this.http.get(apiUrl)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Get one devis
	 * @param client_id : client id set to devis model as client
	 */
	public getAllDevisByClient(client_id: number): Observable<Devis[]> {
		return this.http.get(apiUrl + 'client/' + client_id)
					.map(this.extractData)
					.catch(this.handleError);
	};

	/**
	 * Get one devis
	 * @param id : devis id
	 */
	public getOneDevis(id: number): Observable<Devis> {
		return this.http.get(apiUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
	}

	/**
	 * Add Devis
	 * @param devis : devis to add
	 */
	public addDevis(devis: Devis): Observable<Devis> {
		return this.http.post(apiUrl, devis)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Update Devis
	 * @param devis: devis to update
	 * @param id: id of devis
	 */
	public updateDevis(devis: Devis, id): Observable<Devis> {
		return this.http.put(apiUrl + id, devis)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}

	/**
	 * Delete devis
	 * @param id_dev : devis id 
	 */
	public deleteDevis(id_dev: number): Observable<null> {
		return this.http.delete(apiUrl + id_dev)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * generic to extract Data Method
	 * @param res : Response
	 */
	private extractData(res: Response) {
      	let body = res.json();
      	return body || { };
  	}
  
	/**
	 * generic to handle error Method
	 * @param error : error
	 */
  	private handleError (error: Response | any) {
      	console.error('ApiService::handleError', error);
      	return Observable.throw(error);
  	}

	/**
	 * Constructor
	 * @param http : Http Module
	 */
  	constructor(private http: Http) { }

}
