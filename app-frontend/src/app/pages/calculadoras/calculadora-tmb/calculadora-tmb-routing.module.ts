import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraTMBPage } from './calculadora-tmb.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraTMBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraTMBPageRoutingModule {}
