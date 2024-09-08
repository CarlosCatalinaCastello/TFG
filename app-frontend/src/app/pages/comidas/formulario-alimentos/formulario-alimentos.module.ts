import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioAlimentosPageRoutingModule } from './formulario-alimentos-routing.module';

import { FormularioAlimentosPage } from './formulario-alimentos.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormularioAlimentosPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [FormularioAlimentosPage]
})
export class FormularioAlimentosPageModule {}
