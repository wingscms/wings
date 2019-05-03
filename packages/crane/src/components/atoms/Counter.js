/* eslint-disable no-mixed-operators */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCounter = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px` || '12px'};
  border-radius: 7.5px;
  background-color: transparent;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

const StyledCounterInner = styled(StyledCounter)`
  width: ${props => `${props.width || 0}%`};
  height: ${({ height }) => `${height - 2}px` || '12px'};
  margin-top: 0;
  background-color: ${({ barColor }) => barColor};
`;

export default class Counter extends Component {
  static propTypes = {
    /** Counter inner bar color. Any color string value */
    barColor: PropTypes.string,
    /** Counter outer border color. Any color string value */
    borderColor: PropTypes.string,
    /** The current value */
    current: PropTypes.number.isRequired,
    /** The height of the bar (pixels) */
    height: PropTypes.string,
    /** The maximum value */
    max: PropTypes.number,
  };

  static defaultProps = {
    barColor: '#000000',
    borderColor: '#000000',
    height: '250px',
    max: 1000,
  };

  render() {
    const { current, max, height, borderColor, barColor } = this.props;
    const width = current >= max ? 100 : 100 / max * current;
    return (
      <StyledCounter height={height} borderColor={borderColor} {...this.props}>
        <StyledCounterInner height={height} width={width} barColor={barColor} />
      </StyledCounter>
    );
  }
}
