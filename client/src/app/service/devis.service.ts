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
const devUrl = 'http://localhost:3001/api/devis/'

/**
 *
 * @author Paul GUINARD
 * @export DevisService
 * @class DevisService
 */
@Injectable()
export class DevisService {

	/**
   * Creates an instance of DevisService.
   * @param {Http} http http module
   * @memberof DevisService devis service
   */
  constructor(private http: Http) { }

	/**
   * Get All Devis.
   *
   * @returns devis
   * @memberof DevisService
   */
  getAllDevis() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

	/**
   * Get All Devis By Client.
   *
   * @param {number} client_id client._id
   * @returns
   * @memberof DevisService
   */
  getAllDevisByClient(client_id: number) {
    return this.http.get(devUrl + 'client/' + client_id)
      .map(res => res.json());
  };

	/**
   * Get one devis.
   *
   * @param {number} id devis._id
   * @returns
   * @memberof DevisService
   */
  getOneDevis(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Add Devis.
   *
   * @param {any} devis devis body
   * @returns
   * @memberof DevisService
   */
  addDevis(devis: any) {
    return this.http.post(devUrl, devis)
      .map(res => res.json());
  }

	/**
   * Update Devis.
   *
   * @param {Devis} devis devis body
   * @param {number} id_dev devis._id
   * @returns
   * @memberof DevisService
   */
  updateDevis(devis: Devis) {
    return this.http.put(devUrl + devis._id, devis)
      .map(res => res.json());
  }

	/**
   * Delete devis.
   *
   * @param {number} id_dev devis._id
   * @returns
   * @memberof DevisService
   */
  deleteDevis(id_dev: number) {
    return this.http.delete(devUrl + id_dev)
      .map(res => res.json());
  }

	/**
   * NOT USED
   * generic to extract Data Method.
   *
   * @private
   * @param {Response} res response
   * @returns
   * @memberof DevisService
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

	/**
   * NOT USED
   * generic to handle error Method.
   *
   * @private
   * @param {(Response | any)} error error
   * @returns
   * @memberof DevisService
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
