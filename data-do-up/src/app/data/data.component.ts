import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  weekNum: FormGroup ;
  weekone: boolean;
  weektwo: boolean;

  constructor(private fb: FormBuilder) {
    
    this.weekNum = this.fb.group({
      weekone: new FormControl,
      weektwo: new FormControl
    });
    this.weekone = false;
    this.weektwo = false;
  }
  
  ngOnInit(): void {
  }
}
