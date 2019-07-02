import { getContrastColor } from '@wingscms/crane';

// set defaults here:
export default ({
  // MISC OPTIONS
  contrastLuminanceThreshold = 50,

  // COLORS
  // Base
  primaryColor = '#417de8',
  secondaryColor = '#274b8b',
  successColor = '#0F9960',
  warningColor = '#F29D49',
  dangerColor = '#DB3737',
  disabledColor = '#DDDDDD',
  backgroundColor = '#FFFFFF',
  backgroundHighlightColor = '#ECF2FC',
  backgroundColorDark = '#212121',
  textColor = '#212121',
  textColorDark = '#FFFFFF',
  iconColor,
  iconColorDark = '#FFFFFF',
  linkColor,
  linkColorDark,
  // Navigation
  navigationBackgroundColor,
  navigationMenuBackgroundColor,
  navigationIconColor = '#212121',
  navigationIconColorDark = '#FFFFFF',
  navigationIconLanguagePickerColor = '#FFFFFF',
  navigationIconLanguagePickerColorHover,
  // Footer
  footerBackgroundColor,
  footerTextColor,
  // Articles/pages
  chapterBackgroundColor,
  chapterItemColor,
  chapterItemNumberColor,
  chapterIntroColor,
  chapterSelectBackgroundColor,
  chapterSelectItemColor,
  chapterSelectItemNumberColor,
  blockquoteColor,
  blockquoteBackgroundColor,
  pullquoteColor,
  pullquoteBackgroundColor,
  // Landing Section
  landingSectionTitleColor = '#FFFFFF',
  landingSectionTitleBackgroundColor = 'transparent',
  landingSectionSubtitleColor = '#FFFFFF',
  landingSectionSubtitleBackgroundColor = 'transparent',
  landingSectionBackgroundColor,
  // Forms
  formBackgroundColor,
  formTextColor,
  // Campaigns
  campaignFormBackgroundColor,
  campaignFormTextColor,
  counterBackgroundColor,
  counterTextColor,

  // IMAGES
  logoImageUrl = 'https://files.wings.dev/9o2DZgVGxJT7x8Q8L5EP/1559551574036/wingslogo.svg',
  footerLogoImageUrl,
  faviconImageUrl = 'https://files.wings.dev/9o2DZgVGxJT7x8Q8L5EP/1559551574036/wingslogo.svg',

  // FONTS AND TEXT
  // Used to set the name of font families if the font is manually imported.
  customHeaderFontUrl = null,
  customBodyFontUrl = null,
  // Other fonts/text stuff
  dropcapFontSize = '3.5em',
  introFontSize = '1.333',
  bodyFontWeight = '400',
  introFontWeight = '300',
  firstLetterFontWeight = '700',
  pullquoteFontWeight = '700',
  blockquoteFontWeight = '300',
  introLineHeight = '1.5',
  firstLetterLineHeight = '0.8',
}) => ({
  // MISC OPTIONS
  contrastLuminanceThreshold,
  // COLORS
  // Base
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
  dangerColor,
  disabledColor,
  backgroundColor,
  backgroundColorDark,
  backgroundHighlightColor,
  textColor,
  textColorDark,
  linkColor: linkColor || primaryColor,
  linkColorDark: linkColorDark || linkColor,
  iconColor: iconColor || primaryColor,
  iconColorDark,
  // Navigation
  navigationBackgroundColor: navigationBackgroundColor || primaryColor,
  navigationMenuBackgroundColor: navigationMenuBackgroundColor || backgroundColor,
  navigationIconColor: getContrastColor({
    backgroundColor: navigationBackgroundColor || primaryColor,
    colors: { light: navigationIconColor, dark: navigationIconColorDark },
    threshold: contrastLuminanceThreshold,
  }),
  navigationIconColorDark,
  navigationIconLanguagePickerColor,
  navigationIconLanguagePickerColorHover: navigationIconLanguagePickerColorHover || primaryColor,
  // Footer
  footerBackgroundColor: footerBackgroundColor || primaryColor,
  footerTextColor:
    footerTextColor ||
    getContrastColor({
      backgroundColor: footerBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  // Articles/Pages
  chapterBackgroundColor: chapterBackgroundColor || primaryColor,
  chapterItemColor:
    chapterItemColor ||
    getContrastColor({
      backgroundColor: chapterBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  chapterItemNumberColor: chapterItemNumberColor || secondaryColor,
  chapterIntroColor:
    chapterIntroColor ||
    getContrastColor({
      backgroundColor: chapterBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  chapterSelectBackgroundColor:
    chapterSelectBackgroundColor || chapterBackgroundColor || primaryColor,
  chapterSelectItemColor:
    chapterSelectItemColor ||
    chapterItemColor ||
    getContrastColor({
      backgroundColor: chapterSelectBackgroundColor || chapterBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  chapterSelectItemNumberColor:
    chapterSelectItemNumberColor || chapterItemNumberColor || secondaryColor,
  blockquoteColor: blockquoteColor || textColor,
  blockquoteBackgroundColor: blockquoteBackgroundColor || backgroundColor,
  pullquoteColor: pullquoteColor || primaryColor,
  pullquoteBackgroundColor: pullquoteBackgroundColor || backgroundColor,
  // Landing Section
  landingSectionTitleColor,
  landingSectionTitleBackgroundColor,
  landingSectionSubtitleColor,
  landingSectionSubtitleBackgroundColor,
  landingSectionBackgroundColor: primaryColor || landingSectionBackgroundColor,
  // Forms
  formBackgroundColor: formBackgroundColor || primaryColor,
  formTextColor:
    formTextColor ||
    getContrastColor({
      backgroundColor: formBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  // Campaigns
  campaignFormBackgroundColor: campaignFormBackgroundColor || formBackgroundColor || primaryColor,
  campaignFormTextColor:
    campaignFormTextColor ||
    formTextColor ||
    getContrastColor({
      backgroundColor: formBackgroundColor || primaryColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),
  counterBackgroundColor: counterBackgroundColor || backgroundColor,
  counterTextColor:
    counterTextColor ||
    getContrastColor({
      backgroundColor: counterBackgroundColor || backgroundColor,
      colors: { light: textColor, dark: textColorDark },
      threshold: contrastLuminanceThreshold,
    }),

  // IMAGES
  logoImageUrl,
  footerLogoImageUrl,
  faviconImageUrl,

  // FONTS AND TEXT
  customHeaderFontUrl,
  customBodyFontUrl,
  dropcapFontSize,
  introFontSize,
  bodyFontWeight,
  introFontWeight,
  firstLetterFontWeight,
  pullquoteFontWeight,
  blockquoteFontWeight,
  introLineHeight,
  firstLetterLineHeight,
});
