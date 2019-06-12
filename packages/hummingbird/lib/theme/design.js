import { getContrastColor } from '@wingscms/crane';

// set defaults here:
export default ({
  // COLORS
  // Base
  colorPrimary = '#EF5B58',
  colorSecondary = '#8F3634',
  colorSuccess = '#0F9960',
  colorWarning = '#F29D49',
  colorDanger = '#DB3737',
  colorDisabled = '#DDDDDD',
  colorBackground = '#FFFFFF',
  colorBackgroundHighlight = '#fdeeee',
  colorBackgroundDark = '#212121',
  colorText = '#212121',
  colorTextDark = '#FFFFFF',
  colorIcon,
  colorIconDark = '#FFFFFF',
  colorLink,
  colorLinkDark,
  // Navigation
  colorNavigationBackground,
  colorNavigationMenuBackground,
  colorNavigationIcon = '#212121',
  colorNavigationIconDark = '#FFFFFF',
  colorNavigationLanguagePicker = '#FFFFFF',
  colorNavigationLanguagePickerHover,
  // Footer
  colorFooterBackground,
  colorFooterText,
  // Landing Section
  colorLandingSectionTitle = '#FFFFFF',
  colorLandingSectionTitleBackground = 'transparent',
  colorLandingSectionSubTitle = '#FFFFFF',
  colorLandingSectionSubTitleBackground = 'transparent',
  colorLandingSectionBackground,
  // Article
  colorChapterBackground,
  colorChapterItem,
  colorChapterItemNumber,
  colorChapterIntro,
  colorChapterSelectBackground,
  colorChapterSelectItem,
  colorChapterSelectItemNumber,
  colorBlockquote,
  colorBlockquoteBackground,
  colorPullquote,
  colorPullquoteBackground,
  // Forms
  colorFormBackground,
  colorFormText,
  // Campaigns
  colorCounterBackground,
  colorCounterText,
  // Petitions
  colorPetitionFormBackground,

  // IMAGES
  imageLogoUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',
  imageLogoFooterUrl,
  imageFaviconUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',

  // FONTS
  // Used to set the name of font families if the font is manually imported.
  customHeaderFontUrl = null,
  customBodyFontUrl = null,

  // FOOTER
  footerTitle = null,
  footerAddress = null,
  footerEmail = null,
  footerPhone = null,

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
  colorBackgroundHighlight,
  colorText,
  colorTextDark,
  colorLink: colorLink || colorPrimary,
  colorLinkDark: colorLinkDark || colorLink,
  colorIcon: colorIcon || colorPrimary,
  colorIconDark,
  // Navigation
  colorNavigationBackground: colorNavigationBackground || colorPrimary,
  colorNavigationMenuBackground: colorNavigationMenuBackground || colorBackground,
  colorNavigationIcon: getContrastColor({
    backgroundColor: colorNavigationBackground || colorPrimary,
    colors: { light: colorNavigationIcon, dark: colorNavigationIconDark },
    threshold: 30,
  }),
  colorNavigationIconDark,
  // Footer
  colorFooterBackground: colorFooterBackground || colorPrimary,
  colorFooterText:
    colorFooterText ||
    getContrastColor({
      backgroundColor: colorFooterBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  colorNavigationLanguagePicker,
  colorNavigationLanguagePickerHover: colorNavigationLanguagePickerHover || colorPrimary,
  // Landing Section
  colorLandingSectionTitle,
  colorLandingSectionTitleBackground,
  colorLandingSectionSubTitle,
  colorLandingSectionSubTitleBackground,
  colorLandingSectionBackground: colorPrimary || colorLandingSectionBackground,
  // Article
  colorChapterBackground: colorChapterBackground || colorPrimary,
  colorChapterItem:
    colorChapterItem ||
    getContrastColor({
      backgroundColor: colorChapterBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  colorChapterItemNumber: colorChapterItemNumber || colorSecondary,
  colorChapterIntro:
    colorChapterIntro ||
    getContrastColor({
      backgroundColor: colorChapterBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  colorChapterSelectBackground:
    colorChapterSelectBackground || colorChapterBackground || colorPrimary,
  colorChapterSelectItem:
    colorChapterSelectItem ||
    colorChapterItem ||
    getContrastColor({
      backgroundColor: colorChapterSelectBackground || colorChapterBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  colorChapterSelectItemNumber:
    colorChapterSelectItemNumber || colorChapterItemNumber || colorSecondary,
  colorBlockquote: colorBlockquote || colorText,
  colorBlockquoteBackground: colorBlockquoteBackground || colorBackground,
  colorPullquote: colorPullquote || colorPrimary,
  colorPullquoteBackground: colorPullquoteBackground || colorBackground,
  // Forms
  colorFormBackground: colorFormBackground || colorPrimary,
  colorFormText:
    colorFormText ||
    getContrastColor({
      backgroundColor: colorFormBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  // Campaigns
  colorCounterBackground: colorCounterBackground || colorBackground,
  colorCounterText:
    colorCounterText ||
    getContrastColor({
      backgroundColor: colorCounterBackground || colorBackground,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  // Petitions
  colorPetitionFormBackground: colorPetitionFormBackground || colorFormBackground || colorPrimary,

  // IMAGES
  imageLogoUrl,
  imageLogoFooterUrl: imageLogoFooterUrl || imageLogoUrl,
  imageFaviconUrl,

  // FOOTER
  footerTitle,
  footerAddress,
  footerEmail,
  footerPhone,

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
  //
  customHeaderFontUrl,
  customBodyFontUrl,
});
