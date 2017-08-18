import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureAccompteComponent } from './facture-accompte.component';

describe('FactureAccompteComponent', () => {
  let component: FactureAccompteComponent;
  let fixture: ComponentFixture<FactureAccompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureAccompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureAccompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
