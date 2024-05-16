import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path: 'agregarComida',
        loadChildren: () => import('../comidas/agregar-comida/agregar-comida.module').then(m => m.AgregarComidaPageModule)
      },
      {
        path: 'calculadora',
        loadChildren: () => import('../calculadoras/calculadora-tabs/calculadora.module').then(m => m.CalculadoraPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('../calendario/calendario.module').then( m => m.CalendarioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
