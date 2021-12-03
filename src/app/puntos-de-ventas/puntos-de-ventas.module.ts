import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosDeVentasPrincipalComponent } from './components/puntos-de-ventas-principal/puntos-de-ventas-principal.component';
import { PuntosDeVentaMxButtonComponent } from './components/buttons/puntos-de-venta-mx-button/puntos-de-venta-mx-button.component';
import { PuntosDeVentaEuaButtonComponent } from './components/buttons/puntos-de-venta-eua-button/puntos-de-venta-eua-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PuntosDeVentasPrincipalComponent, PuntosDeVentaMxButtonComponent, PuntosDeVentaEuaButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[PuntosDeVentasPrincipalComponent, PuntosDeVentaMxButtonComponent, PuntosDeVentaEuaButtonComponent]
})
export class PuntosDeVentasModule { }
