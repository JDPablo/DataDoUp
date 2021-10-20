import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ReportsComponent } from './reports/reports.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { InsightsComponent } from './insights/insights.component';
import { RawDataComponent } from './raw-data/raw-data.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
    ReportsComponent,
    ReccomendationsComponent,
    InsightsComponent,
    RawDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
