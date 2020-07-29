import React, { useState } from 'react';

import _AppBar from '../AppBar';
import _Burger from '../Burger';
import Drawer from '../Drawer';
import Heading from '../Heading';
import Link from '../Link';
import Portal from '../Portal';

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
  height: 100%;
  padding: 0 ${t(_ => _.smallSpacing)};
  margin: 0 auto;
  display: flex;
`;

const Logo = styled.img`
  cursor: pointer;
  height: calc(100% - ${t(_ => _.smallSpacing)});
  margin-top: ${t(_ => _.extraSmallSpacing)};
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

export default function Menu({ items = [], linkWrap, logoImageUrl }) {
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
            <LogoLink href="/">
              <Logo src={logoImageUrl || _.logoImageUrl} />
            </LogoLink>
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
