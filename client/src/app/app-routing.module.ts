import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from './routing/auth.guard';
import { NotAuthGuard } from './routing/not-auth.guard';
// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { DevisComponent } from './components/devis/devis.component';
import { FactureGlobalComponent } from './components/facture-global/facture-global.component';
import { ValiderDevisComponent } from './components/valider-devis/valider-devis.component';
import { FactureAccompteComponent } from './components/facture-accompte/facture-accompte.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { InitPasswordComponent } from './authentication/components/init-password/init-password.component';

/**
 * routes definition
 */
const routes: Routes = [
  // Auth routes
  { path: 'login', component: LoginComponent, canActivate: [ NotAuthGuard ] },
  { path: 'register', component: RegisterComponent, canActivate: [ AuthGuard ] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [ NotAuthGuard ] },
  { path: 'init-password', component: InitPasswordComponent },
  { path: 'init-password/:_id', component: InitPasswordComponent },
  // uncomment dashboard when implemented
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'client', component: ClientComponent, canActivate: [ AuthGuard ] },
  // { path: 'devis', component: DevisComponent },
  // path Devis by client._id
  { path: 'devis/client/:id_client', component: DevisComponent, canActivate: [ AuthGuard ] },
  // { path: 'facture', component: FactureComponent },
  // path valider Devis into facture global
  { path: 'devis/client/valider-devis/:id_devis', component: ValiderDevisComponent, canActivate: [ AuthGuard ] },
  // path facture d'accompte / facture mois
  { path: 'facture/facture-accompte/:id_fact', component: FactureAccompteComponent, canActivate: [ AuthGuard ] },
  // path bugs
  { path: 'bug', component: BugsComponent, canActivate: [ AuthGuard ] },
  { path: 'pageNotFound', component: PageNotFoundComponent },
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
