import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { DevisComponent } from './components/devis/devis.component';
import { FactureComponent } from './components/facture/facture.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import Services
import { ClientService } from './service/client.service';
import { DevisService } from './service/devis.service';
import { FactureGlobalService } from './service/facture-global.service';
import { FactureMoisService } from './service/facture-mois.service';
import { PassValueService } from './service/pass-value.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DevisComponent,
    FactureComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ClientService,
    DevisService,
    DatePipe,
    FactureMoisService,
    FactureGlobalService,
    PassValueService
  ],
  bootstrap: [AppComponent],
  exports: [ClientComponent]
})
export class AppModule { }
