import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAlimentosPageRoutingModule } from './lista-alimentos-routing.module';

import { ListaAlimentosPage } from './lista-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlimentosPageRoutingModule
  ],
  declarations: [ListaAlimentosPage]
})
export class ListaAlimentosPageModule {}
