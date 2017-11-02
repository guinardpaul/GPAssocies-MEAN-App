import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// Models
import { FactureGlobal } from '../models/factureGlobal';
import { environment } from '../../environments/environment';

/**
 *
 * @author Paul GUINARD
 * @export FactureGlobalService
 * @class FactureGlobalService
 */
@Injectable()
export class FactureGlobalService {
  private url;

  /**
   * Creates an instance of FactureGlobalService.
   * @param {Http} http http module
   * @memberof FactureGlobalService facture global service
   */
  constructor(private http: Http) {
    this.url = environment.url;
  }

  /**
   * GET ALL FACTURE GLOBAL.
   *
   * @returns
   * @memberof FactureGlobalService
   */
  getAllFactureGlobal(): Observable<FactureGlobal[]> {
    return this.http.get(`${this.url}/facture-global`)
      .map(res => res.json());
  }

  /**
   * Get One Facture Global by ID
   *
   * @param {number} id factureGlobal._id
   * @returns
   * @memberof FactureGlobalService
   */
  getOneFactureGlobalById(id: number): Observable<FactureGlobal> {
    return this.http.get(`${this.url}/facture-global/${id}`)
      .map(res => res.json());
  }

  /**
   * Get All Facture Global by Client.
   *
   * @param {number} id_client client._id
   * @returns
   * @memberof FactureGlobalService
   */
  getAllFactureGlobalByClient(id_client: number): Observable<FactureGlobal[]> {
    return this.http.get(`${this.url}/facture-global/client/${id_client}`)
      .map(res => res.json());
  }

  /**
   * Get All Facture Global by Devis
   * 
   * @param {number} id Devis id
   * @returns 
   * @memberof FactureGlobalService
   */
  getAllFactureGlobalByDevis(id: number): Observable<FactureGlobal[]> {
    return this.http.get(`${this.url}/facture-global/devis/${id}`)
      .map(res => res.json());
  }

  /**
   * Get One Facture Global by ref.
	 * Method to check unique key of ref_factureGlobal.
   * 
   * @param {number} id_client client id
   * @param {string} ref ref facture global
   * @returns 
   * @memberof FactureGlobalService
   */
  getOneFactureGlobalByRef(id_client: number, ref: string): Observable<any> {
    return this.http.get(`${this.url}/facture-global/client/${id_client}/ref/${ref}`)
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
    return this.http.post(`${this.url}/facture-global`, factureGlobal)
      .map(res => res.json());
  }

  /**
   * Update Facture Global.
   *
   * @param {FactureGlobal} factureGlobal factureGlobal body
   * @returns
   * @memberof FactureGlobalService
   */
  updateFactureGlobal(factureGlobal: FactureGlobal) {
    return this.http.put(`${this.url}/facture-global/${factureGlobal._id}`, factureGlobal)
      .map(res => res.json());
  }

  /**
   * Update Facture Global status
   * 
   * @param {FactureGlobal} factureGlobal facture Global body
   * @returns 
   * @memberof FactureGlobalService
   */
  updateStatusFactureGlobal(factureGlobal: FactureGlobal, status_factureGlobal) {
    // Set Status facture Global
    factureGlobal.status_factureGlobal = status_factureGlobal;
    // PUT Request
    return this.http.put(`${this.url}/facture-global/${factureGlobal._id}`, factureGlobal)
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
    return this.http.delete(`${this.url}/facture-global/${id_fact}`)
      .map(res => res.json());
  }

}
