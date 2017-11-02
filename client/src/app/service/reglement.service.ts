import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// Models
import { Reglement } from '../models/reglement';
import { environment } from '../../environments/environment';

/**
 * 
 * @author Paul GUINARD
 * @export
 * @class ReglementService
 */
@Injectable()
export class ReglementService {
  private url;

  /**
   * Creates an instance of ReglementService.
   * @param {Http} http http module
   * @memberof ReglementService
   */
  constructor(private http: Http) {
    this.url = environment.url;
  }

  /**
   * Get All Reglement by FactureAccompte._id
   * 
   * @param {number} id FactureAccompte._id
   * @returns 
   * @memberof ReglementService
   */
  getReglementByFactureAccompte(id: number): Observable<any> {
    return this.http.get(`${this.url}/reglements/${id}`)
      .map(res => res.json());
  }

  /**
   * Save Reglement
   * 
   * @param {*} reglement body
   * @returns 
   * @memberof ReglementService
   */
  addReglement(reglement: any) {
    return this.http.post(`${this.url}/reglements`, reglement)
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
    return this.http.put(`${this.url}/reglements/${reglement._id}`, reglement)
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
    return this.http.delete(`${this.url}/reglements/${id}`)
      .map(res => res.json());
  }

}
