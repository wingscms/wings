import React from 'react';

import {
  AppBar as _AppBar,
  Burger as _Burger,
  Button,
  SocialButtons as _SocialButtons,
} from '@wingscms/components';

import { t, useTheme } from '../../../theme';
import styled from '../../../lib/styled';

const LayoutContainer = styled.div`
  display: block;
  position: relative;
  height: ${t(_ => _.largeSpacing)};
  width: 100%;
`;

const BarLayoutContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: ${t(_ => _.largeSpacing)};
  padding: 0 ${t(_ => _.smallSpacing)};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const BarLayoutRight = styled.div`
  direction: rtl;
  height: 100%;
  margin: 0 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  max-width: calc(100% - 220px);
  white-space: nowrap;
  @media screen and (max-width: 1300px) {
    padding-right: ${({ primaryItem }) => (primaryItem ? '0' : '50px')};
  }
`;

const BarLayoutRightItem = styled.div`
  direction: ltr;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  max-width: 200px;
  max-height: calc(100% - 20px);
  display: block;
  margin-right: auto;
  vertical-align: top;
  justify-self: flex-start;
`;

const SocialButtons = styled(_SocialButtons)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const AppBar = styled(_AppBar)`
  background-color: ${t(_ => _.appMenuBarBackgroundColor)};
  height: ${t(_ => _.largeSpacing)};
`;

const LangaugeSelectButton = styled(Button)`
  font-size: 16px;
  height: 40px;
  padding: 0 10px;
  margin: ${t(_ => `0 ${_.extraSmallSpacing} 0 ${_.smallSpacing}`)};
  svg {
    margin: 0;
  }
`;

const PrimaryItem = styled(Button)`
  font-size: 16px;
  line-height: 40px;
  padding: ${t(_ => `0 ${_.smallSpacing}`)};
  margin-left: ${t(_ => _.extraSmallSpacing)};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Burger = styled(_Burger)`
  position: absolute;
  right: ${t(_ => _.smallSpacing)};
  top: 50%;
  transform: translateY(-50%);
`;

export default function MenuDefaultBar({
  burgerProps,
  logo: { imageUrl: logoImageUrl, alt: logoImageAlt = 'Logo', wrap: wrapLogo } = {},
  showLanguageSelect,
  onLanguageSelectClick,
  menuItems,
  primaryMenuItems,
  socialButtons,
  socialButtonsProps,
  wrapPrimaryItem,
}) {
  const theme = useTheme();
  const wrappedLogo = wrapLogo(<Logo alt={logoImageAlt} src={logoImageUrl} />, {
    imageUrl: logoImageUrl,
    imageAlt: logoImageAlt,
    url: '/',
  });

  return (
    <AppBar>
      <LayoutContainer>
        <BarLayoutContainer>
          {logoImageUrl ? wrappedLogo : null}
          <BarLayoutRight>
            <BarLayoutRightItem>
              {!showLanguageSelect ? null : (
                <LangaugeSelectButton
                  backgroundColor={theme.appMenuButtonBackgroundColor}
                  backgroundHoverColor={theme.appMenuButtonBackgroundHoverColor}
                  textColor={theme.appMenuButtonTextColor}
                  textHoverColor={theme.appMenuButtonTextHoverColor}
                  icon="globe"
                  onClick={onLanguageSelectClick}
                />
              )}
            </BarLayoutRightItem>
            {!primaryMenuItems.length
              ? null
              : primaryMenuItems.map(({ url, text, ...props }) => (
                  <BarLayoutRightItem>
                    {wrapPrimaryItem(
                      <PrimaryItem
                        backgroundColor={theme.appMenuButtonBackgroundColor}
                        backgroundHoverColor={theme.appMenuButtonBackgroundHoverColor}
                        textColor={theme.appMenuButtonTextColor}
                        textHoverColor={theme.appMenuButtonTextHoverColor}
                        {...props}
                      >
                        {text}
                      </PrimaryItem>,
                      { url },
                    )}
                  </BarLayoutRightItem>
                ))}
            <BarLayoutRightItem>
              <SocialButtons>
                {socialButtons.map(({ platform, url, buttonProps }, i) => (
                  <SocialButtons.Button
                    {...socialButtonsProps}
                    {...buttonProps}
                    key={i}
                    icon={platform}
                    url={url}
                  />
                ))}
              </SocialButtons>
            </BarLayoutRightItem>
          </BarLayoutRight>
        </BarLayoutContainer>
        {!menuItems.length ? null : <Burger {...burgerProps} />}
      </LayoutContainer>
    </AppBar>
  );
}
