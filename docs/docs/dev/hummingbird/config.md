---
title: Configuration
---

## Design

Can be used in the `design` option in Hummingbird's `gatsby-config` or using the environment variable `GATSBY_APP_THEME`:

### Miscellaneous Options 

`contrastLuminanceThreshold`: Default: `50`

### Colors

#### Base Colors

`primaryColor`: Default: <span style="background-color: #417de8">#417de8</span>

`secondaryColor`: Default: <span style="background-color: #274b8b; color: #FFFFFF">#274b8b</span>

`successColor`: Default: <span style="background-color: #0F9960">#0F9960</span>

`warningColor`: Default: <span style="background-color: #F29D49">#F29D49</span>

`dangerColor`: Default: <span style="background-color: #DB3737">#DB3737</span>

`disabledColor`: Default: <span style="background-color: #DDDDDD">#DDDDDD</span>

`backgroundColor`: Default: <span style="background-color: #FFFFFF">#FFFFFF</span>

`backgroundColorDark`: Default: <span style="background-color: #212121; color: #fff">#212121</span>

`textColor`: Default: <span style="background-color: #212121; color: #ffffff">#212121</span>

`textColorDark`: Default: <span style="background-color: #ffffff">#FFFFFF</span>

`textColorDisabled`: Default: <span style="background-color: #555555">#555555</span>

`linkColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`linkColorDark`: Default: <span style="background-color: #417de8">linkColor</span>

#### Navigation

`navigationBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`navigationMenuBackgroundColor`: Default: <span style="background-color: #FFFFFF">backgroundColor</span>

`navigationIconColor`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options) (<span style="background-color: #212121; color: #FFFFFF">#212121</span> for light backgrounds and <span style="background-color: #FFFFFF">#FFFFFF</span> for dark backgrounds)

`navigationIconColorDark`: Default: <span style="background-color: #FFFFFF">#FFFFFF</span>

`navigationIconLanguagePickerColor`: Default: <span style="background-color: #FFFFFF">#FFFFFF</span>

`navigationIconLanguagePickerColorHover`: Default: <span style="background-color: #417de8">primaryColor</span>

#### Footer

`footerBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`footerTextColor`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options)

#### Articles/Pages

`chapterBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`chapterItemColor`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options)

`chapterItemNumberColor`: Default: <span style="background-color: #274b8b; color: #FFFFFF">secondaryColor</span>

`colorChapterIntro`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options)

`chapterSelectBackgroundColor`: Default: <span style="background-color: #417de8">chapterBackgroundColor</span>

`chapterSelectItemColor`: Default: chapterItemColor

`chapterSelectItemNumberColor`: Default: chapterItemNumberColor

`blockquoteColor`: Default: <span style="background-color: #212121; color: #ffffff">textColor</span>

`blockquoteBackgroundColor`: Default: <span style="background-color: #ffffff">backgroundColor</span>

`pullquoteColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`pullquoteBackgroundColor`: Default: <span style="background-color: #ffffff">backgroundColor</span>

#### Landing Section

`landingSectionTitleColor`: Default: <span style="background-color: #FFFFFF">#FFFFFF</span>

`landingSectionTitleBackgroundColor` Default: <span style="background-color: transparent">transparent</span>

`landingSectionSubtitleColor`: Default: <span style="background-color: #FFFFFF">#FFFFFF</span>

`landingSectionSubtitleBackgroundColor`: Default: <span style="background-color: transparent">transparent</span>

`landingSectionBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

#### Forms

`formBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`formTextColor`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options)

#### Campaigns

`campaignFormBackgroundColor`: Default: <span style="background-color: #417de8">formBackgroundColor</span>

`campaignFormTextColor`: Default: formTextColor

`counterBackgroundColor`: Default: <span style="background-color: #417de8">primaryColor</span>

`counterTextColor`: Default: calculated by [`getContrastColor()`](/docs/dev/crane/utils#getcontrastcolor-options)

### Images

`logoImageUrl`: Default: https://files.wings.dev/9o2DZgVGxJT7x8Q8L5EP/1559551574036/wingslogo.svg

`footerLogoImageUrl` Default: null

`faviconImageUrl`: Default: https://files.wings.dev/9o2DZgVGxJT7x8Q8L5EP/1559551574036/wingslogo.svg

### Fonts/Text

`customHeaderFontUrl`: Default: null

`customBodyFontUrl`: Default: null

`dropcapFontSize`: Default: 3.5em

`introFontSize`: Default: 1.333

`bodyFontWeight`: Default: 400

`introFontWeight`: Default: 300

`firstLetterFontWeight`: Default: 700

`pullquoteFontWeight`: Default: 700

`blockquoteFontWeight`: Default: 300

`introLineHeight`: Default: 1.5

`firstLetterLineHeight`: Default: 0.8

## Footer

Can be used in the `footer` option in Hummingbird's `gatsby-config` or using the environment variable `GATSBY_FOOTER_CONFIG`:

`title`: Default: null

`logoLink`: Default: `https://wings.dev`

`columns`: Default: `[]`. The content of the footer can be constructed using any number of columns, which is an array of column objects. A column is made up of an array of rows (which have a `type` and other `options`). To see the row options look at switch statement here: [https://github.com/wingscms/wings/blob/master/packages/hummingbird/src/components/Footer/FooterColumns.js#L53](https://github.com/wingscms/wings/blob/master/packages/hummingbird/src/components/Footer/FooterColumns.js#L53)

Here is an example of a columns array:

```
[
  {
    title: 'Contact',
    rows: [
      {
        type: 'text',
        content: 'Voorhaven 31, 3025HC Rotterdam, Netherlands',
      },
      {
        type: 'link',
        url: 'mailto:info@wings.dev',
        content: 'info@wings.dev',
      },
    ],
  },
  {
    title: 'Social',
    rows: [
      {
        type: 'social',
        profiles: [
          {
            platform: 'twitter',
            url: 'https://twitter.com/wingscms',
          },
        ],
      },
    ],
  },
]
```

## Typography

Can be used in the `typography` option in Hummingbird's `gatsby-config` or using the environment variable `GATSBY_TYPOGRAPHY_CONFIG`:

See: [https://kyleamathews.github.io/typography.js/](https://kyleamathews.github.io/typography.js/)