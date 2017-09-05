import { TestBed, inject } from '@angular/core/testing';

// Service
import { ClientService } from './client.service';
// Model
import { Client } from '../models/client';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ClientService ]
    });
  });

  it('should be created', inject([ ClientService ], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all client', )
});
