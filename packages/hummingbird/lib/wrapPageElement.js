import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import browserLocale from 'browser-locale';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeDe from 'react-intl/locale-data/de';
import localeEn from 'react-intl/locale-data/en';
import localeNl from 'react-intl/locale-data/nl';
import { useTheme } from '../lib/styled';
import messagesDe from '../src/translations/de';
import messagesEn from '../src/translations/en';
import messagesNl from '../src/translations/nl';

addLocaleData([...localeDe, ...localeEn, ...localeNl]);

const messages = {
  de: messagesDe,
  en: messagesEn,
  nl: messagesNl,
};

const generateTitle = (title, siteTitle, platform, platforms) =>
  (platforms[platform] && platforms[platform].title ? platforms[platform].title : title);

const PageWrapper = ({
  pageContext: { entry, petition, event, node: _node, siteMeta: { siteTitle } = {} },
  children,
}) => {
  const theme = useTheme();
  const node = entry || petition || event || _node;
  if (!node) return children;
  const { title, platforms = {}, locale = 'nl', translations } = node;
  const language = locale.split(/[-_]/)[0];
  useEffect(() => {
    if (typeof window !== 'undefined' && translations && translations.length > 0) {
      if (
        localStorage.getItem(
          `hasLanguageRedirectRunBefore${window.location.hostname}${node.path}`,
        ) === null
      ) {
        const lang = browserLocale().split('-')[0];
        let containsTranslation = false;
        let path = '';
        localStorage.setItem(
          `hasLanguageRedirectRunBefore${window.location.hostname}${node.path}`,
          true,
        );
        translations.forEach((x) => {
          localStorage.setItem(
            `hasLanguageRedirectRunBefore${window.location.hostname}${x.path}`,
            true,
          );
          if (x.locale === lang) {
            containsTranslation = true;
            // eslint-disable-next-line
            path = x.path;
          }
        });
        if (containsTranslation && translations && locale !== lang) {
          navigate(path);
        }
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Helmet title={generateTitle(title, siteTitle, 'all', platforms)}>
        <html lang={locale || 'en'} />
        {translations &&
          translations.map(trans => (
            <link key={trans.locale} rel="alternate" hrefLang={trans.locale} href={trans.path} />
          ))}
        <link rel="icon" type="image/ico" sizes="16x16" href={theme.faviconUrl} />
        {platforms.all && platforms.all.description ? (
          <meta name="description" content={platforms.all.description} />
        ) : null}
        {platforms.facebook && platforms.facebook.title ? (
          <meta
            property="og:title"
            content={generateTitle(title, siteTitle, 'facebook', platforms)}
          />
        ) : null}
        {platforms.all && platforms.all.description ? (
          <meta property="og:description" content={platforms.all.description} />
        ) : null}
        {platforms.all && platforms.all.imageUrl ? (
          <meta property="og:image" content={platforms.all.imageUrl} />
        ) : null}
        {platforms.twitter && platforms.twitter.title ? (
          <meta
            property="twitter:title"
            content={generateTitle(title, siteTitle, 'twitter', platforms)}
          />
        ) : null}
        {platforms.twitter && platforms.twitter.description ? (
          <meta property="twitter:description" content={platforms.twitter.description} />
        ) : null}
        {platforms.twitter && platforms.twitter.imageUrl ? (
          <meta property="twitter:image" content={platforms.twitter.imageUrl} />
        ) : null}
        <meta name="twitter:card" content="summary_large_image" />
        {platforms.facebook && platforms.facebook.title ? (
          <meta
            property="fb:title"
            content={generateTitle(title, siteTitle, 'facebook', platforms)}
          />
        ) : null}
        {platforms.facebook && platforms.facebook.description ? (
          <meta property="fb:description" content={platforms.facebook.description} />
        ) : null}
        {platforms.facebook && platforms.facebook.imageUrl ? (
          <meta property="fb:image" content={platforms.facebook.imageUrl} />
        ) : null}
      </Helmet>
      <IntlProvider locale={locale} messages={messages[language]}>
        {children}
      </IntlProvider>
    </React.Fragment>
  );
};

export default ({ element, props }) => <PageWrapper {...props}>{element}</PageWrapper>;
