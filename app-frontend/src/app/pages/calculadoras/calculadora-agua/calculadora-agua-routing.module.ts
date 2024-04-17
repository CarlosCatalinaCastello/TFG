import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraAguaPage } from './calculadora-agua.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraAguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraAguaPageRoutingModule {}
