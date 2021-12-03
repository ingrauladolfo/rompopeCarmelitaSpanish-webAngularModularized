import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { PresentacionSlideComponent } from './components/presentacion-slide/presentacion-slide.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule, WavesModule, CarouselModule, CardsModule, ButtonsModule } from 'angular-bootstrap-md';
import { PuntosDeVentasModule } from '../puntos-de-ventas/puntos-de-ventas.module';



@NgModule({
  declarations: [InicioPrincipalComponent, PresentacionSlideComponent],
  imports: [
    CommonModule,
    RouterModule,
    PuntosDeVentasModule,
    WavesModule, CarouselModule, CardsModule, ButtonsModule
  ], exports: [InicioPrincipalComponent, PresentacionSlideComponent],
})
export class InicioModule { }
