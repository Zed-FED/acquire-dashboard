import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { RadialChartComponent } from './components/radial-chart/radial-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';


@NgModule({
  declarations: [DashboardComponent, BarChartComponent, RadialChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ComponentsModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
