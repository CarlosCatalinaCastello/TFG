import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalIMCHombrePage } from './cal-imc-hombre.page';

const routes: Routes = [
  {
    path: '',
    component: CalIMCHombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalIMCHombrePageRoutingModule {}
