import { getContrastColor } from '@wingscms/crane';

// set defaults here:
export default ({
  // COLORS
  // Base
  colorPrimary = '#417de8',
  colorSecondary = '#274b8b',
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
  // Articles/pages
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
  // Landing Section
  colorLandingSectionTitle = '#FFFFFF',
  colorLandingSectionTitleBackground = 'transparent',
  colorLandingSectionSubTitle = '#FFFFFF',
  colorLandingSectionSubTitleBackground = 'transparent',
  colorLandingSectionBackground,
  // Forms
  colorFormBackground,
  colorFormText,
  // Campaigns
  colorCampaignFormBackground,
  colorCampaignFormText,
  colorCounterBackground,
  colorCounterText,

  // IMAGES
  imageLogoUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',
  imageLogoFooterUrl,
  imageFaviconUrl = 'https://files.wings.dev/1532472414726/wings4-2.png',

  // FONTS AND TEXT
  // Used to set the name of font families if the font is manually imported.
  fontCustomHeaderUrl = null,
  fontCustomBodyUrl = null,
  // Other fonts/text stuff
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
  colorNavigationLanguagePicker,
  colorNavigationLanguagePickerHover: colorNavigationLanguagePickerHover || colorPrimary,
  // Footer
  colorFooterBackground: colorFooterBackground || colorPrimary,
  colorFooterText:
    colorFooterText ||
    getContrastColor({
      backgroundColor: colorFooterBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  // Articles/Pages
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
  // Landing Section
  colorLandingSectionTitle,
  colorLandingSectionTitleBackground,
  colorLandingSectionSubTitle,
  colorLandingSectionSubTitleBackground,
  colorLandingSectionBackground: colorPrimary || colorLandingSectionBackground,
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
  colorCampaignFormBackground: colorCampaignFormBackground || colorFormBackground || colorPrimary,
  colorCampaignFormText:
    colorCampaignFormText ||
    colorFormText ||
    getContrastColor({
      backgroundColor: colorFormBackground || colorPrimary,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),
  colorCounterBackground: colorCounterBackground || colorBackground,
  colorCounterText:
    colorCounterText ||
    getContrastColor({
      backgroundColor: colorCounterBackground || colorBackground,
      colors: { light: colorText, dark: colorTextDark },
      threshold: 30,
    }),

  // IMAGES
  imageLogoUrl,
  imageLogoFooterUrl: imageLogoFooterUrl || imageLogoUrl,
  imageFaviconUrl,

  // FONTS AND TEXT
  fontCustomHeaderUrl,
  fontCustomBodyUrl,
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
