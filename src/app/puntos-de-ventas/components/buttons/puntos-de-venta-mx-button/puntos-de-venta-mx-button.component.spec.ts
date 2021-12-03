import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDeVentaMxButtonComponent } from './puntos-de-venta-mx-button.component';

describe('PuntosDeVentaMxButtonComponent', () => {
  let component: PuntosDeVentaMxButtonComponent;
  let fixture: ComponentFixture<PuntosDeVentaMxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDeVentaMxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDeVentaMxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
