import { Component, OnInit } from '@angular/core';
import weeklyData from "./data10421.json";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 data = weeklyData.employees;

}
