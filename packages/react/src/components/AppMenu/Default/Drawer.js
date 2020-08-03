import React from 'react';

import {
  Burger as _Burger,
  Button,
  Drawer as _Drawer,
  Heading,
  Portal,
} from '@wingscms/components';

import { t } from '../../../theme';
import styled from '../../../lib/styled';

const LayoutContainer = styled.div`
  display: block;
  position: relative;
  height: ${t(_ => _.largeSpacing)};
  width: 100%;
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
  a {
    color: ${t(_ => _.appMenuDrawerTextColor)};
  }
`;

const Drawer = styled(_Drawer)`
  background-color: ${t(_ => _.appMenuDrawerBackgroundColor)};
`;

const PrimaryItemDrawer = styled(Button)`
  margin: 20px auto;
  display: block;
`;

export default function MenuDefaultDrawer({
  burgerProps,
  menuItems,
  primaryMenuItems,
  open,
  wrapMenuItem,
  wrapPrimaryItem,
}) {
  return !menuItems.length ? null : (
    <Portal>
      <Drawer open={open}>
        <LayoutContainer>
          <Burger {...burgerProps} />
        </LayoutContainer>
        {menuItems.map(item => (
          <MenuItem>{wrapMenuItem(item.text, { url: item.url })}</MenuItem>
        ))}
        {!primaryMenuItems.length
          ? null
          : primaryMenuItems.map(({ url, text, ...props }) =>
              wrapPrimaryItem(
                <PrimaryItemDrawer
                  size={Button.Size.SMALL}
                  intent={Button.Intent.PRIMARY}
                  {...props}
                >
                  {text}
                </PrimaryItemDrawer>,
                { url },
              ),
            )}
      </Drawer>
    </Portal>
  );
}
