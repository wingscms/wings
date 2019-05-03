import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { navigate } from 'gatsby';
import browserLocale from 'browser-locale';

import GlobalStyles from '../styles/articleBody';

const Main = styled.main`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

class Layout extends Component {
  componentWillMount() {
    const { translations, locale, entry } = this.props;
    if (typeof window !== 'undefined' && translations && translations.length > 0) {
      if (
        localStorage.getItem(
          `hasLanguageRedirectRunBefore${window.location.hostname}${entry.path}`,
        ) === null
      ) {
        const lang = browserLocale().split('-')[0];
        let containsTranslation = false;
        let path = '';
        localStorage.setItem(
          `hasLanguageRedirectRunBefore${window.location.hostname}${entry.path}`,
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
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyles />
        <Main>{children}</Main>
      </div>
    );
  }
}

export default withTheme(Layout);
