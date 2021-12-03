import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDeVentaEuaButtonComponent } from './puntos-de-venta-eua-button.component';

describe('PuntosDeVentaEuaButtonComponent', () => {
  let component: PuntosDeVentaEuaButtonComponent;
  let fixture: ComponentFixture<PuntosDeVentaEuaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDeVentaEuaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDeVentaEuaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
