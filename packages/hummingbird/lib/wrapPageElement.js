import React from 'react';
import Helmet from 'react-helmet';
import { parseBool } from '../lib/utils';
import { useTheme } from '../lib/styled';

const generateTitle = (noSiteTitle, title, siteTitle, platform, platforms) => {
  if (!parseBool(noSiteTitle)) {
    return platforms[platform] && platforms[platform].title
      ? `${platforms[platform].title} - ${siteTitle}`
      : `${title} - ${siteTitle}`;
  }
  return platforms[platform] && platforms[platform].title ? platforms[platform].title : title;
};

const PageWrapper = ({
  pageContext: { entry, petition, event, node: _node, siteMeta: { siteTitle } = {} },
  children,
}) => {
  const theme = useTheme();
  const node = entry || petition || event || _node;
  if (!node) return children;
  const {
    title,
    platforms = {},
    locale,
    translations: _translations,
    meta,
    meta: { noSiteTitle },
  } = node;

  const translations = Object.keys(_translations || {}).map(_locale => ({
    locale: _locale,
    path: node.translations[_locale].path,
  }));
  return (
    <React.Fragment>
      <Helmet title={generateTitle(noSiteTitle, title, siteTitle, 'all', platforms)}>
        <html lang={locale || 'en'} />
        {translations &&
          translations.map(trans => (
            <link rel="alternate" hrefLang={trans.locale} href={trans.path} />
          ))}
        <link rel="icon" type="image/ico" sizes="16x16" href={theme.faviconUrl} />
        {/* SEO meta tags */}
        {platforms.all && platforms.all.description ? (
          <meta name="description" content={platforms.all.description} />
        ) : null}
        {platforms.facebook && platforms.facebook.title ? (
          <meta
            property="og:title"
            content={generateTitle(noSiteTitle, title, siteTitle, 'facebook', platforms)}
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
            content={generateTitle(noSiteTitle, title, siteTitle, 'twitter', platforms)}
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
            content={generateTitle(noSiteTitle, title, siteTitle, 'facebook', platforms)}
          />
        ) : null}
        {platforms.facebook && platforms.facebook.description ? (
          <meta property="fb:description" content={platforms.facebook.description} />
        ) : null}
        {platforms.facebook && platforms.facebook.imageUrl ? (
          <meta property="fb:image" content={platforms.facebook.imageUrl} />
        ) : null}
        {/* Custom meta */}
        {process.env.GATSBY_CUSTOM_META
          ? JSON.parse(process.env.GATSBY_CUSTOM_META).map(x => (
            <meta name={x.name} content={x.content} />
            ))
          : null}
        {meta && meta.customHTMLMeta
          ? JSON.parse(meta.customHTMLMeta).map(x => <meta name={x.name} content={x.content} />)
          : null}
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default ({ element, props }) => <PageWrapper {...props}>{element}</PageWrapper>;
