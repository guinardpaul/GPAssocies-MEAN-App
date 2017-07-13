import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Client } from '../models/client';

/**
 * Set api url accessing app/routes/ url
 */
const apiUrl = '/api/clients/';

@Injectable()
export class ClientService {

  /**
   * Get all clients
   */
  getAllClients(): Observable<Client[]> {
      return this.http.get(apiUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
  }

  /**
   * Get one client
   * @param id : client id
   */
  getOneClient(id: number): Observable<Client> {
    return this.http.get(apiUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  /**
   * Save client
   * @param client : client to save
   */
  addClient(client: Client): Observable<Client> {
    return this.http.post(apiUrl, client)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  /**
   * Update client
   * @param id : client id
   * @param client : client body: any
   */
  updateClient(id: number, client: any): Observable<any> {
    return this.http.put(apiUrl + id, client)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  /**
   * Delete client
   * @param id : client id
   */
  deleteClient(id: number): Observable<any> {
    return this.http.delete(apiUrl + id)
                    .map(response => null)
                    .catch(this.handleError);
  };
  
  /**
	 * function generic to extract Data
	 * @param res : Response
	 */
  private extractData(res: Response) {
      let body = res.json();
      return body || { };
  }
  
  /**
	 * function generic to handle error
	 * @param error : error
	 */
  private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
  }

  /**
   * Constructor
   * @param http : Http Module
   */
  constructor(private http: Http) { }

}
