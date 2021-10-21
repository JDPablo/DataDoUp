import { Component, OnInit } from '@angular/core';
//import {MatTabsModule,} from '@angular/material/tabs';
import weeklyData from "./data10421.json";

@Component({
  selector: 'app-data-tabs',
  templateUrl: './data-tabs.component.html',
  styleUrls: ['./data-tabs.component.css']
})
export class DataTabsComponent implements OnInit{
data = weeklyData.employees;
  constructor() {

   }

  ngOnInit(): void {
    
}


}