import React, { useState } from 'react';
import { Link, Portal } from '@wingscms/components';

import LanguageSelectionDialog from '../../LanguageSelectionDialog';
import { useTheme } from '../../../theme';

import Bar from './Bar';
import Drawer from './Drawer';

export default function DefaultMenu({
  menu: {
    items: _menuItems = [],
    wrapItem: wrapMenuItem = (e, { url }) => (
      <Link type={Link.Style.LINE_GROW} href={url}>
        {e}
      </Link>
    ),
    wrapPrimaryItem = (e, { url }) => (
      <a style={{ textDecoration: 'none' }} href={url}>
        {e}
      </a>
    ),
  },
  logo: { wrap: wrapLogo = (e, { url }) => <a href={url}>{e}</a>, ...logo },
  socialButtons,
  translations: {
    wrap: wrapTranslation = (e, { translation: { url } }) => <a href={url}>{e}</a>,
    ...translations
  },
}) {
  const _ = useTheme();
  const [open, setOpen] = useState(false);
  const [languageSelectOpen, setLanguageSelectOpen] = useState(false);

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

  const socialButtonsProps = {
    backgroundColor: _.shareButtonMenuBackgroundColor,
    backgroundHoverColor: _.shareButtonMenuBackgroundHoverColor,
    iconColor: _.shareButtonMenuIconColor,
    iconHoverColor: _.shareButtonMenuIconHoverColor,
    spacingBottom: 0,
    linkProps: { target: '_blank' },
  };

  return (
    <Portal>
      <Bar
        burgerProps={{
          ...burgerProps,
          color: _.appMenuBarBurgerColor,
          hoverColor: _.appMenuBarBurgerHoverColor,
        }}
        languageSelectOnClick={() => setLanguageSelectOpen(true)}
        logo={{ ...logo, imageUrl: logo.imageUrl || _.logoImageUrl, wrap: wrapLogo }}
        menuItems={menuItems}
        primaryMenuItems={primaryMenuItems}
        socialButtons={socialButtons}
        socialButtonsProps={socialButtonsProps}
        wrapPrimaryItem={wrapPrimaryItem}
      />
      <Drawer
        burgerProps={{
          ...burgerProps,
          color: _.appMenuDrawerBurgerColor,
          hoverColor: _.appMenuDrawerBurgerHoverColor,
        }}
        menuItems={menuItems}
        open={open}
        primaryMenuItems={primaryMenuItems}
        wrapMenuItem={wrapMenuItem}
        wrapPrimaryItem={wrapPrimaryItem}
      />
      {!translations || !languageSelectOpen ? null : (
        <LanguageSelectionDialog
          onClose={() => setLanguageSelectOpen(false)}
          current={translations.current}
          translations={translations.translations}
          wrapTranslation={wrapTranslation}
          overlay
        />
      )}
    </Portal>
  );
}
