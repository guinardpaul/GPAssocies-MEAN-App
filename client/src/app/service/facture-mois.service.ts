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
const devUrl = 'http://localhost:3001/api/facture-mois/';

/**
 *
 * @author Paul GUINARD
 * @export FactureMoisService
 * @class FactureMoisService
 */
@Injectable()
export class FactureMoisService {

	/**
   * Get All Facture Mois.
   *
   * @returns
   * @memberof FactureMoisService
   */
  public getAllFactureMois() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

	/**
   * Get All Facture Mois by factureGlobal._id.
   *
   * @param {number} id_fact factureGlobal._id
   * @returns
   * @memberof FactureMoisService
   */
  getAllFactureMoisByFactureGlobal(id_fact: number) {
    return this.http.get(devUrl + 'facture-global/' + id_fact)
      .map(res => res.json());
  }

	/**
   * Get One Facture Mois by Id.
   *
   * @param {number} id factureMois._id
   * @returns
   * @memberof FactureMoisService
   */
  public getOneFactureMois(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Add Facture Mois.
   *
   * @param {FactureMois} factureMois factureMois body
   * @returns
   * @memberof FactureMoisService
   */
  public addFactureMois(factureMois: FactureMois) {
    return this.http.post(devUrl, factureMois)
      .map(res => res.json());
  }

	/**
   * Update Facture Mois.
   *
   * @param {FactureMois} factureMois factureMois body
   * @param {number} id factureMois._id
   * @returns
   * @memberof FactureMoisService
   */
  public updateFactureMois(factureMois: FactureMois, id: number) {
    return this.http.put(devUrl + id, factureMois)
      .map(res => res.json());
  }

	/**
   * Delete Facture Mois.
   *
   * @param {number} id factureMois._id
   * @returns
   * @memberof FactureMoisService
   */
  public deleteFactureMois(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Generic Extract Data Method.
   *
   * @private
   * @param {Response} res response
   * @returns
   * @memberof FactureMoisService
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

	/**
   * Generic Handle Error Method.
   *
   * @private
   * @param {(Response | any)} error error
   * @returns
   * @memberof FactureMoisService
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

	/**
   * Creates an instance of FactureMoisService.
   * @param {Http} http http module
   * @memberof FactureMoisService factureMois service
   */
  constructor(private http: Http) { }

}
