import { Component, OnInit } from '@angular/core';

// Models
import { Client } from '../../models/client';
import { Devis } from '../../models/devis';
import { FactureGlobal } from '../../models/factureGlobal';
import { FactureAccompte } from '../../models/factureAccompte';

// Services
import { ClientService } from '../../service/client.service';
import { DevisService } from '../../service/devis.service';
import { FactureGlobalService } from '../../service/facture-global.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';

/**
 *
 * @author Paul GUINARD
 * @export DashboardComponent
 * @class DashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  listClient: Client[] = [];
  listDevis: Devis[] = [];
  listFactureGlobal: FactureGlobal[] = [];
  listFactureAccompte: FactureAccompte[] = [];
  selectedClient: Client;
  activeClient: boolean;
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
   * Creates an instance of DashboardComponent.
   * @param {ClientService} clientService client service
   * @param {DevisService} devisService devis service
   * @param {FactureGlobalService} factureGlobalService facture global service 
   * @param {FactureAccompteService} factureAccompteService facture accompte service
   * @memberof DashboardComponent
   */
  constructor(
    private clientService: ClientService,
    private devisService: DevisService,
    private factureGlobalService: FactureGlobalService,
    private factureAccompteService: FactureAccompteService
  ) { }

  /**
   * on Select client
   * 
   * @param {Client} client 
   * @memberof DashboardComponent
   */
  onSelect(client: Client) {
    this.activeClient = true;
    this.selectedClient = client
    this.getDevisByClient(client._id);
    this.getAllFactureGlobalbyClient(client._id);
  }

  /**
   * Cancel select client
   * 
   * @memberof DashboardComponent
   */
  annulerSelection() {
    this.selectedClient = new Client();
    this.getAllDevis();
  }

  /**
   * Get All Client
   * 
   * @memberof DashboardComponent
   */
  getAllClients() {
    this.clientService.getAllClients()
      .subscribe(
      data => this.listClient = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get All Devis
   * 
   * @memberof DashboardComponent
   */
  getAllDevis() {
    this.devisService.getAllDevis()
      .subscribe(
      data => this.listDevis = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get All Devis by Client
   * 
   * @param {number} id client._id
   * @memberof DashboardComponent
   */
  getDevisByClient(id: number) {
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      data => this.listDevis = data,
      err => console.log('Erreur :' + err)
      );
  }

  getAllFactureGlobal() {
    this.factureGlobalService.getAllFactureGlobal()
      .subscribe(
      data => this.listFactureGlobal = data,
      err => console.log('Erreur :' + err)
      );
  }

  getAllFactureGlobalbyClient(id: number) {
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(
      data => {
        this.listFactureGlobal = data;
        this.getAllFactureAccomptebyFactureGlobal(data[ 0 ]._id);
      },
      err => console.log('Erreur :' + err)
      );
  }

  getAllFactureAccompte() {
    this.factureAccompteService.getAllFactureAccompte()
      .subscribe(
      data => this.listFactureAccompte = data,
      err => console.log('Erreur :' + err)
      )
  }

  getAllFactureAccomptebyFactureGlobal(id: number) {
    this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
      .subscribe(
      data => this.listFactureAccompte = data,
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * onInit:
   * - Get All Devis
   * 
   * @memberof DashboardComponent
   */
  ngOnInit() {
    this.getAllClients();
    this.getAllDevis();
    this.getAllFactureGlobal();
    this.getAllFactureAccompte();
  }

}
