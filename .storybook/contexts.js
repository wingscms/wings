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
            landingSectionGradientColor: 'rgba(0, 0, 0, 0.3)',
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
