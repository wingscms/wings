import { BREAKPOINT_TYPE, BREAKPOINT_SIZE } from '../lib/constants';

export default {
  // colors
  primaryColor: '#417DE8',
  secondaryColor: '#274B8B',
  successColor: '#0F9960',
  warningColor: '#F29D49',
  dangerColor: '#DB3737',
  noneColor: '#EEEEEE',
  disabledColor: '#DDDDDD',
  backgroundColor: '#FFFFFF',
  elementBackgroundColor: '#FFF',
  textColor: '#212121',
  textColorDark: '#FFFFFF',
  iconColor: '#212121',
  iconColorDark: '#FFFFFF',
  navigationLanguagePickerColor: '#FFFFFF',
  // spacing
  mediumSpacing: '40px',
  // typography
  baseFontSize: '18px',
  baseTabletFontSize: '16px',
  baseMobileFontSize: '14px',
  textLineHeight: '1.5',
  textLetterSpacing: '0',
  textFontFamily: '"Source Sans Pro", sans-serif',
  headerFontFamily: '"Poppins", sans-serif',
  headingScaleRatio: 1.25,
  uppercaseTitles: false,
  // misc
  mobileBreakpoint: BREAKPOINT_SIZE[BREAKPOINT_TYPE.MOBILE],
  tabletBreakpoint: BREAKPOINT_SIZE[BREAKPOINT_TYPE.TABLET],
  contrastLuminanceThreshold: 60,
  linkStyle: 'lineGrow',
  shadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)',
};
