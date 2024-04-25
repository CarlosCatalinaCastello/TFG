import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarComidaPageRoutingModule } from './agregar-comida-routing.module';

import { AgregarComidaPage } from './agregar-comida.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgregarComidaPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AgregarComidaPage]
})
export class AgregarComidaPageModule {}
