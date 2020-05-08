import React, { Component } from 'react';
import styled from '../../lib/styled';

const ImageContainer = styled.div`
  width: ${({ itemCount }) => (itemCount ? 100 / itemCount : '100')}%;
  height: 100%;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  &.hasLightbox {
    cursor: pointer;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  left: -999999999px;
  z-index: 999999;
  cursor: pointer;
  > img {
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
    margin: 0;
    position: relative;
  }
  > p {
    margin-top: 10px;
    padding: 0;
    position: relative;
  }
  &.show {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
    left: 0;
  }
`;

export default class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
    };
    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  toggleLightbox() {
    this.setState({ showLightbox: !this.state.showLightbox });
  }

  render() {
    const { item, itemCount, lightbox } = this.props;
    const { showLightbox } = this.state;
    return (
      <ImageContainer itemCount={itemCount}>
        {lightbox ? (
          <Lightbox onClick={() => this.toggleLightbox()} className={showLightbox ? 'show' : ''}>
            <img src={item.url} alt="" />
            <p>{item.description}</p>
          </Lightbox>
        ) : null}
        <Image
          itemCount={itemCount}
          src={item.url}
          className={lightbox ? 'hasLightbox' : ''}
          onClick={() => this.toggleLightbox()}
        />
      </ImageContainer>
    );
  }
}
