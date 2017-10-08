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
const devUrl = '/api/facture-accompte/';

/**
 *
 * @author Paul GUINARD
 * @export FactureAccompteService
 * @class FactureAccompteService
 */
@Injectable()
export class FactureAccompteService {

	/**
   * Creates an instance of FactureAccompteService.
   * @param {Http} http http module
   * @memberof FactureAccompteService factureAccompte service
   */
  constructor(private http: Http) { }

	/**
   * Get All Facture Accompte.
   *
   * @returns
   * @memberof FactureAccompteService
   */
  getAllFactureAccompte() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

	/**
   * Get All Facture Accompte by factureGlobal.
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
  getOneFactureAccompte(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Get One Facture accompte by ref.
	 * Method to check unique key of ref_factureAccompte.
   * 
   * @param {number} id_factureGlobal facture global id
   * @param {any} ref_factureAccompte facture accompte ref
   * @returns 
   * @memberof FactureAccompteService
   */
  getOneFactureAccompteByRef(id_factureGlobal: number, ref_factureAccompte) {
    return this.http.get(devUrl + 'facture-global/' + id_factureGlobal + '/ref/' + ref_factureAccompte)
      .map(res => res.json());
  }

	/**
   * Add Facture Accompte.
   *
   * @param {*} factureAccompte factureAccompte body
   * @returns
   * @memberof FactureAccompteService
   */
  addFactureAccompte(factureAccompte: any) {
    return this.http.post(devUrl, factureAccompte)
      .map(res => res.json());
  }

	/**
   * Update Facture Accompte.
   *
   * @param {FactureAccompte} factureAccompte factureAccompte body
   * @returns
   * @memberof FactureAccompteService
   */
  updateFactureAccompte(factureAccompte: FactureAccompte) {
    return this.http.put(devUrl + factureAccompte._id, factureAccompte)
      .map(res => res.json());
  }

  /**
   * Update Facture Accompte status
   * 
   * @param {FactureAccompte} factureAccompte facture Accompte body
   * @returns 
   * @memberof FactureAccompteService
   */
  updateStatusFactureAccompte(factureAccompte: FactureAccompte, status_factureAccompte) {
    // Set status facture accompte
    factureAccompte.status_factureAccompte = status_factureAccompte;
    // PUT request
    return this.http.put(devUrl + factureAccompte._id, factureAccompte)
      .map(res => res.json());
  }

	/**
   * Delete Facture Accompte.
   *
   * @param {number} id factureAccompte._id
   * @returns
   * @memberof FactureAccompteService
   */
  deleteFactureAccompte(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

}
