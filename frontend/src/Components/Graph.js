import React, { Component } from 'react';
import Chart from "react-apexcharts";
import populationChartConfig from '../charts/populationChartConfig'

class Graph extends Component {

  constructor(props) {
    super(props);
    this.state = populationChartConfig
  }

  
  componentDidUpdate(prevProps) {
  const { currentYearData } = this.props;

  const total = currentYearData.population_65plus+currentYearData.population_25to64+currentYearData.population_15to24+currentYearData.population_5to14+currentYearData.population_0to4
    
    if (prevProps.currentYearData !== this.props.currentYearData) {
      const series = [{
        name: 'Males',
        data: [
          (-currentYearData.population_65plus/total)*100,
          (-currentYearData.population_25to64/total)*100,
          (-currentYearData.population_15to24/total)*100,
          (-currentYearData.population_5to14/total)*100,
          (-currentYearData.population_0to4/total)*100,
        ]
      },
      {
        name: 'Females',
        data: [
          (currentYearData.population_65plus/total)*100,
          (currentYearData.population_25to64/total)*100,
          (currentYearData.population_15to24/total)*100,
          (currentYearData.population_5to14/total)*100,
          (currentYearData.population_0to4/total)*100,
        ]
      }]
      this.setState({ series });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;

