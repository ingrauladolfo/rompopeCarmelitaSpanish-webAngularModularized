import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDeVentasPrincipalComponent } from './puntos-de-ventas-principal.component';

describe('PuntosDeVentasPrincipalComponent', () => {
  let component: PuntosDeVentasPrincipalComponent;
  let fixture: ComponentFixture<PuntosDeVentasPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDeVentasPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDeVentasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
