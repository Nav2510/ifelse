export const BAR_CHART_OPTIONS: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Security rating',
    },
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: 'Minor',
      type: 'column',
      data: [30, 25, 10, 15, 30, 25, 10, 25, 11, 25, 30, 15],
      color: '#eaecf0',
      className: 'bar-minor',
    },
    {
      name: 'Major',
      type: 'column',
      data: [32, 18, 24, 20, 16, 22, 18, 14, 10, 16, 22, 58],
      color: '#9879e6',
      className: 'bar-major',
    },
    {
      name: 'Critical',
      type: 'column',
      data: [14, 21, 28, 35, 22, 29, 36, 13, 10, 27, 34, 11],
      color: '#6343bf',
      className: 'bar-critical',
    },
  ],
};
