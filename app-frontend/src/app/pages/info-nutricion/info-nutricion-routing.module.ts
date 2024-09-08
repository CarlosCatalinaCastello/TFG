import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoNutricionPage } from './info-nutricion.page';

const routes: Routes = [
  {
    path: '',
    component: InfoNutricionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoNutricionPageRoutingModule {}
