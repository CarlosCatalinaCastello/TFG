import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalIMCHombrePageRoutingModule } from './cal-imc-hombre-routing.module';

import { CalIMCHombrePage } from './cal-imc-hombre.page';
import {ComponentsModule} from "../../../components/components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalIMCHombrePageRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
      MatExpansionModule

    ],
  declarations: [CalIMCHombrePage]
})
export class CalIMCHombrePageModule {}
