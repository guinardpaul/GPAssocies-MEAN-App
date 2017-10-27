import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
// Angular Flash messages
import { FlashMessagesModule } from 'ngx-flash-messages';
// ng2-Charts
import { ChartsModule } from 'ng2-charts';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// import Components
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { DevisComponent } from './components/devis/devis.component';
import { FactureGlobalComponent } from './components/facture-global/facture-global.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ValiderDevisComponent } from './components/valider-devis/valider-devis.component';
import { FactureAccompteComponent } from './components/facture-accompte/facture-accompte.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BugsComponent } from './components/bugs/bugs.component';
// import Services
import { ClientService } from './service/client.service';
import { DevisService } from './service/devis.service';
import { FactureGlobalService } from './service/facture-global.service';
import { FactureAccompteService } from './service/facture-accompte.service';
import { DetailsDevisService } from './service/details-devis.service';
import { ReglementService } from './service/reglement.service';
import { BugsService } from './service/bugs.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DevisComponent,
    FactureGlobalComponent,
    DashboardComponent,
    NavbarComponent,
    ValiderDevisComponent,
    PageNotFoundComponent,
    FactureAccompteComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [
    ClientService,
    DevisService,
    FactureAccompteService,
    FactureGlobalService,
    DetailsDevisService,
    ReglementService,
    DatePipe,
    BugsService
  ],
  bootstrap: [ AppComponent ],
  exports: [ ClientComponent ]
})
export class AppModule { }
