import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensagePage } from './mensage.page';

const routes: Routes = [
  {
    path: '',
    component: MensagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensagePageRoutingModule {}
