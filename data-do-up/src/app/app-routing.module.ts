import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { ReportsComponent } from './reports/reports.component';
import { RawDataComponent } from './raw-data/raw-data.component';
import { InsightsComponent } from './insights/insights.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';

const routes: Routes =[{path: '', component: LoginComponent}, {path: 'data', component: DataComponent}, 
  {path: 'data/reports', component: ReportsComponent}, {path: 'data/raw-data', component: RawDataComponent},
  {path: 'data/insights', component: InsightsComponent}, 
  {path: 'data/reccomendations', component: ReccomendationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
