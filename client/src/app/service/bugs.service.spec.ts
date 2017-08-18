import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Service
import { BugsService } from './bugs.service';
// Model
import { Bug } from '../models/bug';

describe('BugsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BugsService
      ]
    });
  });

  it('should be created', inject([ BugsService ], (service: BugsService) => {
    expect(service).toBeTruthy();
  }));
});
