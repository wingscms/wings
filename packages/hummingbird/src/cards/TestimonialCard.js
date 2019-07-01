import React, { Component } from 'react';
import qs from 'qs';
import classNames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';
import { createCard, Content } from '@wingscms/react';
import styled from 'styled-components';
import wide from '../styles/wide';

const Testimonial = styled.section`
  ${wide};
  background-color: #f8f8f8;
  padding: 40px 0;
  margin-bottom: 80px;
  margin-top: 80px;
  padding: 80px 0;
  @media screen and (min-width: 1080px) {
    margin-bottom: 4rem;
    margin-top: 4rem;
    padding: 4rem 0;
  }
  header {
    padding: 0 20px;
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (min-width: 600px) {
      margin-bottom: 2rem;
    }
    @media screen and (min-width: 1080px) {
      margin-bottom: 3rem;
    }
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 40px;
    margin-top: 40px;
    padding-bottom: 0;
  }
`;

const Wrap = styled(StickyContainer)`
  max-width: 760px;
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    max-width: 1680px;
    position: relative;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => (theme.brand ? theme.brand : theme.primaryColor)};
  font-size: 2rem;
  line-height: 1;
  font-family: 'Schmalfette', sans-serif;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 600px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 1080px) {
    font-size: 10rem;
  }
  @media screen and (min-width: 1720px) {
    font-size: 10rem;
    line-height: 10rem;
  }
`;

const Intro = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  color: #000;
  max-width: 420px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1080px) {
    font-size: 1.5rem;
    max-width: 760px;
  }
  @media screen and (min-width: 1720px) {
    font-size: 1.5rem;
    max-width: 1120px;
  }
`;

const Image = styled.figure`
  max-width: 740px;
  @media screen and (min-width: 1280px) {
    max-width: 760px;
    &.sticky {
      position: fixed;
      top: 0;
      width: calc(47% - 20px);
      padding: 0;
    }
    &.sticky-bottom {
      position: absolute;
      bottom: 0;
      top: auto;
    }
  }
  @media screen and (min-width: 1720px) {
    &.sticky {
      width: auto;
    }
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: auto;
  }
`;

const ImageWrap = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 1rem;
  max-width: 740px;
  @media screen and (min-width: 600px) {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1280px) {
    width: 47%;
    max-width: 760px;
    float: left;
    margin: 0;
    padding: 0 0 0 20px;
  }
  @media screen and (min-width: 1720px) {
    padding: 0;
    width: 760px;
  }
`;

const ContentWrap = styled.div`
  max-width: 760px;
  padding: 0 20px;
  @media screen and (min-width: 1280px) {
    padding: 0 20px 0 40px;
    float: right;
    width: 50%;
  }
  @media screen and (min-width: 1720px) {
    padding: 0;
    width: 760px;
  }
`;

const mediaUrl = (url, opts = {}) => {
  if (!url) return null;
  if (!Object.keys(opts).length) return url;

  const { width: w, height: h } = opts;
  return `${url}?${qs.stringify({
    w,
    h,
    quality: w || h ? 100 : undefined,
  })}`;
};

class TestimonialCard extends Component {
  static defaultProps = {
    title: '',
    intro: '',
    mediaId: '',
    src: '',
    url: '',
    content: '',
  };
  render() {
    const { title, intro, content, url, ...props } = this.props;
    const sized = mediaUrl(url, { width: 760, height: 1280 });
    return (
      <Testimonial {...props}>
        {!(title || intro) ? null : (
          <header>
            {!title ? null : <Title>{title}</Title>}
            {!intro ? null : <Intro>{intro}</Intro>}
          </header>
        )}
        <Wrap>
          {!sized ? null : (
            <ImageWrap>
              <Sticky disableCompensation>
                {({ isSticky: sticky, distanceFromBottom }) => (
                  <Image
                    className={classNames({
                      sticky,
                      'sticky-bottom': distanceFromBottom < 0,
                    })}
                  >
                    <img src={sized} alt={`portret van ${title}`} />
                  </Image>
                )}
              </Sticky>
            </ImageWrap>
          )}
          <ContentWrap>
            <Content content={content} className="mobiledoc-content" />
          </ContentWrap>
        </Wrap>
      </Testimonial>
    );
  }
}
export default createCard({
  name: 'TestimonialCard',
  renderWith: TestimonialCard,
});
