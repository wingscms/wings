import React from 'react';
import styled from 'styled-components';
import loadingGif from '../img/loading.gif';

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
`;

export default props => <Image {...props} src={loadingGif} />;
