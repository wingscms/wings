import React from 'react';

import AspectRatio from '../AspectRatio';
import _Surface from '../Surface';

import Image from './Image';
import Heading from './Heading';

import styled from '../../lib/styled';

const Surface = styled(_Surface)`
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

function Card({ children, ratio, width }) {
  return (
    <Surface elevation={1} width={width}>
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
Card.Main = Main;
Card.Footer = Footer;
Card.Image = Image;
Card.Heading = Heading;
