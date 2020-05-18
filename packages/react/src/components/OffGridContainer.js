import React from 'react';
import fP from 'filter-invalid-dom-props';
import { wide } from '@wingscms/components';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const ContainerOuter = styled.div`
  ${wide}
  margin-top: ${t(_ => _.mediumSpacing)};
  margin-bottom: ${t(_ => _.mediumSpacing)};
  padding: ${t(_ => `0 ${_.mediumSpacing}`)};
 ${t(_ =>
   _.mobileQuery(
     css`
       margin-top: ${t(_ => _.smallSpacing)};
       margin-bottom: ${t(_ => _.smallSpacing)};
       padding: ${t(_ => `0 ${_.smallSpacing}`)};
     `,
   ),
 )}
`;

const ContainerInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

export default ({ children, ...props }) => (
  <ContainerOuter {...fP(props)}>
    <ContainerInner>{children}</ContainerInner>
  </ContainerOuter>
);
