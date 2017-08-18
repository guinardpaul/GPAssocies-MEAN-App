import { TestBed, inject } from '@angular/core/testing';

import { DevisService } from './devis.service';

describe('DevisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevisService]
    });
  });

  it('should be created', inject([DevisService], (service: DevisService) => {
    expect(service).toBeTruthy();
  }));
});
