import { Component, OnInit } from '@angular/core';
import {EventSettingsModel, View} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public setView: View = 'Month';
  public setDate: Date = new Date(2024,5,27);
  public event: EventSettingsModel = {
    dataSource:[{
      StartTime: new Date(2024, 0,16,4,0),
      EndTime: new Date(2024, 0,16,6,0)
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
