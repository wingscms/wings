/* eslint-disable no-template-curly-in-string */

import React from 'react';
import styled from '../lib/styled';
import { text, boolean } from '@storybook/addon-knobs/react';
import { MenuItem } from '../../../src/components/menu';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  ul {
    padding: 0;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  a {
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    &:hover {
      color: #4856c9;
    }
  }
  &.special {
    > a {
      padding: 10px;
      border-radius: 4px;
      color: #fff;
      background-color: #000;
      &:hover {
        color: #4856c9;
      }
    }
  }
`;

const StyledMenuItemWithChildren = styled(MenuItem)`
  position: relative;
  display: block;
  overflow: visible;
  width: 200px;
  text-align: center;
  background-color: #efefef;
  a {
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    &:hover {
      color: #4856c9;
    }
  }
  ul {
    display: none;
    position: absolute;
    left: 100%;
    padding-left: 9px;
    top: 0;
    &:after {
      content: '';
      position: absolute;
      top: 12px;
      left: 0px;
      transform: translateY(-50%);
      border-top: 9px solid transparent;
      border-right: 9px solid #efefef;
      border-bottom: 9px solid transparent;
    }
    > ${StyledMenuItem} {
      background-color: #efefef;
      width: 200px;
    }
  }
  &:hover {
    > ul {
      display: block;
    }
  }
`;

export const MenuItemInfo = `
  The styles of a menu item can be extended using styled components:
  
  ~~~js
  import { MenuItem } from '@bolster/crane';

  const StyledMenuItem = styled(MenuItem)\`
    a {
      color: #000000;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 24px;
      &:hover {
        color: #4856c9;
      }
    }
  \`;
  ~~~

  Different functionality might be desired for internal and external links, so React components can be passed as props, or else a standard <a/> element is used:

  ~~~js
    import { Link } from 'gatsby';
    
    // ...

    <MenuItem to="/article-slug" InternalLink={Link} text="Article Name" />
    <MenuItem to="http://www.bureaubolster.nl" text="Bureau Bolster" external />
  ~~~

  Children can be added to create submenus:

  ~~~js
    const StyledMenuItemWithChildren = styled(StyledMenuItem)\`
      position: relative;
      display: block;
      overflow: visible;
      width: 200px;
      text-align: center;
      background-color: #efefef;
      ul {
        display: none;
        position: absolute;
        left: 100%;
        padding-left: 9px;
        top: 0;
        &:after {
          content: '';
          position: absolute;
          top: 12px;
          left: 0px;
          transform: translateY(-50%);
          border-top: 9px solid transparent;
          border-right: 9px solid #efefef;
          border-bottom: 9px solid transparent;
        }
        > ${'${StyledMenuItem}'} {
          background-color: #efefef;
          width: 200px;
        }
      }
      &:hover {
        > ul {
          display: block;
        }
      }
    \`;
  ~~~

  ~~~js
    // pseudocode
    <ul>
      <StyledMenuItemWithChildren>
        <ul>
          <StyledMenuItem/>
          <StyledMenuItem/>
          <StyledMenuItem/>
        </ul>
      </StyledMenuItemWithChildren>
    </ul>
  ~~~
`;

export const MenuItemStory = () => (
  <Wrapper>
    <p>Basic:</p>
    <ul>
      <MenuItem
        special={boolean('special', false)}
        to={text('to', 'http://www.bureaubolster.nl')}
        text={text('example text', 'Menu link')}
        target={text('target', '_blank')}
        external
      />
    </ul>
    <p>Example with styles:</p>
    <ul>
      <StyledMenuItem
        special={boolean('special', false)}
        to={text('to', 'http://www.bureaubolster.nl')}
        text={text('example text', 'Menu link')}
        target={text('target', '_blank')}
        external
      />
    </ul>
    <p>Example with children:</p>
    <ul>
      <StyledMenuItemWithChildren
        to={text('to', 'http://www.bureaubolster.nl')}
        text="Parent"
        target={text('target', '_blank')}
        external
      >
        <ul>
          <StyledMenuItem
            to={text('to', 'http://www.bureaubolster.nl')}
            text="Child"
            target={text('target', '_blank')}
            external
          />
          <StyledMenuItemWithChildren
            to={text('to', 'http://www.bureaubolster.nl')}
            text="Child"
            target={text('target', '_blank')}
            external
          >
            <ul>
              <StyledMenuItem
                to={text('to', 'http://www.bureaubolster.nl')}
                text="Child"
                target={text('target', '_blank')}
                external
              />
              <StyledMenuItem
                to={text('to', 'http://www.bureaubolster.nl')}
                text="Child"
                target={text('target', '_blank')}
                external
              />
              <StyledMenuItem
                to={text('to', 'http://www.bureaubolster.nl')}
                text="Child"
                target={text('target', '_blank')}
                external
              />
            </ul>
          </StyledMenuItemWithChildren>
        </ul>
      </StyledMenuItemWithChildren>
    </ul>
  </Wrapper>
);
