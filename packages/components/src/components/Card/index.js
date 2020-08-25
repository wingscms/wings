import React, { useState, cloneElement } from 'react';

import AspectRatio from '../AspectRatio';
import _Surface from '../Surface';

import Image from './Image';
import Heading from './Heading';
import HeadingReveal from './HeadingReveal';

import styled, { css } from '../../lib/styled';

const Surface = styled(_Surface)`
  ${({ backgroundImage }) =>
    !backgroundImage
      ? null
      : css`
        background-image: url('${backgroundImage}');
        background-position: center;
        background-size: cover;
  `}
  width: ${({ width }) => width};
  position: relative;
  overflow: hidden;
`;

const ContentAspectRatio = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  flex-shrink: 0;
`;

const Main = styled.main`
  flex-shrink: 0;
  flex-grow: 1;
`;

const Footer = styled.footer`
  flex-shrink: 0;
`;

function Card({ backgroundImage, children: _children, ratio, width }) {
  const [active, setActive] = useState(false);

  const children = React.Children.map(_children, child => {
    return cloneElement(child, {
      active,
    });
  });

  return (
    <Surface
      backgroundImage={backgroundImage}
      elevation={active ? 3 : 1}
      width={width}
      onMouseEnter={() => setActive(true)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
    >
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <ContentAspectRatio>{children}</ContentAspectRatio>
        </AspectRatio>
      ) : (
        <Content>{children}</Content>
      )}
    </Surface>
  );
}

export default Card;

Card.Header = Header;
Card.HeadingReveal = HeadingReveal;
Card.Main = Main;
Card.Footer = Footer;
Card.Image = Image;
Card.Heading = Heading;
