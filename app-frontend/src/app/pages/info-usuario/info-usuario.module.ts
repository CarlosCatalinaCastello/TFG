import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUsuarioPageRoutingModule } from './info-usuario-routing.module';

import { InfoUsuarioPage } from './info-usuario.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoUsuarioPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [InfoUsuarioPage]
})
export class InfoUsuarioPageModule {}
