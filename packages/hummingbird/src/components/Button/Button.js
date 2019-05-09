import { Button } from '@wingscms/crane';
import styled from 'styled-components';

export default styled(Button)`
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
`;
