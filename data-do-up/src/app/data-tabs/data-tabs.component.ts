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

    this.data;
   }

  ngOnInit(): void {

 var table = '<table>';
 var i: number = 0;
 while ( i < this.data.length){
   table += '<tr>';
   for(var x = 0; x < this.data.keys.length; x++) {
     table += '<td>' + this.data.keys() + '</td>' + '<td>' + this.data.values() + '</td>';
   }
   table += '</tr>';
   i++;
 }
 table += '</table>';
 var newTable = document.getElementById('showData');
 newTable = table;
 }
}
