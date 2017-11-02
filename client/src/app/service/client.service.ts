import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// Models
import { Client } from '../models/client';
import { environment } from '../../environments/environment';

/**
 *
 * @author Paul GUINARD
 * @export ClientService
 * @class ClientService
 */
@Injectable()
export class ClientService {
  private url;
  /**
   * Creates an instance of ClientService.
   * @param {Http} http http module
   * @memberof ClientService client service
   */
  constructor(private http: Http) {
    this.url = environment.url;
  }

  /**
   * Get all clients.
   *
   * @returns
   * @memberof ClientService
   */
  getAllClients(): Observable<Client[]> {
    return this.http.get(`${this.url}/clients`)
      .map(res => res.json());
  }

  /**
   * Get one client.
   *
   * @param {number} id client._id
   * @returns
   * @memberof ClientService
   */
  getOneClient(id: number): Observable<Client> {
    return this.http.get(`${this.url}/clients/${id}`)
      .map(res => res.json());
  }

  /**
   * Vérification sur l'unicité du numéro d'affaire
   * 
   * @param {string} numAffaire N° affaire
   * @memberof ClientService
   */
  verifUniciteNumAffaire(numAffaire: string): Observable<any> {
    return this.http.get(`${this.url}/clients/numAffaire/${numAffaire}`)
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
    return this.http.post(`${this.url}/clients`, client)
      .map(res => res.json());
  }

  /**
   * Update client.
   *
   * @param {Client} client client body
   * @returns
   * @memberof ClientService
   */
  updateClient(client: Client) {
    return this.http.put(`${this.url}/clients/${client._id}`, client)
      .map(res => res.json());
  }

  /**
   * Delete client.
   *
   * @param {number} id client._id
   * @returns
   * @memberof ClientService
   */
  deleteClient(id: number) {
    return this.http.delete(`${this.url}/clients/${id}`)
      .map(res => res.json());
  }

  /**
   * Update Status Client
   *
   * @param {Client} client client body
   * @param {boolean} status status_client
   * @returns
   * @memberof ClientService
   */
  updateStatus(client: Client, status: boolean) {
    // Set status_client
    client.status_client = status;
    // PUT request
    return this.http.put(`${this.url}/clients/${client._id}`, client)
      .map(res => res.json());
  }

}
