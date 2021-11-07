import { Component, OnInit } from '@angular/core';
import weeklyData from "../data-tabs/data10421.json";

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})
export class RawDataComponent{
 
 
  index : any;
  
  data = weeklyData.employees;


}
  
  
  

