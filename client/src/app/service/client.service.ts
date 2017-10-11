import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
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
  clients: Observable<Client[]>;
  _clients: BehaviorSubject<Client[]>;
  dataStore: {
    clients: Client[]
  };
  get data(): Client[] { return this._clients.value; }
  /**
   * Creates an instance of ClientService.
   * @param {Http} http http module
   * @memberof ClientService client service
   */
  constructor(private http: Http) {
    this.dataStore = { clients: [] };
    this._clients = <BehaviorSubject<Client[]>>new BehaviorSubject([]);
    this.clients = this._clients.asObservable();
  }

  /**
   * Get all clients.
   *
   * @returns
   * @memberof ClientService
   */
  getAllClients() {
    return this.http.get(devUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.dataStore.clients = data;
        this._clients.next(Object.assign({}, this.dataStore).clients);
      }, err => console.log(err)
      );
  }

  /**
   * Get one client.
   *
   * @param {number} id client._id
   * @returns
   * @memberof ClientService
   */
  getOneClient(id: number): Observable<Client> {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Save client.
   *
   * @param {*} client client body
   * @returns
   * @memberof ClientService
   */
  addClient(client: any) {
    return this.http.post(devUrl, client)
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
    return this.http.put(devUrl + client._id, client)
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
    return this.http.delete(devUrl + id)
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
    return this.http.put(devUrl + client._id, client)
      .map(res => res.json());
  }

}
