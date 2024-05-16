import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAlimentosPageRoutingModule } from './lista-alimentos-routing.module';

import { ListaAlimentosPage } from './lista-alimentos.page';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlimentosPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [ListaAlimentosPage]
})
export class ListaAlimentosPageModule {}
