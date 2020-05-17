import React, { Component } from 'react';
import qs from 'qs';
import classNames from 'classnames';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { wide } from '@wingscms/components';

import { StickyContainer, Sticky } from '../../lib/react-sticky';
import styled from '../../lib/styled';
import Content from '../MobiledocRenderer';
import createCard from '../../createCard';
import { t } from '../../theme';

const Testimonial = styled.section`
  ${wide};
  background-color: ${t(_ => _.testimonialBackgroundColor)};
  margin-top: ${t(_ => _.largeSpacing)};
  margin-bottom: ${t(_ => _.largeSpacing)};
  padding: ${t(_ => _.largeSpacing)} 0;
  header {
    padding: 0 20px;
    text-align: center;
    margin-bottom: ${t(_ => _.largeSpacing)};
    @media screen and (max-width: 800px) {
      margin-bottom: ${t(_ => _.mediumSpacing)};
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: ${t(_ => _.mediumSpacing)};
    margin-bottom: ${t(_ => _.mediumSpacing)};
    padding: ${t(_ => _.mediumSpacing)} 0;
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

const Title = styled.h1`
  color: ${t(_ => _.primaryColor)};
  text-transform: ${t(_ => _.titleTransform)};
  line-height: 1;
  font-family: ${t(_ => _.headerFontFamily)};
  position: relative;
  z-index: 1;
  font-size: 32px;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

const Intro = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Image = styled.figure`
  max-width: 760px;
  transition: 0.2s all ease-in-out;
  @media screen and (min-width: 1280px) {
    max-width: 760px;
    &.sticky {
      position: fixed;
      top: 0;
      margin-top: ${t(_ => _.mediumSpacing)};
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
  margin: ${t(_ => `${_.mediumSpacing} ${_.smallSpacing}`)};
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
      <Testimonial {...filterInvalidDOMProps(props)}>
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
            <Content content={content} mini />
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
