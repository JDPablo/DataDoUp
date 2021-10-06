import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public login_box: any;
  public login123: any;
  public id: any;
  public id1= 123456;
  public id2= 666666;
  public id3= 111111;



  ngOnInit(): void {
  }



}
