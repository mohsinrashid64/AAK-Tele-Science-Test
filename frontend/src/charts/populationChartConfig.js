const populationChartConfig = {
    chart: {
        background: '#ff3333',

        height: '1000px', 
        width: '1000px',
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    dataLabels: {
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        // fontWeight: 'bold',
      },
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Pakistan\'s Population Data',
      align: 'middle',
    },
    xaxis: {
      categories: [
        '65+',
        '25-64',
        '15-24',
        '5-14',
        '0-4',
      ],
    },
    legend: {
      show: false,
    },
  };
  
  export default populationChartConfig;
  