import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraAguaPageRoutingModule } from './calculadora-agua-routing.module';

import { CalculadoraAguaPage } from './calculadora-agua.page';
import {ComponentsModule} from "../../../components/components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraAguaPageRoutingModule,
    ComponentsModule,
    MatExpansionModule

  ],
  declarations: [CalculadoraAguaPage]
})
export class CalculadoraAguaPageModule {}
