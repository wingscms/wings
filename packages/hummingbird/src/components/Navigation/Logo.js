import React from 'react';
import styled, { withTheme } from 'styled-components';

const Logo = styled.img`
  position: relative;
  float: left;
  height: 100%;
  margin: 0px;
  padding: 10px;
  margin-top: 0px;
  @media screen and (max-width: 600px) {
    padding: 10px;
    width: auto;
    height: 100%;
    margin: auto;
    max-width: 180px;
  }
`;

export default withTheme(({ theme, ...props }) => <Logo src={theme.logoImageUrl} {...props} />);
