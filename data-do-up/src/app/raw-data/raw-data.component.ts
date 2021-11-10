import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import weeklyData from "../data-tabs/data10421.json";
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})
export class RawDataComponent{
 
  
  index : any;
  
  data = weeklyData.employees;
  checked: boolean = false;

  f = new FormBuilder();
  d = new DataComponent(this.f);

  weekone = this.d.weekone;
  weektwo = this.d.weektwo;

}
  
  
  

