import { WingsProvider, IntlProvider } from '@wingscms/react';
import { ThemeProvider } from '@wingscms/components';
import client from '../.wings/wings';
import en from '../.wings/data/en.json';
import de from '../.wings/data/de.json';
import nl from '../.wings/data/nl.json';

export default [
  {
    icon: 'graphql',
    title: 'Wings API',
    components: [WingsProvider],
    params: [{ name: 'Mocked', props: { client }, default: true }],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'paintbrush',
    title: 'Theme',
    components: [ThemeProvider],
    params: [
      { name: 'Wings', props: {}, default: true },
      {
        name: 'Wings Dark',
        props: {
          theme: {
            primaryColor: '#274B8B',
            secondaryColor: '#417DE8',
            backgroundColor: '#212121',
            surfaceBackgroundColor: '#323232',
            landingSectionGradientColor: 'rgba(0, 0, 0, 0.3)',
          },
        },
        default: true,
      },
      {
        name: 'Soft Pink',
        props: {
          theme: {
            primaryColor: '#FFCFE2',
            secondaryColor: '#FFECF0',
            textFontFamily: 'Verdana, Geneva, sans-serif',
            headerFontFamily: 'Palatino, serif',
            textColor: '#444444',
            iconColor: '#444444',
            headingColor: '#FFCFE2',
            backgroundColor: '#FFF8FA',
            surfaceBackgroundColor: '#FFECF0',
            surfaceBorderRadius: '5px',
            insightBackgroundColor: '#FFECF0',
            insightTextColor: '#FFCFE2',
            pullquoteBackgroundColor: '#FFECF0',
            callToActionBackgroundColor: '#FFECF0',
            callToActionButtonColor: '#FFCFE2',
            sectionMarkerBackgroundColor: '#FFECF0',
            sectionMarkerNumberColor: '#444444',
            sectionMarkerTextColor: '#FFCFE2',
            sectionMarkerTitleColor: '#FFCFE2',
            sectionMarkerNumberOpacity: 1,
            landingSectionBackgroundColor: '#FFECF0',
            landingSectionArrowColor: '#FFECF0',
            landingSectionTitleBackgroundColor: '#FFECF0',
            landingSectionGradientColor: 'rgba(255, 225, 225, 0.3)',
          },
        },
      },
      {
        name: 'openoverabortus.humanistischverbond.nl',
        props: {
          theme: {
            appBarBackgroundColor: 'rgba(255,255,255,1)',
            backgroundColor: 'rgba(247,247,247,1)',
            baseFontSize: '22px',
            blockquoteTextColor: 'rgba(60,22,109,1)',
            burgerColor: 'rgba(60,22,109,1)',
            burgerHoverColor: 'rgba(164,213,167,1)',
            burgerMenuColor: 'rgba(60,22,109,1)',
            burgerMenuHoverColor: 'rgba(164,213,167,1)',
            callToActionBackgroundColor: 'rgba(255,255,255,1)',
            callToActionTextColor: 'rgba(60,22,109,1)',
            counterBackgroundColor: 'rgba(164,213,167,1)',
            counterTextColor: 'rgba(60,22,109,1)',
            drawerBackgroundColor: 'rgba(232,244,234,1)',
            formBackgroundColor: 'rgba(232,244,234,1)',
            formLinkTextColor: 'rgba(60,22,109,1)',
            formTextColor: 'rgba(60,22,109,1)',
            headerFontFamily: '"bely-display", serif ',
            headingColor: 'rgba(60,22,109,1)',
            headingScaleRatio: '1.3',
            insightBackgroundColor: 'rgba(164,213,167,1)',
            insightTextColor: 'rgba(255,252,252,1)',
            landingSectionTitleColor: 'rgba(60,22,109,1)',
            logoImageUrl: 'https://screens.wings.dev/HV_logo_paars-1595593021.svg',
            primaryColor: 'rgba(60,22,109,1)',
            pullquoteBackgroundColor: 'rgba(164,213,167,1)',
            pullquoteTextColor: 'rgba(255,255,255,1)',
            secondaryColor: 'rgba(60,22,109,1)',
            shareButtonBackgroundColor: 'rgba(255,255,255,1)',
            shareButtonBackgroundHoverColor: 'rgba(109,90,163,1)',
            shareButtonIconColor: 'rgba(60,22,109,1)',
            shareButtonIconHoverColor: 'rgba(255,255,255,1)',
            shareButtonMenuBackgroundColor: 'rgba(255,255,255,1)',
            shareButtonMenuBackgroundHoverColor: 'rgba(60,22,109,1)',
            shareButtonMenuIconColor: 'rgba(60,22,109,1)',
            shareButtonMenuIconHoverColor: 'rgba(255,255,255,1)',
            textColor: 'rgba(60,22,109,1)',
            textFontFamily: '"work-sans", sans-serif',
            webFontConfig: '{"typekit": { "id": "hzp6obi" }}',
          },
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'globe',
    title: 'i18n',
    components: [IntlProvider],
    params: [
      {
        name: 'English',
        props: {
          locale: 'en',
          messages: en,
        },
        default: true,
      },
      {
        name: 'Deutsch',
        props: {
          locale: 'de',
          messages: de,
        },
      },
      {
        name: 'Nederlands',
        props: {
          locale: 'nl',
          messages: nl,
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
