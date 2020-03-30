import React from 'react';
import Button from './Button';

import { render } from '@testing-library/react';

test('render button with text', () => {
  const testMessage = 'Test Message';
  const { container } = render(<Button>{testMessage}</Button>);

  expect(container.firstChild).toMatchSnapshot();
});
