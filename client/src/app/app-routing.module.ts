import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { DevisComponent } from './components/devis/devis.component';
import { FactureGlobalComponent } from './components/facture-global/facture-global.component';
import { ValiderDevisComponent } from './components/valider-devis/valider-devis.component';
import { FactureAccompteComponent } from './components/facture-accompte/facture-accompte.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

/**
 * routes definition
 */
const routes: Routes = [
  // uncomment dashboard when implemented
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'devis', component: DevisComponent },
  // path Devis by client._id
  { path: 'devis/client/:id_client', component: DevisComponent },
  // { path: 'facture', component: FactureComponent },
  // path valider Devis into facture global
  { path: 'devis/client/valider-devis/:id_devis', component: ValiderDevisComponent },
  // path facture d'accompte / facture mois
  { path: 'facture/facture-accompte/:id_fact', component: FactureAccompteComponent },
  // path bugs
  { path: 'bug', component: BugsComponent },
  // default path redirect to 'client'
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  // Undefined page path
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
