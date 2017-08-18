import { TestBed, inject } from '@angular/core/testing';

import { FactureAccompteService } from './facture-accompte.service';

describe('FactureAccompteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactureAccompteService]
    });
  });

  it('should be created', inject([FactureAccompteService], (service: FactureAccompteService) => {
    expect(service).toBeTruthy();
  }));
});
