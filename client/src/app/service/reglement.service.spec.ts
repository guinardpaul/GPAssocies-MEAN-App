import { TestBed, inject } from '@angular/core/testing';

import { ReglementService } from './reglement.service';

describe('ReglementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReglementService]
    });
  });

  it('should be created', inject([ReglementService], (service: ReglementService) => {
    expect(service).toBeTruthy();
  }));
});
