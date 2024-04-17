import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatStepperModule} from "@angular/material/stepper";
import {ComponentsModule} from "./components/components.module";
import {
  ScheduleModule, RecurrenceEditorModule, DayService, WeekService,
  WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, MatStepperModule,
    ComponentsModule, ScheduleModule, RecurrenceEditorModule, ScheduleModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, provideAnimationsAsync(),
    DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,DragAndDropService, ResizeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
