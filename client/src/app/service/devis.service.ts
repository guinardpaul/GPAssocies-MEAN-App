import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Models
import { Devis } from '../models/devis';
import { environment } from '../../environments/environment';

/**
 *
 * @author Paul GUINARD
 * @export DevisService
 * @class DevisService
 */
@Injectable()
export class DevisService {
  private url;

  /**
   * Creates an instance of DevisService.
   * @param {Http} http http module
   * @memberof DevisService devis service
   */
  constructor(private http: Http) {
    this.url = environment.url;
  }

  /**
   * Get All Devis.
   *
   * @returns devis
   * @memberof DevisService
   */
  getAllDevis(): Observable<Devis[]> {
    return this.http.get(`${this.url}/devis`)
      .map(res => res.json());
  }

  /* getAllValidDevis(): Observable<Devis> {
    return this.http.get(devUrl)
      .flatMap(res => res.json())
      .filter(dev => dev[1].valid)
      .map(dev => dev.json());
  } */

  /**
   * Get All Devis By Client.
   *
   * @param {number} client_id client._id
   * @returns
   * @memberof DevisService
   */
  getAllDevisByClient(client_id: number): Observable<Devis[]> {
    return this.http.get(`${this.url}/devis/client/${client_id}`)
      .map(res => res.json());
  };

  /**
   * Get one devis.
   *
   * @param {number} id devis._id
   * @returns
   * @memberof DevisService
   */
  getOneDevis(id: number): Observable<Devis> {
    return this.http.get(`${this.url}/devis/${id}`)
      .map(res => res.json());
  }

  /**
   * Get One Devis by ref.
	 * Method to check unique key of ref_devis.
   * 
   * @param {number} id_client client id
   * @param {number} ref_devis ref devis
   * @returns 
   * @memberof DevisService
   */
  getOneDevisByRef(id_client: number, ref_devis: number): Observable<any> {
    return this.http.get(`${this.url}/devis/client/${id_client}/ref/${ref_devis}`)
      .map(res => res.json());
  }

  /**
   * Add Devis.
   *
   * @param {any} devis devis body
   * @returns
   * @memberof DevisService
   */
  addDevis(devis: Devis) {
    return this.http.post(`${this.url}/devis`, devis)
      .map(res => res.json());
  }

  /**
   * Update Devis.
   *
   * @param {any} devis devis body
   * @param {number} id_dev devis._id
   * @returns
   * @memberof DevisService
   */
  updateDevis(devis: Devis) {
    return this.http.put(`${this.url}/devis/${devis._id}`, devis)
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
    return this.http.delete(`${this.url}/devis/${id_dev}`)
      .map(res => res.json());
  }

}
