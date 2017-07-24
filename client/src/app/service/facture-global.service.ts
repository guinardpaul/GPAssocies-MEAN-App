import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FactureGlobal } from '../models/factureGlobal';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3000/api/facture-global/';

@Injectable()
export class FactureGlobalService {

	/**
	 * GET ALL FACTURE GLOBAL
	 */
  public getAllFactureGlobal(): Observable<FactureGlobal[]> {
		return this.http.get(devUrl)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Get One Facture Global by ID
	 * @param id : facture global id
	 */
	public getOneFactureGlobalById(id: number): Observable<FactureGlobal> {
		return this.http.get(devUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
  }

  /**
	 * Get One Facture Global by ref
	 * @param ref : facture global ref
	 */
	public getOneFactureGlobalByClient(client: number): Observable<any> {
		return this.http.get(devUrl + 'client/' + client)
						.map(res => res.json());
  }

	/**
	 * Get One Facture Global by ref
	 * @param ref : facture global ref
	 */
	public getOneFactureGlobalByRef(ref: string): Observable<any> {
		return this.http.get(devUrl + 'ref/' + ref)
						.map(res => res.json());
	}

	/**
	 * Add Facture Global
	 * @param factureGlobal : Facture global body
	 */
	public addFactureGlobal(factureGlobal: FactureGlobal): Observable<FactureGlobal> {
		return this.http.post(devUrl, factureGlobal)
					.map(this.extractData)
					.catch(this.handleError);
	}

	/**
	 * Update Facture Global
	 * @param factureGlobal : Facture Global body
	 * @param id : Facture Global id
	 */
	public updateFactureGlobal(factureGlobal: FactureGlobal, id): Observable<FactureGlobal> {
		return this.http.put(devUrl + id, factureGlobal)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

	/**
	 * Delete Facture Global
	 * @param id_fact : Facture Global id
	 */
	public deleteFactureGlobal(id_fact: number): Observable<null> {
		return this.http.delete(devUrl + id_fact)
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
