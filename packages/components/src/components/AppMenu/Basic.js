import React, { useState } from 'react';

import _AppBar from '../AppBar';
import _Burger from '../Burger';
import Drawer from '../Drawer';
import Heading from '../Heading';
import Link from '../Link';
import Portal from '../Portal';

import { t, useTheme } from '../../theme';
import styled from '../../lib/styled';

const BarLayout = styled.div`
  display: block;
  position: relative;
  height: ${t(_ => _.largeSpacing)};
  width: 100%;
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

export default function Menu({ items = [] }) {
  const [open, setOpen] = useState(false);
  const _ = useTheme();
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
        {!items.length ? null : (
          <Burger {...burgerProps} color={_.burgerMenuColor} hoverColor={_.burgerMenuHoverColor} />
        )}
      </AppBar>
      {!items.length ? null : (
        <Portal>
          <Drawer open={open}>
            <BarLayout>
              <Burger
                {...burgerProps}
                color={_.burgerMenuOpenColor}
                hoverColor={_.burgerMenuOpenHoverColor}
              />
            </BarLayout>
            {items.map(item => (
              <MenuItem>
                <Link>{item.text}</Link>
              </MenuItem>
            ))}
          </Drawer>
        </Portal>
      )}
    </>
  );
}
