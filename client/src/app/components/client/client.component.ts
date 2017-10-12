import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material';

import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
// Models
import { Client } from '../../models/client';
import { CIVILITE } from '../../models/civilite.enum';

// Services
import { ClientService } from '../../service/client.service';
import { DevisService } from '../../service/devis.service';
import { FlashMessagesService } from 'ngx-flash-messages';

/**
 *
 * @author Paul GUINARD
 * @export ClientComponent
 * @class ClientComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [ './client.component.css' ]
})
export class ClientComponent implements OnInit {
  displayedColumns = [ 'statut', 'nom', 'prenom', 'adresseFact', 'adresseChantier', 'email', 'numTel', 'actions' ];
  dataSource: ExampleDataSource | null;

  @ViewChild(MatSort) sort: MatSort;
  /**
   * liste clients
   * 
   * @type {any[]}
   * @memberof ClientComponent
   */
  listClient: any[];

  /**
   * client
   * 
   * @type {*}
   * @memberof ClientComponent
   */
  client: any = {};

  /**
   * id client
   * 
   * @type {number}
   * @memberof ClientComponent
   */
  client_id: number = null;

  /**
   * keys for select option
   * 
   * @type {any[]}
   * @memberof ClientComponent
   */
  keys: any[];

  /**
   * enum CIVILITE
   * 
   * @memberof ClientComponent
   */
  civilite = CIVILITE;

  /**
   * mode form
   * 
   * @memberof ClientComponent
   */
  mode = false;

  /**
   * on process
   * 
   * @memberof ClientComponent
   */
  processing = false;

  /**
   * client form
   * 
   * @type {FormGroup}
   * @memberof ClientComponent
   */
  clientForm: FormGroup;

  // Status images

  /**
   * image status true
   * 
   * @memberof ClientComponent
   */
  status_true = '../../assets/images/status_true.png';

  /**
   * image status false
   * 
   * @memberof ClientComponent
   */
  status_false = '../../assets/images/status_false.png';

	/**
   * Creates an instance of ClientComponent.
   *
   * @param {ClientService} clientService client service
   * @param {DevisService} devisService devis service
   * @param {FormBuilder} formBuilder Reactive forms builder
   * @param {FlashMessagesService} flashMessages Angular flash messages
   * @memberof ClientComponent
   */
  constructor(
    private clientService: ClientService,
    private devisService: DevisService,
    private formBuilder: FormBuilder,
    private flashMessages: FlashMessagesService,
    public dialog: MatDialog
  ) {
    this.generateForm();
    this.keys = Object.keys(this.civilite).filter(Number);
  }

	/**
   * Get All Clients to display in table.
   *
   * @memberof ClientComponent
   */
  getAllClients() {
    this.clientService.getAllClients();
  }

	/**
   * Get One Client.
	 * Method not used.
   *
   * @param {number} id client._id
   * @memberof ClientComponent
   */
  getOneClient(id: number) {
    this.clientService.getOneClient(id)
      .subscribe(
      client => this.client = client,
      error => console.log('Erreur ' + error)
      );
  }

	/**
   * ADD/UPDATE Client.
	 * - Si this.client._id exists : updateClient().
	 * - Si this.client._id == null || 0 : addClient().
   *
   * @memberof ClientComponent
   */
  addClient() {
    this.processing = true;
    this.disableForm();
    this.client = this.clientForm.value;
    this.client._id = this.client_id;
    this.client.civilite = this.clientForm.get('civilite').value;
    console.log(this.client);
    // Check method to use 
    if (this.client_id === null || this.client_id === 0) {
      this.clientService.addClient(this.client)
        .subscribe(
        data => {
          if (!data.success) {
            this.flashMessages.show(data.message, {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            this.processing = false;
            this.enableForm();
          } else {
            this.flashMessages.show(data.message, {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            console.log('Client saved' + data);
            this.onSuccess();
          }
        }
        );
    } else {
      this.clientService.updateClient(this.client)
        .subscribe(
        data => {
          if (data.success) {
            this.flashMessages.show('Client mis à jour', {
              classes: [ 'alert', 'alert-success' ],
              timeout: 3000
            });
            console.log('Client updated' + data);
            this.onSuccess();
          } else {
            this.flashMessages.show('Erreur : Client non modifié', {
              classes: [ 'alert', 'alert-danger' ],
              timeout: 3000
            });
            console.log('Erreur update client :' + data);
            this.processing = false;
            this.enableForm();
          }
        },
      );
    }
  }

	/**
   * Delete client si Ne possède pas de Devis
   *
   * @param {number} id client._id
   * @memberof ClientComponent
   */
  onDelete(id: number) {
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      data => {
        console.log(data.length);
        if (data.length === 0) {
          this.clientService.deleteClient(id)
            .subscribe(
            () => {
              console.log('Client deleted');
              this.flashMessages.show('Client supprimé', {
                classes: [ 'alert', 'alert-warning' ],
                timeout: 3000
              });
              this.client = {};
              this.getAllClients();
            },
            error => {
              this.client = {};
              console.log(error);
              this.flashMessages.show('Erreur: Client non supprimé', {
                classes: [ 'alert', 'alert-danger' ],
                timeout: 3000
              });
            }
            );
        } else {
          this.client = {};
          console.log('Client non supprimé');
          this.flashMessages.show('Suppression impossible ! le client est associé à des devis', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
        }
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Set client to delete on confirm
   * 
   * @param {Client} client client body
   * @memberof ClientComponent
   */
  getClientToDelete(client: Client) {
    this.client = client;
  }

  /**
   * on close modal
   * 
   * @memberof ClientComponent
   */
  closeModal() {
    this.client = {};
    this.client_id = null;
  }

	/**
   * Success function called when request to api successfull.
	 * Fetch data from database to update table.
   *
   * @memberof ClientComponent
   */
  onSuccess() {
    this.generateForm();
    this.processing = false;
    this.enableForm();
    this.mode = false;
    this.client = {};
    this.client_id = null;
    this.getAllClients();
  }

	/**
   * Display clientForm
   *
   * @memberof ClientComponent
   */
  onAdd() {
    this.mode = true;
    this.client_id = null;
    this.client = {};
  }

	/**
   * Display clientForm and set values to be updated
   *
   * @param {Client} client client body
   * @memberof ClientComponent
   */
  onUpdate(client: Client) {
    // Set this.client values (fecth _id)
    this.client = client;
    this.client_id = client._id;

    // Set clientForm values
    this.clientForm.get('civilite').setValue(client.civilite);
    this.clientForm.get('nom').setValue(client.nom);
    this.clientForm.get('prenom').setValue(client.prenom);
    this.clientForm.get('email').setValue(client.email);
    this.clientForm.get('numTel').setValue(client.numTel);
    this.clientForm.get('adresseFact').setValue(client.adresseFact);
    this.clientForm.get('complAdresseFact').setValue(client.complAdresseFact);
    this.clientForm.get('cpFact').setValue(client.cpFact);
    this.clientForm.get('villeFact').setValue(client.villeFact);
    this.clientForm.get('adresseChantier').setValue(client.adresseChantier);
    this.clientForm.get('complAdresseChantier').setValue(client.complAdresseChantier);
    this.clientForm.get('cpChantier').setValue(client.cpChantier);
    this.clientForm.get('villeChantier').setValue(client.villeChantier);

    client = null;
    this.mode = true;
  }

	/**
   * Cancel button
   *
   * @memberof ClientComponent
   */
  onCancel() {
    this.mode = false;
    this.client_id = null;
    this.client = {};
    this.generateForm();
  }

	/**
   * Form Generator
   *
   * @memberof ClientComponent
   */
  generateForm() {
    this.clientForm = this.formBuilder.group({
      civilite: '',
      nom: [ '', Validators.compose([
        Validators.required,
        this.nomPrenomValidation
      ]) ],
      prenom: [ '', Validators.compose([
        Validators.required,
        this.nomPrenomValidation
      ]) ],
      email: [ '', Validators.compose([
        Validators.required,
        this.emailValidation
      ]) ],
      numTel: [ '', Validators.compose([
        this.numTelValidation,
        Validators.minLength(10)
      ]) ],
      adresseFact: '',
      complAdresseFact: '',
      cpFact: '',
      villeFact: '',
      adresseChantier: '',
      complAdresseChantier: '',
      cpChantier: '',
      villeChantier: '',
    });
  }

  /**
   * enable form
   *
   * @memberof ClientComponent
   */
  enableForm() {
    this.clientForm.enable();
  }

  /**
   * disable form
   *
   * @memberof ClientComponent
   */
  disableForm() {
    this.clientForm.disable();
  }

  // Input Validation
  /**
   * nom et prenom validation using RegExp
   *
   * @param {any} controls
   * @returns
   * @memberof ClientComponent
   */
  nomPrenomValidation(controls) {
    const regExp = new RegExp(/[a-zA-z-_éè]+$/);
    if (regExp.test(controls.value)) {
      return null;
    }
    return {
      nomPrenomValidation: true
    }
  }

  /**
   * email validation using RegExp
   *
   * @param {any} controls
   * @returns
   * @memberof ClientComponent
   */
  emailValidation(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null;
    }
    return {
      emailValidation: true
    }
  }

  /**
   * num tel validation using RegExp
   *
   * @param {any} controls
   * @returns
   * @memberof ClientComponent
   */
  numTelValidation(controls) {
    const regExp = new RegExp(/[0-9-_.]+$/);
    if (regExp.test(controls.value)) {
      return null;
    }
    return {
      numTelValidation: true
    };
  }

  getSatusImage(client): string {
    let image: string;
    if (client.status_client) {
      image = this.status_true;
    } else {
      image = this.status_false;
    }
    return image;
  }

  getErrorMessage(arg: string): string {
    let msg: string;
    switch (arg) {
      case 'nom':

        break;
      case 'prenom':

        break;
      case 'email':

        break;
      case 'numTel':

        break;

      default:
        return msg;
    }
  }

  openDialog(client): void {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: client
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  /**
   * Fetch All Clients from database
   *
   * @memberof ClientComponent
   */
  ngOnInit() {
    this.getAllClients();
    this.dataSource = new ExampleDataSource(this.clientService, this.sort);
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _clientService: ClientService, private _sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Client[]> {
    const displayDataChanges = [
      this._clientService._clients,
      this._sort.sortChange,
    ];
    console.log(displayDataChanges);

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() { }

  /** Returns a sorted copy of the database data. */
  getSortedData(): Client[] {
    const data = this._clientService.data.slice();
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: boolean | number | string = '';
      let propertyB: boolean | number | string = '';

      switch (this._sort.active) {
        case 'statut_client': [ propertyA, propertyB ] = [ a.status_client, b.status_client ]; break;
        case 'nom': [ propertyA, propertyB ] = [ a.nom, b.nom ]; break;
        case 'prenom': [ propertyA, propertyB ] = [ a.prenom, b.prenom ]; break;
        case 'adresseFact': [ propertyA, propertyB ] = [ a.adresseFact, b.adresseFact ]; break;
        case 'adresseChantier': [ propertyA, propertyB ] = [ a.adresseChantier, b.adresseChantier ]; break;
        case 'email': [ propertyA, propertyB ] = [ a.email, b.email ]; break;
        case 'numTel': [ propertyA, propertyB ] = [ a.numTel, b.numTel ]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
