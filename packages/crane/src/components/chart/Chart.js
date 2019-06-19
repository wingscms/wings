import React, { Component } from 'react';
import ChartJS from 'chart.js';
import randomString from '../../lib/utils/randomString';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartId: `chart-${randomString()}`,
    };
  }

  componentDidMount() {
    const chart = new ChartJS(
      document.getElementById(this.state.chartId).getContext('2d'),
      this.props.chartData,
    );
    return chart;
  }

  render() {
    const { chartId } = this.state;
    return (
      <div>
        <canvas id={chartId} width={400} height={250} />
      </div>
    );
  }
}
