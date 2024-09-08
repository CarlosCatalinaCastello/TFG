import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesComidaPage } from './detalles-comida.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesComidaPageRoutingModule {}
