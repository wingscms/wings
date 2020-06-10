import React from 'react';
import { Text, t } from '@wingscms/components';
import styled from '../styled';

const StyledLabel = styled.label`
  ${t(Text.getStyles)};
`;

export default function Label({ htmlFor, label, required, ...props }) {
  return (
    <StyledLabel htmlFor={htmlFor} {...props} noSpacing>
      {label}
      {required ? '*' : ''}
    </StyledLabel>
  );
}
