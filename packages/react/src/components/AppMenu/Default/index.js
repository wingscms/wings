import React, { useState } from 'react';
import { Portal } from '@wingscms/components';

import LanguageSelectionDialog from '../../LanguageSelectionDialog';
import { wrapLink } from '../../../lib/utils';
import { useTheme } from '../../../theme';

import Bar from './Bar';
import Drawer from './Drawer';

export default function DefaultMenu({
  menu: { items: _menuItems = [], wrapItem: wrapMenuItem },
  logo,
  socialButtons,
  translations,
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
          color: _.burgerMenuColor,
          hoverColor: _.burgerMenuHoverColor,
        }}
        languageSelectOnClick={() => setLanguageSelectOpen(true)}
        logo={{ ...logo, url: logo.url || _.logoImageUrl }}
        menuItems={menuItems}
        primaryMenuItems={primaryMenuItems}
        socialButtons={socialButtons}
        socialButtonsProps={socialButtonsProps}
        wrapMenuItem={wrapMenuItem}
      />
      <Drawer
        burgerProps={{
          ...burgerProps,
          color: _.burgerMenuOpenColor,
          hoverColor: _.burgerMenuHoverOpenColor,
        }}
        menuItems={menuItems}
        open={open}
        primaryMenuItems={primaryMenuItems}
        wrapMenuItem={wrapMenuItem}
      />
      {translations && !languageSelectOpen ? null : (
        <LanguageSelectionDialog
          onClose={() => setLanguageSelectOpen(false)}
          current={translations?.current}
          translations={translations?.translations}
          wrapTranslation={wrapLink(translations?.wrapTranslation)}
        />
      )}
    </Portal>
  );
}
