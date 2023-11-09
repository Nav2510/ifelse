import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard.component';
import { VendorBreakdownComponent } from './vendor-breakdown/vendor-breakdown.component';
import { VendorMonitoringComponent } from './vendor-monitoring/vendor-monitoring.component';
import { HeaderComponent } from './header/header.component';
import { DataGridModule } from '../../shared/components/data-grid/data-grid.module';

@NgModule({
  declarations: [
    DashboardComponent,
    VendorBreakdownComponent,
    VendorMonitoringComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, DataGridModule, HighchartsChartModule],
})
export class DashboardModule {}
