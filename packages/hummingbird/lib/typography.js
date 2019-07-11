// NOTE: DO NOT IMPORT THIS DIRECTLY

import Typography from 'typography';
import { parseJSON } from './utils';

const defaults = {
  baseFontSize: '19px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Poppins', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'Arial', 'sans-serif'],
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['300', '300i', '700', '700i'],
    },
    {
      name: 'Poppins',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
};

const themeOptions = process.env.GATSBY_HUMMINGBIRD_CONFIG;
const legacyConfig = process.env.GATSBY_TYPOGRAPHY_CONFIG;

const optionsOrConfig = parseJSON(themeOptions || legacyConfig, {
  defaultValue: {},
  errorMessage: "Couldn't parse Typography config.",
});

const config = legacyConfig ? optionsOrConfig : optionsOrConfig.typography || {};

const typography = new Typography({
  ...defaults,
  ...config,
});

export const { scale, rhythm, options } = typography;
export default typography;
