import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { DataTabsComponent } from './data-tabs/data-tabs.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes =[{path: '', component: LoginComponent}, 
{path: 'data', component: DataComponent},
{path: 'datatabs', component: DataTabsComponent},
{path: 'data/reports', component: ReportsComponent},
{path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
