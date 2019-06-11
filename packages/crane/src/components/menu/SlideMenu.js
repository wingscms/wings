import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import MenuItem from './MenuItem';

const Menu = styled.ul`
  display: block;
  position: absolute;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colorNavigationMenuBackground || '#fff'};
  left: ${props => (props.left ? '-300px' : '100%')};
  height: calc(100vh + 4px);
  overflow: scroll;
  top: -4px;
  margin: 0;
  width: 300px;
  transition: 0.2s all ease-in-out;
  @media screen and (max-width: 800px) {
    left: ${props => (props.left ? '-300px' : '100vw')};
    height: 100vh;
    border-left: 0;
    z-index: 20;
    width: 100vw;
    transition: 0.4s all ease-in-out;
  }
  > ul {
    display: block;
    position: relative;
    width: 100%;
    margin: 0;
    padding-top: 80px;
  }
`;

const isExternal = url => url[0] !== '/';
const isCurrent = url => url === (typeof window !== 'undefined' ? window.location.pathname : '');

export default function SlideMenu({
  className,
  customCompBottom,
  customCompTop,
  visible,
  items = [],
  menuItemComp,
  InternalLink,
  ExternalLink,
  left,
}) {
  const Item = menuItemComp || MenuItem;
  const CustomCompTop = customCompTop || <div />;
  const CustomCompBottom = customCompBottom || <div />;
  return (
    <Menu className={classNames(className || '', { visible }, 'slide-menu')} left={left}>
      {customCompTop ? <CustomCompTop /> : null}
      {items.map(item => (
        <Item
          text={item.text}
          to={item.url}
          key={`menu-item-${item.text}`}
          InternalLink={InternalLink}
          ExternalLink={ExternalLink}
          external={isExternal(item.url)}
          current={isCurrent(item.url)}
        >
          {!item.items ? null : (
            <ul>
              {item.items.map(_item => (
                <Item
                  key={`menu-item-${_item.text}`}
                  text={_item.text}
                  to={_item.url}
                  InternalLink={InternalLink}
                  ExternalLink={ExternalLink}
                  external={isExternal(item.url)}
                  current={isCurrent(item.url)}
                />
              ))}
            </ul>
          )}
        </Item>
      ))}
      {customCompBottom ? <CustomCompBottom /> : null}
    </Menu>
  );
}

export const toggleSlideMenu = (
  show,
  containerId = 'content-wrapper',
  toggleClass = 'navOpen',
  fixed = true,
) => {
  const elem = document.getElementById(containerId);
  if (!elem) return;
  if (show === false) {
    elem.classList.add(toggleClass, fixed ? 'fixed' : 'not-fixed');
  } else {
    document
      .getElementById(containerId)
      .classList.remove(toggleClass, fixed ? 'fixed' : 'not-fixed');
  }
};
