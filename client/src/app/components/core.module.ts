import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { DatePipe } from '@angular/common';
// ng2-Charts
import { ChartsModule } from 'ng2-charts';
// Components
import { ClientComponent } from './client/client.component';
import { DevisComponent } from './devis/devis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FactureAccompteComponent } from './facture-accompte/facture-accompte.component';
import { FactureGlobalComponent } from './facture-global/facture-global.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ValiderDevisComponent } from './valider-devis/valider-devis.component';
import { BugsComponent } from './bugs/bugs.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    ClientComponent,
    DevisComponent,
    DashboardComponent,
    FactureAccompteComponent,
    FactureGlobalComponent,
    PageNotFoundComponent,
    ValiderDevisComponent,
    BugsComponent,
    NavbarComponent
  ],
  exports: [
    ClientComponent,
    DevisComponent,
    DashboardComponent,
    FactureAccompteComponent,
    FactureGlobalComponent,
    PageNotFoundComponent,
    ValiderDevisComponent,
    BugsComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
