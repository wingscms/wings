import React from 'react';
import { Button } from '@wingscms/crane';
import styled from 'styled-components';

const _Button = ({ intent = 'secondary', ...props }) => <Button intent={intent} {...props} />;

export default styled(_Button)`
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: bold;
  border-radius: 4px;
`;
