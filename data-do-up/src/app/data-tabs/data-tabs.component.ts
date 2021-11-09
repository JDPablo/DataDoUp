import { Component, OnInit } from '@angular/core';
import weeklyData from "./data10421.json";
import { one } from './insightdata';
import { two } from './insightdata';
import { three } from './insightdata';
import { four } from './insightdata';

@Component({
  selector: 'app-data-tabs',
  templateUrl: './data-tabs.component.html',
  styleUrls: ['./data-tabs.component.css']
})
export class DataTabsComponent implements OnInit {
  data = weeklyData.employees;
  one: any[] = [];
  two: any[] = [];
  three: any[] = [];
  four: any[] = [];
  view: any = [700, 150];
  xAxis: boolean = true;
  yAxis: boolean = true;
  showDataLabel: boolean = true;
  showGridLines: boolean = false;
  
  
  constructor() {
    Object.assign(this, { one }),
    Object.assign(this, { two }),
    Object.assign(this, { three }),
    Object.assign(this, { four })
  }

  ngOnInit(): void{
    
  }


}