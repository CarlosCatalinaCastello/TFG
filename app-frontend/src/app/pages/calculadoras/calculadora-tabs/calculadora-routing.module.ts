import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraPage } from './calculadora.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraPage,
    children: [
      {
        path: '',
        redirectTo: 'calculadoraIMC',
        pathMatch: "full"
      },
      {
        path: 'calculadoraIMC',
        loadChildren: () => import('../cal-imc-hombre/cal-imc-hombre.module').then(m => m.CalIMCHombrePageModule)
      },
      {
        path: 'calculadoraTMB',
        loadChildren: () => import('../calculadora-tmb/calculadora-tmb.module').then( m => m.CalculadoraTMBPageModule)
      },
      {
        path: 'calculadoraAgua',
        loadChildren: () => import('../calculadora-agua/calculadora-agua.module').then(m => m.CalculadoraAguaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraPageRoutingModule {}
