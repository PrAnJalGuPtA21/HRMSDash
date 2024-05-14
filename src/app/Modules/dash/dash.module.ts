import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReportComponent } from './report/report.component';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    LeftsideComponent,
    SidebarComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatIconModule,
    FullCalendarModule,
    DatePipe
  ],
  providers:[
    DatePipe
  ]
})
export class DashModule { }
