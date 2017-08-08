import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { FactureAccompte } from '../models/factureAccompte';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3001/api/facture-accompte/';

/**
 *
 * @author Paul GUINARD
 * @export FactureAccompteService
 * @class FactureAccompteService
 */
@Injectable()
export class FactureAccompteService {

	/**
   * Get All Facture Accompte.
   *
   * @returns
   * @memberof FactureAccompteService
   */
  public getAllFactureAccompte() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

	/**
   * Get All Facture Accompte by factureGlobal._id.
   *
   * @param {number} id_fact factureGlobal._id
   * @returns
   * @memberof FactureAccompteService
   */
  getAllFactureAccompteByFactureGlobal(id_fact: number) {
    return this.http.get(devUrl + 'facture-global/' + id_fact)
      .map(res => res.json());
  }

	/**
   * Get One Facture Accompte by Id.
   *
   * @param {number} id factureAccompte._id
   * @returns
   * @memberof FactureAccompteService
   */
  public getOneFactureAccompte(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Add Facture Accompte.
   *
   * @param {FactureAccompte} factureAccompte factureAccompte body
   * @returns
   * @memberof FactureAccompteService
   */
  public addFactureAccompte(factureAccompte: FactureAccompte) {
    return this.http.post(devUrl, factureAccompte)
      .map(res => res.json());
  }

	/**
   * Update Facture Accompte.
   *
   * @param {FactureAccompte} factureAccompte factureAccompte body
   * @param {number} id factureAccompte._id
   * @returns
   * @memberof FactureAccompteService
   */
  public updateFactureAccompte(factureAccompte: FactureAccompte, id: number) {
    return this.http.put(devUrl + id, factureAccompte)
      .map(res => res.json());
  }

	/**
   * Delete Facture Accompte.
   *
   * @param {number} id factureAccompte._id
   * @returns
   * @memberof FactureAccompteService
   */
  public deleteFactureAccompte(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

	/**
   * Generic Extract Data Method.
   *
   * @private
   * @param {Response} res response
   * @returns
   * @memberof FactureAccompteService
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
   * @memberof FactureAccompteService
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

	/**
   * Creates an instance of FactureAccompteService.
   * @param {Http} http http module
   * @memberof FactureAccompteService factureAccompte service
   */
  constructor(private http: Http) { }

}
