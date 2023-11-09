import * as Highcharts from 'highcharts';

export const ROUND_CHART_OPTIONS: Highcharts.Options = {
  chart: {
    type: 'pie',
    plotBackgroundColor: '#ffffff',
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: '240',
    align: 'center',
    verticalAlign: 'middle',
    style: {
      fontSize: '30px',
      fontWeight: '500',
    },
    y: 80,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%',
      colors: [
        '#6343bf', // Violet
        '#eaecf0', // Gray
      ],
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Percentage',
      innerSize: '50%',
      data: [
        ['Used', 80],
        ['Not Used', 20],
      ],
    },
  ],
};
