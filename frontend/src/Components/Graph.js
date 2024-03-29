import React, { Component } from 'react';
import Chart from "react-apexcharts";
import populationChartConfig from '../charts/populationChartConfig'

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options:populationChartConfig
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentYearData !== this.props.currentYearData) {
      const series = [
        {
          name: "Funnel Series",
          data: [
            { x: "65+", y: this.props.currentYearData.population_65plus },
            { x: "25-64", y: this.props.currentYearData.population_25to64 },
            { x: "15-24", y: this.props.currentYearData.population_15to24 },
            { x: "5-14", y: this.props.currentYearData.population_5to14 },
            { x: "0-4", y: this.props.currentYearData.population_0to4 },
          ],
        },
      ];
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
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;

