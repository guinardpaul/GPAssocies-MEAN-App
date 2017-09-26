import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { DetailsDevis } from '../models/detailsDevis';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = '/api/details-devis/';

/**
 * 
 * @author Paul GUINARD
 * @export
 * @class DetailsDevisService
 */
@Injectable()
export class DetailsDevisService {

  /**
   * Creates an instance of DetailsDevisService.
   * @param {Http} http http module
   * @memberof DetailsDevisService
   */
  constructor(
    private http: Http
  ) { }

  /**
   * Get All DetailsDevis By Devis
   * 
   * @param {number} id_dev devis._id
   * @returns 
   * @memberof DetailsDevisService
   */
  getDetailsDevisByDevis(id_dev: number) {
    return this.http.get(devUrl + id_dev)
      .map(res => res.json());
  }

  /**
   * Create DetailsDevis
   * 
   * @param {*} detailsDevis DetailsDevis body
   * @returns 
   * @memberof DetailsDevisService
   */
  addDetailsDevis(detailsDevis: any) {
    return this.http.post(devUrl, detailsDevis)
      .map(res => res.json());
  }

  /**
   * Update DetailsDevis
   * 
   * @param {DetailsDevis} detailsDevis  DetailsDevis body
   * @returns 
   * @memberof DetailsDevisService
   */
  updateDetailsDevis(detailsDevis: DetailsDevis) {
    return this.http.put(devUrl + detailsDevis._id, detailsDevis)
      .map(res => res.json());
  }

  /**
   * Delete DetailsDevis
   * 
   * @param {number} id detailsDevis._id
   * @returns 
   * @memberof DetailsDevisService
   */
  deleteDetailsDevis(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

}
