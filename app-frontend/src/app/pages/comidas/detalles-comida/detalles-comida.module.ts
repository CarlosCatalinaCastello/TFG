import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesComidaPageRoutingModule } from './detalles-comida-routing.module';

import { DetallesComidaPage } from './detalles-comida.page';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesComidaPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [DetallesComidaPage]
})
export class DetallesComidaPageModule {}
