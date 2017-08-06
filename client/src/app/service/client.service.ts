import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { Client } from '../models/client';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3001/api/clients/';

/**
 *
 * @author Paul GUINARD
 * @export ClientService
 * @class ClientService
 */
@Injectable()
export class ClientService {

  /**
   * Get all clients.
   *
   * @returns
   * @memberof ClientService
   */
  getAllClients() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

  /**
   * Get one client.
   *
   * @param {number} id client._id
   * @returns
   * @memberof ClientService
   */
  getOneClient(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Save client.
   *
   * @param {Client} client client body
   * @returns
   * @memberof ClientService
   */
  addClient(client: Client) {
    return this.http.post(devUrl, client)
      .map(res => res.json());
  };

  /**
   * Update client.
   *
   * @param {number} id client._id
   * @param {Client} client client body
   * @returns
   * @memberof ClientService
   */
  updateClient(id: number, client: Client) {
    return this.http.put(devUrl + id, client)
      .map(res => res.json());
  };

  /**
   * Delete client.
   *
   * @param {number} id client._id
   * @returns
   * @memberof ClientService
   */
  deleteClient(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  };

  /**
   * function generic to extract Data
   *
   * @private
   * @param {Response} res
   * @returns
   * @memberof ClientService
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  /**
   * function generic to handle error
   *
   * @private
   * @param {(Response | any)} error
   * @returns
   * @throws {error} error
   * @memberof ClientService
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  /**
   * Creates an instance of ClientService.
   * @param {Http} http http module
   * @memberof ClientService client service
   */
  constructor(private http: Http) { }

}
