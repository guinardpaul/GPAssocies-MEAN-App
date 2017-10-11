import { Component, OnInit } from '@angular/core';

// Models
import { Client } from '../../models/client';
import { Devis } from '../../models/devis';
import { FactureAccompte } from '../../models/factureAccompte';
import { FactureGlobal } from '../../models/factureGlobal';

// Services
import { ClientService } from '../../service/client.service';
import { DevisService } from '../../service/devis.service';
import { FactureAccompteService } from '../../service/facture-accompte.service';
import { FactureGlobalService } from '../../service/facture-global.service';

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
  /**
   * Liste clients
   * 
   * @type {Client[]}
   * @memberof DashboardComponent
   */
  listClient: Client[] = [];

  /**
   * Liste Devis
   * 
   * @type {Devis[]}
   * @memberof DashboardComponent
   */
  listDevis: Devis[] = [];

  /**
   * Liste Factures Global
   * 
   * @type {FactureGlobal[]}
   * @memberof DashboardComponent
   */
  listFactureGlobal: FactureGlobal[] = [];

  /**
   * Liste Factures Accompte
   * 
   * @type {FactureAccompte[]}
   * @memberof DashboardComponent
   */
  listFactureAccompte: FactureAccompte[] = [];

  /**
   * current selected client
   * 
   * @type {Client}
   * @memberof DashboardComponent
   */
  selectedClient: Client;

  /**
   * client actif
   * 
   * @type {boolean}
   * @memberof DashboardComponent
   */
  activeClient: boolean;

  /**
   * historique actif
   * 
   * @memberof DashboardComponent
   */
  historique = false;

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
   * reload data
   * 
   * @param {Client} client 
   * @memberof DashboardComponent
   */
  onSelect(client: Client) {
    this.activeClient = true;
    this.selectedClient = client
    this.loadData();
  }

  /**
   * Cancel select client
   * reLoad data
   * 
   * @memberof DashboardComponent
   */
  annulerSelection() {
    this.activeClient = false;
    this.selectedClient = new Client();
    this.loadData();
  }

  /**
   * Get All Client
   * 
   * @memberof DashboardComponent
   */
  getAllClients() {
    this.clientService.getAllClients();
  }

  /**
   * Get All Devis
   * 
   * @memberof DashboardComponent
   */
  getAllDevis() {
    this.listDevis = []
    this.devisService.getAllDevis()
      .subscribe(
      data => this.listDevis = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
 * Get All Valid Devis
 * 
 * @memberof DashboardComponent
 */
  getAllValidDevis() {
    this.listDevis = [];
    this.devisService.getAllDevis()
      .subscribe(data => {
        for (const d in data) {
          if (data.hasOwnProperty(d)) {
            if (data[ d ].valid) {
              this.listDevis.push(data[ d ]);
            }
          }
        }
      },
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
    this.listDevis = []
    this.devisService.getAllDevisByClient(id)
      .subscribe(
      data => this.listDevis = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
 * Get All Valid Devis by Client
 * 
 * @param {number} id client._id
 * @memberof DashboardComponent
 */
  getValidDevisByClient(id: number) {
    this.listDevis = []
    this.devisService.getAllDevisByClient(id)
      .subscribe(data => {
        for (const d in data) {
          if (data.hasOwnProperty(d)) {
            if (data[ d ].valid) {
              this.listDevis.push(data[ d ]);
            }
          }
        }
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get all facture global
   * 
   * @memberof DashboardComponent
   */
  getAllFactureGlobal() {
    this.listFactureGlobal = [];
    this.factureGlobalService.getAllFactureGlobal()
      .subscribe(
      data => this.listFactureGlobal = data,
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get all valid facture global
   * 
   * @memberof DashboardComponent
   */
  getAllValidFactureGlobal() {
    this.listFactureGlobal = [];
    this.factureGlobalService.getAllFactureGlobal()
      .subscribe(data => {
        for (const f in data) {
          if (data.hasOwnProperty(f)) {
            if (data[ f ].valid) {
              this.listFactureGlobal.push(data[ f ]);
            }
          }
        }
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get all facture global by client
   * si data.length > 0 => get all facture accompte by facture global
   * 
   * @param {number} id client id
   * @memberof DashboardComponent
   */
  getAllFactureGlobalbyClient(id: number) {
    this.listFactureGlobal = [];
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(
      data => {
        this.listFactureGlobal = data;
        if (this.listFactureGlobal.length > 0) {
          this.getAllFactureAccomptebyFactureGlobal(data[ 0 ]._id);
        } else {
          this.listFactureAccompte = [];
        }
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get all valid facture global by client
   * si data.length > 0 => get all valid facture accompte by facture global
   * 
   * @param {number} id client id
   * @memberof DashboardComponent
   */
  getAllValidFactureGlobalbyClient(id: number) {
    this.listFactureGlobal = [];
    this.factureGlobalService.getAllFactureGlobalByClient(id)
      .subscribe(data => {
        for (const f in data) {
          if (data.hasOwnProperty(f)) {
            if (data[ f ].valid) {
              this.listFactureGlobal.push(data[ f ]);
            }
          }
        }
        if (this.listFactureGlobal.length > 0) {
          this.getAllValidFactureAccomptebyFactureGlobal(this.listFactureGlobal[ 0 ]._id);
        } else {
          this.listFactureAccompte = [];
        }
      },
      err => console.log('Erreur :' + err)
      );
  }

  /**
   * Get all facture accompte
   * 
   * @memberof DashboardComponent
   */
  getAllFactureAccompte() {
    this.listFactureAccompte = [];
    this.factureAccompteService.getAllFactureAccompte()
      .subscribe(
      data => this.listFactureAccompte = data,
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * Get all valid facture accompte
   * 
   * @memberof DashboardComponent
   */
  getAllValidFactureAccompte() {
    this.listFactureAccompte = [];
    this.factureAccompteService.getAllFactureAccompte()
      .subscribe(data => {
        for (const f in data) {
          if (data.hasOwnProperty(f)) {
            if (data[ f ].valid) {
              this.listFactureAccompte.push(data[ f ]);
            }
          }
        }
      },
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * Get All facture accompte by facture global
   * 
   * @param {number} id facture global
   * @memberof DashboardComponent
   */
  getAllFactureAccomptebyFactureGlobal(id: number) {
    this.listFactureAccompte = [];
    this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
      .subscribe(
      data => this.listFactureAccompte = data,
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * Get All Valid facture accompte by facture global
   * 
   * @param {number} id facture global id
   * @memberof DashboardComponent
   */
  getAllValidFactureAccomptebyFactureGlobal(id: number) {
    this.listFactureAccompte = [];
    this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
      .subscribe(data => {
        for (const f in data) {
          if (data.hasOwnProperty(f)) {
            if (data[ f ].valid) {
              this.listFactureAccompte.push(data[ f ]);
            }
          }
        }
      },
      err => console.log('Erreur :' + err)
      )
  }

  /**
   * onClick checkbox :
   * - change historique value
   * - loadData ()
   * 
   * @memberof DashboardComponent
   */
  updateCheckedOptions() {
    // Change on select checkbox boolean
    this.historique = !this.historique;
    this.loadData();
  }

  /**
   * Load date en fonction des bool:
   * - activeClient
   * - historique
   * 
   * @memberof DashboardComponent
   */
  loadData() {
    // Load data en fonction des bool activeClient & historique
    if (this.historique) {
      if (this.activeClient) {
        this.getDevisByClient(this.selectedClient._id);
        this.getAllFactureGlobalbyClient(this.selectedClient._id);
      } else {
        this.getAllDevis();
        this.getAllFactureGlobal();
        this.getAllFactureAccompte();
      }
    } else {
      if (this.activeClient) {
        this.getValidDevisByClient(this.selectedClient._id);
        this.getAllValidFactureGlobalbyClient(this.selectedClient._id);
      } else {
        this.getAllValidDevis();
        this.getAllValidFactureGlobal();
        this.getAllValidFactureAccompte();
      }
    }
  }

  /**
   * onInit:
   * - Get All data 
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
