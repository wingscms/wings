import React, { Component } from 'react';
import styled from '../../lib/styled';
import PropTypes from 'prop-types';
import Container from './Container';
import Counter from '../Counter';

const OuterContainer = styled.div`
  display: block;
  height: auto;
  cursor: pointer;
  border-radius: 4px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const StyledContainer = styled(Container)`
  transition: 0.2s all ease-in-out;
  position: relative;
  &.active,
  &:active,
  &:hover {
    box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.6)' : 'none')};
    .cardImage {
      &:after {
        opacity: 0.3;
      }
    }
  }
`;

const Image = styled.div`
  display: block;
  position: relative;
  padding-top: 56.25%;
  height: auto;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  top: 0;
  flex-basis: auto;
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.1s all linear;
  .large & {
    @media screen and (min-width: 645px) {
      display: inline-block;
      float: left;
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }
  }
  &:after {
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0;
  }
`;

const BottomContent = styled.div`
  padding: 20px;
  background-color: ${({ bottomBackgroundColor }) => bottomBackgroundColor};
  ${({ image }) =>
    image
      ? `.large & {
    @media screen and (min-width: 645px) {
      display: inline-flex;
      float: right;
      width: 50%;
      min-width: 50%;
      max-width: 50%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      transition: all 0.2s ease-in-out;
    }
  }`
      : ''} > h2 {
    user-select: none;
    color: ${({ bottomTextColor }) => bottomTextColor};
    transition: 0.1s all linear;
    font-size: 20px;
    line-height: 26px;
    margin: 10px 0;
    overflow: hidden;
    padding: 0;
    text-align: left;
    width: 100%;
    padding-right: 1rem;
    position: relative;
  }
  p {
    user-select: none;
    color: ${({ bottomTextColor }) => bottomTextColor};
    width: 100%;
    margin: 10px 0;
    padding: 0;
    font-size: 16px;
    line-height: 22px;
    &.labelText {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 12px;
      padding: 0;
    }
  }
  .large & {
    @media screen and (min-width: 645px) {
      > h2 {
        font-size: 30px;
        line-height: 40px;
        overflow: initial;
      }
      > p {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  svg {
    width: 30px;
    height: 30px;
    margin: -5px 10px 0 0;
    position: absolute;
    left: 0;
    transition: all 0.2s ease-in-out;
    stroke: #000;
    stroke-width: 2;
    fill: none;
  }
`;

const DateSpan = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  user-select: none;
  margin-top: 5px;
`;

const InfoWrapper = styled.div`
  display: block;
  position: relative;
  margin-top: 20px;
`;

const InfoSpan = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  user-select: none;
  margin-top: 5px;
  width: calc(100% - 30px);
  padding-right: 10px;
`;

const Info = styled.div`
  float: left;
  user-select: none;
  position: relative;
  padding: 0 0 0 0;
  height: 40px;
  font-size: 12px;
  margin-right: 10px;
  width: auto;
  min-width: calc(50% - 10px);
  color: #999;
`;

const formatMinutes = m => (m < 10 ? `0${m}` : m);

export default class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  static propTypes = {
    /** Author or authors of the node. */
    author: PropTypes.string,
    /** Border radius, pixels. Default = 4 */
    borderRadius: PropTypes.string,
    /** Toggles solid white/transparent background of the bottom content. */
    bottomTextColor: PropTypes.string,
    /** Bottom section text color */
    bottomBackgroundColor: PropTypes.string,
    /** Bottom section background color */
    commentCount: PropTypes.string,
    /** Call to action text. */
    ctaText: PropTypes.string,
    /** URI of the background image. */
    image: PropTypes.string,
    /** Location object { name[, street, city, zip, country] }. */
    location: PropTypes.object,
    /** onClick handler funtion. */
    onClickHandler: PropTypes.func,
    /** Article publish date. A string that can be converted into a JS Date object. */
    publishDate: PropTypes.string,
    /** Toggles background shadow for the card. */
    shadow: PropTypes.bool,
    /** Number of signatures. */
    signatureCount: PropTypes.number,
    /** Max number of signatures (or current target). Used for the counter. */
    signatureMax: PropTypes.number,
    /** Size of the cards. 'medium' or 'large'. */
    size: PropTypes.string,
    /** Event publish date. A string that can be converted into a JS Date object. */
    startDate: PropTypes.string,
    /** Summary text for the card. */
    summary: PropTypes.string.isRequired,
    /** Title text for the card. */
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: '',
    borderRadius: '4',
    bottomBackgroundColor: '#fff',
    bottomTextColor: '#000',
    commentCount: '',
    ctaText: '',
    image: '',
    location: {},
    onClickHandler: () => {},
    publishDate: '',
    shadow: true,
    signatureCount: 0,
    signatureMax: 0,
    size: 'medium',
    startDate: '',
  };

  toggleActive(x) {
    this.setState({ active: x });
  }

  render() {
    const { active } = this.state;
    const {
      author,
      borderRadius,
      ctaText,
      image,
      location,
      title,
      signatureCount,
      signatureMax,
      commentCount,
      publishDate,
      shadow,
      startDate,
      summary,
      size,
      onClickHandler,
      bottomBackgroundColor,
      bottomTextColor,
      ...props
    } = this.props;
    const start = new Date(startDate);
    const publish = new Date(publishDate);
    return (
      <OuterContainer
        onMouseEnter={() => {
          this.toggleActive(true);
        }}
        onTouchStart={() => {
          this.toggleActive(true);
        }}
        onTouchEnd={() => {
          this.toggleActive(false);
        }}
        onMouseLeave={() => {
          this.toggleActive(false);
        }}
        onClick={onClickHandler || (() => {})}
        {...props}
      >
        <StyledContainer
          className={`${active ? 'active' : ''} ${size || 'medium'}`}
          size={size}
          shadow={shadow}
          borderRadius={borderRadius}
        >
          <InnerContainer>
            {image ? <Image backgroundImage={image} /> : null}
            <BottomContent
              image={image}
              bottomBackgroundColor={bottomBackgroundColor}
              bottomTextColor={bottomTextColor}
            >
              <h2>{title}</h2>
              <p>{summary}</p>
              <InfoWrapper>
                {ctaText ? <p className="labelText">{ctaText}</p> : null}
                {author ? (
                  <Info>
                    <InfoSpan>{author}</InfoSpan>
                  </Info>
                ) : null}
                {publishDate ? (
                  <Info>
                    <DateSpan day={publish.getDate()}>
                      {publish.getDate()}-{publish.getMonth() + 1}-{publish.getFullYear()}{' '}
                    </DateSpan>
                  </Info>
                ) : null}
                {commentCount ? (
                  <Info>
                    <InfoSpan>{commentCount} comments</InfoSpan>
                  </Info>
                ) : null}
                {location && location.name ? (
                  <Info>
                    <InfoSpan>
                      {location.name ? `${location.name} ` : null}
                      {location.street ? `${location.street} ` : null}
                      {location.city ? `${location.city} ` : null}
                      {location.zip ? `${location.zip} ` : null}
                      {location.country ? `${location.country} ` : null}
                    </InfoSpan>
                  </Info>
                ) : null}
                {signatureCount ? (
                  <Info>
                    <InfoSpan>
                      <Counter max={signatureMax || 1000} current={signatureCount} height="8" />
                    </InfoSpan>
                  </Info>
                ) : null}
                {startDate ? (
                  <Info>
                    <DateSpan day={start.getDate()}>
                      {start.getDate()}-{start.getMonth() + 1}-{start.getFullYear()}{' '}
                      {start.getUTCHours() + 1}:{formatMinutes(start.getUTCMinutes())}
                    </DateSpan>
                  </Info>
                ) : null}
              </InfoWrapper>
            </BottomContent>
          </InnerContainer>
        </StyledContainer>
      </OuterContainer>
    );
  }
}
