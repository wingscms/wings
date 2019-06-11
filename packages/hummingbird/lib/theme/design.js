import { getContrastColor } from '@wingscms/crane';

// set defaults here:
export default ({
  // COLORS
  // Base
  colorPrimary = '#EF5B58',
  colorSecondary = '#212121',
  colorSuccess = '#0F9960',
  colorWarning = '#F29D49',
  colorDanger = '#DB3737',
  colorDisabled = '#DDDDDD',
  colorBackground = '#FFFFFF',
  colorBackgroundDark = '#212121',
  colorText = '#212121',
  colorTextDark = '#FFFFFF',
  colorLink,
  colorLinkDark,
  // Navigation
  colorNavigationBackground,
  colorNavigationMenuBackground,
  colorNavigationComponents,

  // images
  logoUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',
  logoFooterUrl,
  faviconUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',

  // fonts
  customHeaderFontUrl = null,
  customBodyFontUrl = null,

  // menus
  navigationColor = '#ffffff',
  languagePickerColor = '#ffffff',
  languagePickerHoverColor,

  // footer
  footerTitle = null,
  footerBackgroundColor,
  footerAddress = null,
  footerEmail = null,
  footerPhone = null,
  footercolorLink,

  // landing
  landingSectionSubTitleColor,
  landingSectionSubTitleBackground = null,
  landingSectionTitleBackground = null,

  // To be removed or replaced at some point.
  appBackgroundColor = '#F8F8F8',
  darkAppBackgroundColor = '#000000',
  headingColor = '#000000',
  darkHeadingColor = '#ffffff',
  darkcolorText = '#f5f8fa',

  iconColor,
  iconColorHover = '#182026',
  dividerBlack = 'rgba(16, 22, 26, 0.15)',

  fontSizeFirstLetter = '3.5em',
  fontSizeIntro = '1.333',

  fontWeightBody = '400',
  fontWeightIntro = '300',
  fontWeightFirstLetter = '700',
  fontWeightPullquote = '700',
  fontWeightBlockquote = '300',

  lineHeightIntro = '1.5',
  lineHeightFirstLetter = '0.8',
}) => ({
  // COLORS
  // Base
  colorPrimary,
  colorSecondary,
  colorSuccess,
  colorWarning,
  colorDanger,
  colorDisabled,
  colorBackground,
  colorBackgroundDark,
  colorText,
  colorTextDark,
  colorLink: colorLink || colorPrimary,
  colorLinkDark: colorLinkDark || colorLink,
  // Navigation
  colorNavigationBackground: colorNavigationBackground || colorPrimary,
  colorNavigationMenuBackground: colorBackground || colorNavigationMenuBackground,
  colorNavigationComponents:
    colorNavigationComponents ||
    getContrastColor({
      backgroundColor: colorNavigationBackground || colorPrimary,
      theme: { colorText, colorTextDark },
      threshold: 30,
    }),

  //
  customHeaderFontUrl,
  customBodyFontUrl,

  logoUrl,
  logoFooterUrl,
  faviconUrl,

  navigationColor,
  languagePickerColor,
  languagePickerHoverColor: languagePickerHoverColor || colorPrimary,

  footerTitle,
  footerBackgroundColor: footerBackgroundColor || colorPrimary,
  footerAddress,
  footerEmail,
  footerPhone,
  footercolorLink: footercolorLink || colorSecondary,

  landingSectionSubTitleColor: landingSectionSubTitleColor || colorPrimary,
  landingSectionSubTitleBackground,
  landingSectionTitleBackground,

  appBackgroundColor,
  darkAppBackgroundColor,
  headingColor,
  darkHeadingColor,
  darkcolorText,

  iconColor: iconColor || colorPrimary,
  iconColorHover,
  dividerBlack,

  fontSizeFirstLetter,
  fontSizeIntro,

  fontWeightBody,
  fontWeightIntro,
  fontWeightFirstLetter,
  fontWeightPullquote,
  fontWeightBlockquote,

  lineHeightIntro,
  lineHeightFirstLetter,
});
