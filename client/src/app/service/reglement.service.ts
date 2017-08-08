import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { Reglement } from '../models/reglement';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3001/api/reglement/'

/**
 * 
 * @author Paul GUINARD
 * @export
 * @class ReglementService
 */
@Injectable()
export class ReglementService {

  /**
   * Creates an instance of ReglementService.
   * @param {Http} http http module
   * @memberof ReglementService
   */
  constructor(private http: Http) { }

  /**
   * Get All Reglement by FactureMois._id
   * 
   * @param {number} id FactureMois._id
   * @returns 
   * @memberof ReglementService
   */
  getReglementByFactureMois(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Save Reglement
   * 
   * @param {*} reglement body
   * @returns 
   * @memberof ReglementService
   */
  saveReglement(reglement: any) {
    return this.http.post(devUrl, reglement)
      .map(res => res.json());
  }

  /**
   * Update reglement
   * 
   * @param {Reglement} reglement body
   * @returns 
   * @memberof ReglementService
   */
  updateReglement(reglement: Reglement) {
    return this.http.put(devUrl + reglement._id, reglement)
      .map(res => res.json());
  }

  /**
   * Delete reglement
   * 
   * @param {number} id reglement._id
   * @returns 
   * @memberof ReglementService
   */
  deleteReglement(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

}
