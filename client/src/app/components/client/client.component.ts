import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Client } from '../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  client: any;
  mode: boolean = false;
  clientForm: FormGroup;

  message: string;
  messageClass: string;


  /**
  * Get All Clients
  */
  public getAllClients() {
    this.clientService.getAllClients()
    .subscribe(
      data => this.clients = data,
      error => console.log(error)
    );
  };

  /**
  * Get One Client
  * @param id : client id
  */
  public getOneClient(id: number) {
    this.clientService.getOneClient(id)
    .subscribe(
      client => this.client = client,
      error => console.log('Erreur ' + error)
    );
  };

  /**
  * Save Client or update client if client id == 0
  */
  public addClient() {
    this.client = this.clientForm.value;
    if(this.client._id == null || this.client._id == 0) {
			this.clientService.addClient(this.client)
      .subscribe(
        data => {
          this.messageClass = 'alert alert-success',
          this.message = 'Client créé',
          console.log('Client saved' + data),
          this.onSuccess()
        },
        error => {
          console.log('Erreur '+ error),
          this.message = 'Erreur',
          this.messageClass = 'alert alert-danger'
        }
      );
    } else {
      this.clientService.updateClient(this.client._id, this.client)
      .subscribe(

        data => {
          this.messageClass = 'alert alert-success',
          this.message = 'Client modifié',
          console.log('Client updated' + data),
          this.onSuccess()
        },
        error => {
          console.log('Erreur '+ error),
          this.message = 'Erreur',
          this.messageClass = 'alert alert-danger'
        }
      );
    }
  };


  /**
  * Success function called when request to api successfull
  */
  public onSuccess() {
    this.mode = false;
    this.client = null;
    this.getAllClients();
  };

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
  public onUpdate(client: Client) {
    this.client = client;
    client = null;
    this.mode = true;
  };

  /**
  * Delete client
  * @param id : client id
  */
  public onDelete(id: number) {
    this.clientService.deleteClient(id)
    .subscribe(
      () => { console.log('Client deleted'),
      this.getAllClients();
    },
    error => console.log(error)
  );
};

/**
* Form Generator
*/
public generateForm() {
  this.clientForm = this.formBuilder.group({
    civilite: '',
    nom: ['', Validators.compose([
      Validators.required,
      this.nomPrenomValidation
    ])],
    prenom: ['', Validators.compose([
      Validators.required,
      this.nomPrenomValidation
    ])],
    email: ['', Validators.compose([
      Validators.required,
      this.emailValidation
    ])],
    numTel: ['', Validators.compose([
      this.numTelValidation,
      Validators.minLength(10)
    ])],
    adresseFact: '',
    complAdresseFact: '',
    cpFact: '',
    villeFact: '',
    adresseChantier: '',
    complAdresseChantier: '',
    cpChantier: '',
    villeChantier: '',
  });
};

// Input Validation
/**
* nom et prenom validation using RegExp
* @param controls : form controls
*/
public nomPrenomValidation(controls){
  const regExp = new RegExp(/[a-zA-z-_éè]+$/);
  if (regExp.test(controls.value)) {
    return null;
  }
  return {
    nomPrenomValidation: true
  }
};

/**
* email validation using RegExp
* @param controls : form controls
*/
public emailValidation(controls) {
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (regExp.test(controls.value)) {
    return null;
  }
  return {
    emailValidation: true
  }
};

/**
* num tel validation using RegExp
* @param controls : form controls
*/
public numTelValidation(controls) {
  const regExp = new RegExp(/[0-9-_.]+$/);
  if (regExp.test(controls.value)) {
    return null;
  }
  return {
    numTelValidation: true
  };
};

/**
*
* @param clientService : client service
* @param formBuilder : Angular reactive Forms
*/
constructor(
  private clientService: ClientService,
  private formBuilder: FormBuilder
) {
  this.generateForm()
}

ngOnInit() {
  this.getAllClients();
}

}
