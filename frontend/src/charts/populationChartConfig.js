const populationChartConfig = {
          
  series: [{
    name: 'Males',
    data: []
  },
  {
    name: 'Females',
    data: []
  }
  ],
  options: {
    chart: {
      type: 'bar',
      height: 440,
      stacked: true
    },
    colors: ['#008FFB', '#FF4560'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      min: -50,
      max: 50,
      title: {
        text: 'Age',
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val
        }
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%"
        }
      }
    },
    title: {
      text: 'Mauritius population pyramid 2011'
    },
    xaxis: {
      categories: ['64+','25-64','15-24','5-14','0-4',],
      title: {
        text: 'Male to Female Percentage'
      },
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val)) + "%"
        }
      }
    },
  },
};
  
export default populationChartConfig;






  ////////





  
  