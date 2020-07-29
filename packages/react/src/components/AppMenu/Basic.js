import React, { useState } from 'react';

import {
  AppBar as _AppBar,
  Burger as _Burger,
  Button,
  Drawer,
  Heading,
  Link,
  Dialog,
  Portal,
  SocialButtons as _SocialButtons,
} from '@wingscms/components';

import { t, useTheme } from '../../theme';
import styled from '../../lib/styled';

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
  height: ${t(_ => _.largeSpacing)};
  box-shadow: ${t(_ => _.shadow)};
`;

const Burger = styled(_Burger)`
  position: absolute;
  right: ${t(_ => _.smallSpacing)};
  top: 50%;
  transform: translateY(-50%);
`;

const MenuItem = styled.div`
  ${t(Heading.getStyles(1))}
  text-align: center;
  margin-bottom: 1.3em;
`;

const LangaugeSelectButton = styled(Button)`
  font-size: 16px;
  height: 40px;
  padding: 0 10px;
  margin-left: 20px;
  svg {
    margin: 0;
  }
`;

const PrimaryItemBar = styled(Button)`
  font-size: 16px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 10px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

// const PrimaryItemDrawer = styled(Button)`
//   margin: 0 auto;
//   display: block;
// `;

const wrapLink = LinkWrap => Link => {
  if (LinkWrap) {
    return ({ href, children, ...props }) => (
      <LinkWrap href={href} {...props}>
        <Link>{children}</Link>
      </LinkWrap>
    );
  }
  return ({ href, children, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default function Menu({
  menu: { items: _menuItems = [], wrapItem: wrapMenuItem },
  logo: { url: logoUrl, alt: logoAlt = 'Logo', wrap: wrapLogo },
  socialButtons,
}) {
  const _ = useTheme();
  const [open, setOpen] = useState(false);
  const [languageSelectOpen, setLanguageSelectOpen] = useState(false);

  const MenuLink = wrapLink(wrapMenuItem)(Link);
  const MenuPrimaryLink = wrapLink(wrapMenuItem)(({ children, ...props }) => (
    <a {...props}>{children}</a>
  ));
  const LogoLink = wrapLink(wrapLogo)(({ children, ...props }) => <a {...props}>{children}</a>);

  const primaryMenuItems = _menuItems.filter(item => item.primary);
  const menuItems = _menuItems.filter(item => !item.primary);

  const burgerProps = {
    eaten: open,
    height: _.burgerHeight,
    width: _.burgerWidth,
    barHeight: _.burgerBarHeight,
    barBorderRadius: _.burgerBarBorderRadius,
    onClick: () => setOpen(!open),
  };

  return (
    <Portal>
      <AppBar position={AppBar.Position.TOP}>
        <LayoutContainer>
          <BarLayoutContainer>
            {logoUrl || _.logoImageUrl ? (
              <LogoLink href="/">
                <Logo alt={logoAlt} src={logoUrl || _.logoImageUrl} />
              </LogoLink>
            ) : null}
            <BarLayoutRight>
              <BarLayoutRightItem>
                <LangaugeSelectButton
                  intent={Button.Intent.PRIMARY}
                  icon="globe"
                  onClick={() => setLanguageSelectOpen(true)}
                />
              </BarLayoutRightItem>
              {!primaryMenuItems.length
                ? null
                : primaryMenuItems.map(({ url, text, ...props }) => (
                    <BarLayoutRightItem>
                      <MenuPrimaryLink href={url}>
                        <PrimaryItemBar intent={Button.Intent.PRIMARY} {...props}>
                          {text}
                        </PrimaryItemBar>
                      </MenuPrimaryLink>
                    </BarLayoutRightItem>
                  ))}
              <BarLayoutRightItem>
                <SocialButtons>
                  {socialButtons.map(({ platform, url }, i) => (
                    <SocialButtons.Button
                      key={i}
                      icon={platform}
                      backgroundColor={_.shareButtonMenuBackgroundColor}
                      backgroundHoverColor={_.shareButtonMenuBackgroundHoverColor}
                      iconColor={_.shareButtonMenuIconColor}
                      iconHoverColor={_.shareButtonMenuIconHoverColor}
                      spacingBottom={0}
                      url={url}
                      linkProps={{ target: '_blank' }}
                    />
                  ))}
                </SocialButtons>
              </BarLayoutRightItem>
            </BarLayoutRight>
          </BarLayoutContainer>
          {!menuItems.length ? null : (
            <Burger
              {...burgerProps}
              color={_.burgerMenuColor}
              hoverColor={_.burgerMenuHoverColor}
            />
          )}
        </LayoutContainer>
      </AppBar>
      {!menuItems.length ? null : (
        <Portal>
          <Drawer open={open}>
            <LayoutContainer>
              <Burger
                {...burgerProps}
                color={_.burgerMenuOpenColor}
                hoverColor={_.burgerMenuOpenHoverColor}
              />
            </LayoutContainer>
            {menuItems.map(item => (
              <MenuItem>
                <MenuLink href={item.url}>{item.text}</MenuLink>
              </MenuItem>
            ))}
          </Drawer>
        </Portal>
      )}
      {!languageSelectOpen ? null : (
        <Dialog size={Dialog.Size.MEDIUM} onClose={() => setLanguageSelectOpen(false)} overlay>
          <Dialog.Header title="Select Language" onClose={() => setLanguageSelectOpen(false)} />
          Language Select
        </Dialog>
      )}
    </Portal>
  );
}

// <AppMenu left right>
// </AppMenu>
