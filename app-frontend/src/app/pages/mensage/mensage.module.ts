import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensagePageRoutingModule } from './mensage-routing.module';

import { MensagePage } from './mensage.page';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MensagePageRoutingModule,
        MatStepperModule,
        MatButton,
        ReactiveFormsModule
    ],
  declarations: [MensagePage]
})
export class MensagePageModule {}
