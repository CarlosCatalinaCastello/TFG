import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioAlimentosPage } from './formulario-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioAlimentosPageRoutingModule {}
