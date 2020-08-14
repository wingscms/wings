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
          },
        },
        default: true,
      },
      {
        name: 'Soft Pink',
        props: {
          theme: {
            primaryColor: '#FF85A2',
            secondaryColor: '#FADADD',
            textFontFamily: 'Verdana, Geneva, sans-serif',
            headerFontFamily: 'Palatino, serif',
            textColor: '#444444',
            iconColor: '#444444',
            headingColor: '#FF85A2',
            backgroundColor: '#FFF8FA',
            surfaceBackgroundColor: '#FADADD',
            surfaceBorderRadius: '10px',
            insightBackgroundColor: '#FADADD',
            insightTextColor: '#FF85A2',
            pullquoteBackgroundColor: '#FADADD',
            callToActionBackgroundColor: '#FADADD',
            callToActionButtonColor: '#FF85A2',
            sectionMarkerBackgroundColor: '#FADADD',
            sectionMarkerNumberColor: '#444444',
            sectionMarkerTextColor: '#FF85A2',
            sectionMarkerTitleColor: '#FF85A2',
            sectionMarkerNumberOpacity: 1,
            landingSectionBackgroundColor: '#FADADD',
            landingSectionArrowColor: '#FADADD',
            landingSectionTitleBackgroundColor: '#FADADD',
          },
        },
      },
      {
        name: 'Haxxxor',
        props: {
          theme: {
            primaryColor: '#20C20E',
            secondaryColor: '#000000',
            textFontFamily: 'courier',
            headerFontFamily: 'courier',
            backgroundColor: '#000000',
            textColor: '#000000',
            textColorDark: '#FFFFFF',
            iconColor: '#000000',
            iconColorDark: '#FFFFFF',
            headingColor: '#20C20E',
            surfaceBackgroundColor: '#212121',
            uppercaseTitles: true,
            footerBackgroundColor: '#000000',
            sectionMarkerBackgroundColor: '#212121',
            sectionMarkerNumberColor: '#FFFFFF',
            sectionMarkerTextColor: '#20C20E',
            sectionMarkerTitleColor: '#20C20E',
            insightBackgroundColor: '#212121',
            insightTextColor: '#20C20E',
            callToActionBackgroundColor: '#212121',
            callToActionButtonColor: '#20C20E',
            landingSectionArrowColor: '#20C20E',
            landingSectionTitleColor: '#20C20E',
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
