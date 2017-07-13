import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../../models/client';
import { ClientService } from '../../service/client.service';
import { PassValueService } from '../../service/pass-value.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    clients: Client[] = [];
    client: any = {};
    mode: boolean = false;

    /**
     * Get All Clients
     */
    getAllClients() {
      this.clientService.getAllClients()
                    .subscribe(
                      clients => this.clients = clients,
                      error => console.log(error)
                    );
    };

    /**
     * Get One Client
     * @param id : client id
     */
    getOneClient(id: number) {
      this.clientService.getOneClient(id)
                    .subscribe(
                      client => this.client = client,
                      error => console.log('Erreur ' + error)
                    );
    };

    /**
     * Save Client or update client if client id != 0
     */
    public addClient() {
		if(this.client._id == null || this.client._id == 0 || this.client._id == '') {
			this.clientService.addClient(this.client)
						.subscribe(
							client => { console.log('Client saved' + client),
                          this.onSuccess()
                        },
							error => console.log('Erreur '+ error)
						);
		} else {
			this.clientService.updateClient(this.client._id, this.client)
						.subscribe(
							client => { console.log('Client saved' + client),
                          this.onSuccess()
                        },
							error => console.log('Erreur '+ error)
						);
		}
	};

  /**
   * Success function called when request to api successfull
   */
  onSuccess() {
    this.mode = false;
		this.client = {};
		this.getAllClients();
  }

  /**
   * Diplay view of add form
   */
  public onAdd() {
    this.mode = true;
  };

  /**
   * Display view of update form and set values
   * @param client : client
   */
    onUpdate(client) {
      this.client = client;
      client = {};
      this.mode = true;
    };

    /**
     * Delete client
     * @param id : client id
     */
    onDelete(id: number) {
      this.clientService.deleteClient(id)
                    .subscribe(
                      () => { console.log('Client deleted'),
                               this.getAllClients();
                            },
                      error => console.log(error)
                    );
    };
    
    /**
     * Constructor
     * @param clientService : client service
     */
    constructor(
        private clientService: ClientService,
        ) { }

    ngOnInit() {
        this.getAllClients();
    }

}
