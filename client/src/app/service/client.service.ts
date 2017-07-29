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
const devUrl = 'http://localhost:3000/api/clients/';

@Injectable()
export class ClientService {

  /**
   * Get all clients.
   */
  getAllClients() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

  /**
   * Get one client.
   * @param id : client._id
   */
  getOneClient(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Save client.
   * @param client : client body
   */
  addClient(client: Client) {
    return this.http.post(devUrl, client)
      .map(res => res.json());
  };

  /**
   * Update client.
   * @param id client._id
   * @param client client body
   */
  updateClient(id: number, client: Client) {
    return this.http.put(devUrl + id, client)
      .map(res => res.json());
  };

  /**
   * Delete client.
   * @param id : client._id
   */
  deleteClient(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  };

  /**
	 * function generic to extract Data
	 * @param res : Response
	 */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  /**
	 * function generic to handle error
	 * @param error : error
	 */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  /**
   * Constructor
   * @param http : Http Module
   */
  constructor(private http: Http) { }

}
