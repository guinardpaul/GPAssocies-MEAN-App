import { TestBed, inject } from '@angular/core/testing';

import { FactureGlobalService } from './facture-global.service';

describe('FactureGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactureGlobalService]
    });
  });

  it('should be created', inject([FactureGlobalService], (service: FactureGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
