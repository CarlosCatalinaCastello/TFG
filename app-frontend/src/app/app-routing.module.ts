import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {userGuard} from "./guards/user.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-register/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login-register/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/login-register/inicio/inicio.module').then(m => m.InicioPageModule),
  },
  {
    path: 'mensage',
    loadChildren: () => import('./pages/mensage/mensage.module').then( m => m.MensagePageModule),
    canMatch: [userGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canMatch: [userGuard]
  },
  {
    path: 'agregar-comida',
    loadChildren: () => import('./pages/comidas/agregar-comida/agregar-comida.module').then(m => m.AgregarComidaPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'info-usuario',
    loadChildren: () => import('./pages/info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'calculadora-tabs',
    loadChildren: () => import('./pages/calculadoras/calculadora-tabs/calculadora.module').then(m => m.CalculadoraPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'cal-imc-hombre',
    loadChildren: () => import('./pages/calculadoras/cal-imc-hombre/cal-imc-hombre.module').then(m => m.CalIMCHombrePageModule),
    canMatch: [userGuard]
  },
  {
    path: 'calculadora-tmb',
    loadChildren: () => import('./pages/calculadoras/calculadora-tmb/calculadora-tmb.module').then( m => m.CalculadoraTMBPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'calculadora-agua',
    loadChildren: () => import('./pages/calculadoras/calculadora-agua/calculadora-agua.module').then(m => m.CalculadoraAguaPageModule),
    canMatch: [userGuard]
  },
  {
    path: 'lista-alimentos',
    loadChildren: () => import('./pages/comidas/lista-alimentos/lista-alimentos.module').then( m => m.ListaAlimentosPageModule),
    canMatch: [userGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
