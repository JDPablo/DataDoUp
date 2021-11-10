import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  weekNum: FormGroup;
  constructor(fb: FormBuilder) {
    this.weekNum = fb.group({
      weekone: false,
      weektwo: false,
    })
  }
  checked = false;
  ngOnInit(): void {
  }
}
