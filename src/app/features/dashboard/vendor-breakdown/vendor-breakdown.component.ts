import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import { BAR_CHART_OPTIONS } from './bar-chart.config';

@Component({
  selector: 'app-vendor-breakdown',
  templateUrl: './vendor-breakdown.component.html',
  styleUrls: ['./vendor-breakdown.component.scss'],
})
export class VendorBreakdownComponent {
  title = 'Vendor breakdown';
  subtitle = 'Keep track of vendors and their security ratings';

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = BAR_CHART_OPTIONS;
}
