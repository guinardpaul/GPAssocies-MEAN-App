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
const devUrl = 'http://localhost:3001/api/facture-global/';

/**
 *
 * @author Paul GUINARD
 * @export FactureGlobalService
 * @class FactureGlobalService
 */
@Injectable()
export class FactureGlobalService {

	/**
   * GET ALL FACTURE GLOBAL.
   *
   * @returns
   * @memberof FactureGlobalService
   */
  getAllFactureGlobal() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

	/**
   * Get One Facture Global by ID
   *
   * @param {number} id factureGlobal._id
   * @returns
   * @memberof FactureGlobalService
   */
  getOneFactureGlobalById(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Get All Facture Global by Client.
   *
   * @param {number} id_client client._id
   * @returns
   * @memberof FactureGlobalService
   */
  getAllFactureGlobalByClient(id_client: number) {
    return this.http.get(devUrl + 'client/' + id_client)
      .map(res => res.json());
  }

	/**
   * Get One Facture Global by ref.
	 * Method to check unique key of ref_factureGlobal.
   *
   * @param {string} ref factureGlobal.ref
   * @returns
   * @memberof FactureGlobalService
   */
  getOneFactureGlobalByRef(ref: string) {
    return this.http.get(devUrl + 'ref/' + ref)
      .map(res => res.json());
  }

	/**
   * Add Facture Global.
   *
   * @param {FactureGlobal} factureGlobal factureGlobal body
   * @returns
   * @memberof FactureGlobalService
   */
  addFactureGlobal(factureGlobal: FactureGlobal) {
    return this.http.post(devUrl, factureGlobal)
      .map(res => res.json());
  }

	/**
   * Update Facture Global.
   *
   * @param {FactureGlobal} factureGlobal factureGlobal body
   * @param {any} id factureGlobal._id
   * @returns
   * @memberof FactureGlobalService
   */
  updateFactureGlobal(factureGlobal: FactureGlobal, id) {
    return this.http.put(devUrl + id, factureGlobal)
      .map(res => res.json());
  }

	/**
   * Delete Facture Global.
   *
   * @param {number} id_fact factureGlobal._id
   * @returns
   * @memberof FactureGlobalService
   */
  deleteFactureGlobal(id_fact: number) {
    return this.http.delete(devUrl + id_fact)
      .map(res => res.json());
  }

	/**
   * Generic Extract Data Method.
   *
   * @private
   * @param {Response} res response
   * @returns
   * @memberof FactureGlobalService
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

	/**
   * Generic Error handler Method.
   *
   * @private
   * @param {(Response | any)} error error
   * @returns
   * @memberof FactureGlobalService
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

	/**
   * Creates an instance of FactureGlobalService.
   * @param {Http} http http module
   * @memberof FactureGlobalService facture global service
   */
  constructor(private http: Http) { }

}
