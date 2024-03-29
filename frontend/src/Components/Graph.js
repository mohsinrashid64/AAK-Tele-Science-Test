import React, { Component } from 'react';
import Chart from "react-apexcharts";
import populationChartConfig from '../charts/populationChartConfig'

class Graph extends Component {

  constructor(props) {
    super(props);
    const { currentYearData } = props;

    // Calculate initial total_male and total_female values
    const total_male = currentYearData.population_65plus_male + currentYearData.population_25to64_male + currentYearData.population_15to24_male + currentYearData.population_5to14_male + currentYearData.population_0to4_male;
    const total_female = currentYearData.population_65plus_female + currentYearData.population_25to64_female + currentYearData.population_15to24_female + currentYearData.population_5to14_female + currentYearData.population_0to4_female;

    // Calculate initial series data based on initial props data
    const series = [{
        name: 'Males',
        data: [
          (-currentYearData.population_65plus_male / total_male) * 100,
          (-currentYearData.population_25to64_male / total_male) * 100,
          (-currentYearData.population_15to24_male / total_male) * 100,
          (-currentYearData.population_5to14_male / total_male) * 100,
          (-currentYearData.population_0to4_male / total_male) * 100,
        ]
      },
      {
        name: 'Females',
        data: [
          (currentYearData.population_65plus_female / total_female) * 100,
          (currentYearData.population_25to64_female / total_female) * 100,
          (currentYearData.population_15to24_female / total_female) * 100,
          (currentYearData.population_5to14_female / total_female) * 100,
          (currentYearData.population_0to4_female / total_female) * 100,
        ]
      }];

    this.state = {
      series: series,
      options: populationChartConfig
    }
  }
  
  componentDidUpdate(prevProps) {
  const { currentYearData } = this.props;

  const total_male = currentYearData.population_65plus_male+currentYearData.population_25to64_male+currentYearData.population_15to24_male+currentYearData.population_5to14_male+currentYearData.population_0to4_male
  const total_female = currentYearData.population_65plus_female+currentYearData.population_25to64_female+currentYearData.population_15to24_female+currentYearData.population_5to14_female+currentYearData.population_0to4_female
  
    if (prevProps.currentYearData !== this.props.currentYearData) {
      const series = [{
        name: 'Males',
        data: [
          (-currentYearData.population_65plus_male/total_male)*100,
          (-currentYearData.population_25to64_male/total_male)*100,
          (-currentYearData.population_15to24_male/total_male)*100,
          (-currentYearData.population_5to14_male/total_male)*100,
          (-currentYearData.population_0to4_male/total_male)*100,
        ]
      },
      {
        name: 'Females',
        data: [
          (currentYearData.population_65plus_female/total_female)*100,
          (currentYearData.population_25to64_female/total_female)*100,
          (currentYearData.population_15to24_female/total_female)*100,
          (currentYearData.population_5to14_female/total_female)*100,
          (currentYearData.population_0to4_female/total_female)*100,
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

