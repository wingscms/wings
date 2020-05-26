import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../../lib/styled';
import { t } from '../../theme';
import Columns from './Columns';

const Wrap = styled.div`
  background-color: ${t(_ => _.footerBackgroundColor)};
  color: ${t(_ => _.footerTextColor)};
  width: 100%;
  display: block;
  text-align: center;
  padding: ${t(_ => `${_.mediumSpacing} 0 ${_.largeSpacing} 0`)};
  @media screen and (min-width: 800px) {
    padding: ${t(_ => `${_.mediumSpacing} ${_.largeSpacing}`)};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  background-color: inherit;
  color: inherit;
  align-items: flex-start;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Footer = ({ children, columns, title, ...props }) => {
  return (
    <Wrap {...fP(props)}>
      <Container>
        {Array.isArray(columns) && <Columns columns={columns} />}
        {children}
      </Container>
    </Wrap>
  );
};

export default Footer;
