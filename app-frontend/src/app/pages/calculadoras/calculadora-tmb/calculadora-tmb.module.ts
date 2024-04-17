import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraTMBPageRoutingModule } from './calculadora-tmb-routing.module';

import { CalculadoraTMBPage } from './calculadora-tmb.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalculadoraTMBPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CalculadoraTMBPage]
})
export class CalculadoraTMBPageModule {}
