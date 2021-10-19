import { Component } from '@angular/core';
import weeklyData from './data10421.json';
//import {MatTabsModule,} from '@angular/material/tabs';

@Component({
  selector: 'app-data-tabs',
  templateUrl: './data-tabs.component.html',
  styleUrls: ['./data-tabs.component.css']
})
export class DataTabsComponent {
 data = weeklyData.employees;
}
