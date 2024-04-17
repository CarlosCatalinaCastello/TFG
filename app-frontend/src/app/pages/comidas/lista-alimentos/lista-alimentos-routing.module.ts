import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAlimentosPage } from './lista-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAlimentosPageRoutingModule {}
