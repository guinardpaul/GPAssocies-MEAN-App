import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderDevisComponent } from './valider-devis.component';

describe('ValiderDevisComponent', () => {
  let component: ValiderDevisComponent;
  let fixture: ComponentFixture<ValiderDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
