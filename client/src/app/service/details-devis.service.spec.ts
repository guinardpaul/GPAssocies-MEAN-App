import { TestBed, inject } from '@angular/core/testing';

import { DetailsDevisService } from './details-devis.service';

describe('BugsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DetailsDevisService ]
    });
  });

  it('should be created', inject([ DetailsDevisService ], (service: DetailsDevisService) => {
    expect(service).toBeTruthy();
  }));
});
