/* global window */
/* eslint-disable no-param-reassign */
import React from 'react';
import styled from 'styled-components';
import { Chart } from '@wingscms/crane';

import wide from '../../styles/wide';

const ChartWrapper = styled.div`
  ${wide};
  > * {
    display: block;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
  }
`;

export default (props) => {
  // eslint-disable-next-line
  if (typeof window !== 'undefined') {
    props.chartData.options.legend.display = window.innerWidth > 900;
  }
  props.chartData.options.onResize = (chart, size) => {
    chart.options.legend.display = size.width > 900;
  };
  return typeof window !== 'undefined' ? (
    <ChartWrapper>
      <Chart chartData={props.chartData} />
    </ChartWrapper>
  ) : (
    <div />
  );
};
