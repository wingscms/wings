import React from 'react';
import { useIntl } from 'react-intl';
import { Burger, SlideMenu, toggleSlideMenu, useTheme } from '@wingscms/crane';
import ChaptersClose from './ChaptersClose';
import ChaptersLinks from './ChaptersLinks';
import ChaptersToggle from './ChaptersToggle';
import MenuItem from '../../../../components/Navigation/MenuItem';

const _MenuItem = props => {
  const theme = useTheme();
  return <MenuItem backgroundColor={theme.navigationBackgroundColor} {...props} />;
};

export default ({ chapters: _chapters }) => {
  const intl = useIntl();
  const chapters = _chapters.filter(c => c.displaySideMenu);
  return !chapters.length ? null : (
    <>
      <SlideMenu
        left
        customCompTop={() => (
          <div>
            <ChaptersClose
              onClick={e => {
                e.preventDefault();
                toggleSlideMenu(
                  document.getElementById('content-wrapper').classList.contains('chaptersOpen'),
                  'content-wrapper',
                  'chaptersOpen',
                  false,
                );
              }}
            >
              <Burger active color="#000000" type="spin" />
            </ChaptersClose>
            <ChaptersLinks chapters={chapters} />
          </div>
        )}
        items={[]}
        menuItemComp={_MenuItem}
        InternalLink={_MenuItem}
        className="chapters"
      />
      <ChaptersToggle
        title={intl.formatMessage({
          id: 'hummingbird.Navigation.chapterMenu.title',
          description: 'Title for chapter menu',
          defaultMessage: 'Chapters',
        })}
      />
    </>
  );
};
