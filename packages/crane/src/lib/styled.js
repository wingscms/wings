import { useContext } from 'react';

export { default } from 'styled-components';

export const { css, withTheme, ThemeContext } = require('styled-components');

export const useTheme = () => useContext(ThemeContext);
