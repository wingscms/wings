import React from 'react';
import fP from 'filter-invalid-dom-props';
import { _WIDE } from '@wingscms/components';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const ContainerOuter = styled.div`
  ${_WIDE}
  margin: ${t(_ => _.mediumSpacing)} initial;
 ${t(_ =>
   _.mobileQuery(
     css`
       margin: ${t(_ => _.smallSpacing)} initial;
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
