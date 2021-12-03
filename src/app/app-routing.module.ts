import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPrincipalComponent } from './inicio/components/inicio-principal/inicio-principal.component';

const routes: Routes = [
  {path: '', component: InicioPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
