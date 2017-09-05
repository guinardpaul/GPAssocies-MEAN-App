import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ClientComponent } from './client.component';

// Models
import { Client } from '../../models/client';

// Services
import { ClientService } from '../../service/client.service';
import { DevisService } from '../../service/devis.service';
import { FlashMessagesService } from 'ngx-flash-messages';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      providers: [
        ClientService,
        DevisService,
        FlashMessagesService
      ]
    })
      .compileComponents();
  }));

  fixture = TestBed.createComponent(ClientComponent);
  component = fixture.componentInstance;

  // Inject services into component
  let clientService = fixture.debugElement.injector.get(ClientService);
  let devisService = fixture.debugElement.injector.get(DevisService);
  let flahsMessages = fixture.debugElement.injector.get(FlashMessagesService);

  // Setup spy on the `getAllClients` method
  let spy = spyOn(clientService, 'getAllClients')
    .and.returnValue(Promise.resolve(Client));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
