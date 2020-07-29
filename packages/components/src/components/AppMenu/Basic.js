import React, { useState } from 'react';

import _AppBar from '../AppBar';
import _Burger from '../Burger';
import Drawer from '../Drawer';
import Heading from '../Heading';
import Link from '../Link';
import Portal from '../Portal';
import _SocialButtons from '../SocialButtons';

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
  height: 100%;
  margin: 0 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  height: calc(${t(_ => _.largeSpacing)} - 20px);
  display: block;
  margin-right: auto;
  padding: 0;
  vertical-align: top;
  justify-self: flex-start;
`;

const SocialButtons = styled(_SocialButtons)`
  @media screen and (max-width: 1300px) {
    margin-right: ${({ primaryItem }) => (primaryItem ? '0' : '50px')};
  }
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

export default function Menu({ items = [], linkWrap, logoImageUrl, socialButtons }) {
  const _ = useTheme();
  const [open, setOpen] = useState(false);

  const MenuLink = wrapLink(linkWrap)(Link);
  const LogoLink = wrapLink(linkWrap)(({ children, ...props }) => <a {...props}>{children}</a>);

  const burgerProps = {
    eaten: open,
    height: _.burgerHeight,
    width: _.burgerWidth,
    barHeight: _.burgerBarHeight,
    barBorderRadius: _.burgerBarBorderRadius,
    onClick: () => setOpen(!open),
  };

  return (
    <>
      <AppBar position={AppBar.Position.TOP}>
        <LayoutContainer>
          <BarLayoutContainer>
            {logoImageUrl || _.logoImageUrl ? (
              <LogoLink href="/">
                <Logo src={logoImageUrl || _.logoImageUrl} />
              </LogoLink>
            ) : null}
            <BarLayoutRight>
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
            </BarLayoutRight>
          </BarLayoutContainer>
          {!items.length ? null : (
            <Burger
              {...burgerProps}
              color={_.burgerMenuColor}
              hoverColor={_.burgerMenuHoverColor}
            />
          )}
        </LayoutContainer>
      </AppBar>
      {!items.length ? null : (
        <Portal>
          <Drawer open={open}>
            <LayoutContainer>
              <Burger
                {...burgerProps}
                color={_.burgerMenuOpenColor}
                hoverColor={_.burgerMenuOpenHoverColor}
              />
            </LayoutContainer>
            {items.map(item => (
              <MenuItem>
                <MenuLink href={item.url}>{item.text}</MenuLink>
              </MenuItem>
            ))}
          </Drawer>
        </Portal>
      )}
    </>
  );
}
