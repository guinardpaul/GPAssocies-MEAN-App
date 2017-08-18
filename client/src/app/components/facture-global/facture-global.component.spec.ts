import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureGlobalComponent } from './facture-global.component';

describe('FactureGlobalComponent', () => {
  let component: FactureGlobalComponent;
  let fixture: ComponentFixture<FactureGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
