import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

import { ROUND_CHART_OPTIONS } from './round-chart.config';

@Component({
  selector: 'app-vendor-monitoring',
  templateUrl: './vendor-monitoring.component.html',
  styleUrls: ['./vendor-monitoring.component.scss'],
})
export class VendorMonitoringComponent {
  title = 'Vendors monitored';
  monitor = {
    percent: 80,
    value: 240,
    profit: 10,
  };

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = ROUND_CHART_OPTIONS;
}
