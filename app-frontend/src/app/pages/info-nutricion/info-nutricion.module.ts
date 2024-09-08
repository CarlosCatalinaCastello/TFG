import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoNutricionPageRoutingModule } from './info-nutricion-routing.module';

import { InfoNutricionPage } from './info-nutricion.page';
import {ComponentsModule} from "../../components/components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoNutricionPageRoutingModule,
        ComponentsModule,
      MatExpansionModule
    ],
  declarations: [InfoNutricionPage]
})
export class InfoNutricionPageModule {}
