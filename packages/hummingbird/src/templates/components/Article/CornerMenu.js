import React, { Component } from 'react';
import { navigate } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import { LanguagePicker, Icons } from '@wingscms/crane';
import routing from '../../../../services/routing';

const Container = styled.div`
  position: fixed;
  display: block;
  bottom: 0;
  right: 0;
  height: 50px;
  z-index: 20;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.defaultShadow};
  &.hidden {
    display: none;
  }
`;

const ShareLink = styled.a`
  width: 50px;
  height: 50px;
  padding: 15px;
  background-color: ${({ theme }) => theme.primaryColor};
  display: block;
  position: relative;
  transition: all 0.15s linear;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.cornerMenuIconColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    &:last-of-type {
      &:after {
        border-color: ${({ theme }) => theme.secondaryColor} transparent transparent transparent;
      }
    }
  }
  &:last-of-type {
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transition: all 0.15s linear;
      border-color: ${({ theme }) => theme.primaryColor} transparent transparent transparent;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 10px;
      height: 0;
      width: 0;
      display: inline-block;
    }
  }
`;

const ShareOpen = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.primaryColor};
  display: inline;
  float: right;
  position: relative;
  overflow: visible;
  transition: all 0.15s linear;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  .linkWrapper {
    width: 100%;
    background-color: transparent;
    display: none;
    cursor: default;
    height: 160px;
  }
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
    .linkWrapper {
      display: block;
    }
  }
`;

const ShareIconWrapper = styled.div`
  padding: 17px 17px 7px 17px;
  svg {
    fill: ${({ theme }) => theme.cornerMenuIconColor};
  }
`;

const ShareOpenInner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const LanguagePickerWrap = styled.div`
  display: inline-block;
  margin: 0;
  width: 250px;
  height: 50px;
  z-index: 5;
  position: relative;
  border-bottom: 3px solid #eee;
  > div {
    > div {
      &.translations {
        height: auto;
        > div {
          color: #000 !important;
        }
      }
      height: 50px;
    }
  }
  svg {
    margin-left: 12px;
  }
`;

class CornerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      hidden: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      url: encodeURIComponent(`http://${window.location.hostname}${window.location.pathname}`),
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { hidden } = this.state;
    if (window.scrollY > 200 && hidden) {
      this.setState({ hidden: false });
    }
    if (window.scrollY < 200 && !hidden) {
      this.setState({ hidden: true });
    }
  };

  render() {
    const { locale, shareMessage, translations = [], theme } = this.props;
    const { hidden, url } = this.state;
    return (
      <Container className={hidden ? 'hidden' : ''}>
        {translations.length > 0 ? (
          <LanguagePickerWrap>
            <LanguagePicker
              showAbove
              backgroundColor={theme.languagePickerColor}
              backgroundHoverColor={theme.languagePickerHoverColor}
              translations={translations.map(t => ({
                name: t.locale.name,
                locale: t.locale.id,
                node: t,
              }))}
              current={{
                locale: locale.id,
                name: locale.name,
              }}
              onTranslationClick={({ node }) => {
                navigate(routing.getPath(node));
              }}
            />
          </LanguagePickerWrap>
        ) : null}
        <ShareOpen>
          <ShareOpenInner>
            <div className="linkWrapper">
              <ShareLink
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
              >
                <Icons.Facebook />
              </ShareLink>
              <ShareLink
                href={`https://twitter.com/intent/tweet?url=${url}${
                  shareMessage ? `&status=${encodeURIComponent(shareMessage)}%20${url}` : ''
                }`}
                target="_blank"
              >
                <Icons.Twitter />
              </ShareLink>
              <ShareLink
                href={`whatsapp://send?text=${
                  shareMessage ? `${encodeURIComponent(shareMessage)}: ` : ''
                }${url}`}
                target="_blank"
              >
                <Icons.Whatsapp />
              </ShareLink>
            </div>
            <ShareIconWrapper>
              <Icons.Share />
            </ShareIconWrapper>
          </ShareOpenInner>
        </ShareOpen>
      </Container>
    );
  }
}

export default withTheme(CornerMenu);
