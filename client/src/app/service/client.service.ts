import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Client } from '../models/client';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3000/api/clients/';

@Injectable()
export class ClientService {

  /**
   * Get all clients
   */
  getAllClients(): Observable<Client[]> {
      return this.http.get(devUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
  }

  /**
   * Get one client
   * @param id : client id
   */
  getOneClient(id: number): Observable<Client> {
    return this.http.get(devUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  /**
   * Save client
   * @param client : client to save
   */
  addClient(client: Client): Observable<any> {
    return this.http.post(devUrl, client)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  /**
   * Update client
   * @param id client id
   * @param client client body: any
   */
  updateClient(id: number, client: Client): Observable<any> {
    return this.http.put(devUrl + id, client)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  /**
   * Delete client
   * @param id : client id
   */
  deleteClient(id: number): Observable<any> {
    return this.http.delete(devUrl + id)
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
