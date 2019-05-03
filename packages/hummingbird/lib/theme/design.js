// set defaults here:
export default ({
  // colors
  primaryColor = '#4856C9', // String (color code)
  secondaryColor = '#000000', // String (color code),
  textColor = '#212121', // String (color code)
  linkColor, // String (color code)
  darkLinkColor, // String (color code)

  // fonts
  customHeaderFontUrl = null, // String
  customBodyFontUrl = null, // String

  // images
  logoUrl = 'https://files.wings-platform.com/1532472414726/wings4-2.png', // String
  faviconUrl = 'https://files.wings-platform.com/1532472414726/wings4-2.png', // String

  // menus
  navigationColor = '#ffffff', // String (color code)
  languagePickerColor = '#ffffff', // String (color code)
  languagePickerHoverColor,

  // footer
  footerTitle = null, // String
  footerBackgroundColor, // String (color code)
  footerLogoUrl = null, // String
  footerAddress = null, // Array[String]
  footerEmail = null, // String (email)
  footerPhone = null, // String
  footerLinkColor, // String (color code)

  // landing
  landingSectionSubTitleColor,
  landingSectionSubTitleBackground = null,
  landingSectionTitleBackground = null,

  // To be removed or replaced at some point.
  appBackgroundColor = '#F8F8F8',
  darkAppBackgroundColor = '#000000',
  headingColor = '#000000',
  darkHeadingColor = '#ffffff',
  darkTextColor = '#f5f8fa',

  iconColor = '#4856C9',
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
  // use waterfall mapping here:
  primaryColor,
  secondaryColor,
  textColor,
  linkColor: linkColor || primaryColor,
  darkLinkColor: darkLinkColor || primaryColor,

  customHeaderFontUrl,
  customBodyFontUrl,

  logoUrl,
  faviconUrl,

  navigationColor,
  languagePickerColor,
  languagePickerHoverColor: languagePickerHoverColor || primaryColor,

  footerTitle,
  footerBackgroundColor: footerBackgroundColor || primaryColor,
  footerLogoUrl,
  footerAddress,
  footerEmail,
  footerPhone,
  footerLinkColor: footerLinkColor || secondaryColor,

  landingSectionSubTitleColor: landingSectionSubTitleColor || primaryColor,
  landingSectionSubTitleBackground,
  landingSectionTitleBackground,

  appBackgroundColor,
  darkAppBackgroundColor,
  headingColor,
  darkHeadingColor,
  darkTextColor,

  iconColor,
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
