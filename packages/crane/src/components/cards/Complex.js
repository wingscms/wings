import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Calendar, Check, Message, Pin, User } from '../icons';
import { Counter } from '../atoms';
import Container from './Container';

const OuterContainer = styled.div`
  display: block;
  height: auto;
  cursor: pointer;
  border-radius: 4px;
`;

const StyledContainer = styled(Container)`
  transition: 0.2s all ease-in-out;
  &.active,
  &:active,
  &:hover {
    box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.6)' : 'none')};
    .bottomContent {
      transform: translateY(-99%);
      > .titleWrapper {
        height: auto;
        overflow: auto;
        > h2 {
          max-height: 100%;
          overflow: hidden;
        }
      }
    }
    .topContent {
      transform: translateY(0%);
      > .topContentHidden {
        transition: all 0.2s ease-in-out;
        margin-top: 0;
      }
      > .topContentVisible {
        transition: all 0.2s ease-in-out;
        padding-top: 0;
      }
    }
    .cardImage {
      &:after {
        opacity: 0.3;
      }
    }
  }
`;

const Image = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  margin-left: 0px;
  top: 0;
  left: 0;
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
  display: block;
  position: absolute;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 10px 20px 10px 20px;
  height: auto;
  top: 100%;
  transform: translateY(-72px);
  transition: all 0.2s ease-in-out;
  text-shadow: ${({ bottomBackground }) =>
    (bottomBackground ? 'none' : '0px 0px 5px rgba(0, 0, 0, 0.7);')};
  background-color: ${({ bottomBackground }) => (bottomBackground ? '#ffffff' : 'transparent')};
  box-shadow: ${({ bottomBackground }) =>
    (bottomBackground ? '0 0 20px 0 rgba(0, 0, 0, 0.2)' : 'none')};
  > .titleWrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    position: relative;
    min-height: 52px;
    > h2 {
      user-select: none;
      color: ${({ bottomBackground }) => (bottomBackground ? '#000000' : '#ffffff')};
      transition: 0.1s all linear;
      font-size: 20px;
      line-height: 26px;
      min-height: 0;
      max-height: 52px;
      margin: auto;
      overflow: hidden;
      padding: 0;
      text-align: left;
      width: 100%;
      padding-right: 1rem;
      position: relative;
      &:before {
        font-size: 20px;
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
        ${({ bottomBackground }) => (bottomBackground ? '' : 'display: none;')} font-weight: bold;
        z-index: 5;
      }
      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 1rem;
        height: 2rem;
        margin-top: 0.3rem;
        background: #ffffff;
        z-index: 10;
        ${({ bottomBackground }) =>
    (bottomBackground ? 'display: block' : 'display: none;')} z-index: 10;
      }
    }
  }
  p {
    user-select: none;
    color: ${({ bottomBackground }) => (bottomBackground ? '#000000' : '#ffffff')};
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
      transform: translateY(-80px);
      > .titleWrapper {
        min-height: 60px;
        > h2 {
          font-size: 30px;
          line-height: 40px;
          max-height: 40px;
        }
        > p {
          font-size: 20px;
        }
      }
    }
  }
`;

const TopContent = styled.div`
  text-shadow: ${({ topBackground }) =>
    (topBackground ? 'none' : '0px 0px 5px rgba(0, 0, 0, 0.7);')};
  display: block;
  position: absolute;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 20px 0 0 20px;
  top: 0;
  transform: translateY(-100%);
  transition: all 0.2s ease-in-out;
  background-color: ${({ topBackground }) => (topBackground ? '#ffffff' : 'transparent')};
  box-shadow: ${({ topBackground }) => (topBackground ? '0 0 20px 0 rgba(0, 0, 0, 0.2)' : 'none')};
  > div {
    margin: 0;
    user-select: none;
    color: ${({ topBackground }) => (topBackground ? '#000000' : '#ffffff')};
    width: 100%;
    margin: 0;
    font-size: 12px;
  }
  .topContentHidden {
    transition: all 0.2s ease-in-out;
    margin-top: -100%;
    width: 100%;
  }
  .topContentVisible {
    position: absolute;
    top: 100%;
    width: 100%;
    padding-top: 20px;
    transition: all 0.2s ease-in-out;
  }
  svg {
    width: 30px;
    height: 30px;
    margin: -5px 10px 0 0;
    position: absolute;
    left: 0;
    filter: drop-shadow(0 0 10px #000);
    transition: all 0.2s ease-in-out;
    stroke: ${({ topBackground }) => (topBackground ? '#000' : '#fff')};
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
  &:after {
    text-shadow: none;
    position: absolute;
    top: 3px;
    left: -35px;
    content: '${({ day }) => day || 8}';
    height: 20px;
    width: 20px;
    text-align: center;
    color: #fff;
    font-size: 10px;
    display: block;
  }
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
  display: block;
  user-select: none;
  position: relative;
  padding: 0px 0 0 40px;
  height: 40px;
  font-size: 12px;
  width: 100%;
`;

const formatMinutes = m => (m < 10 ? `0${m}` : m);

export default class ComplexCard extends Component {
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
    bottomBackground: PropTypes.bool,
    /** Number of comments. */
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
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Summary text for the card. */
    summary: PropTypes.string.isRequired,
    /** Title text for the card. */
    title: PropTypes.string.isRequired,
    /** Toggles solid white/transparent background of the top content. */
    topBackground: PropTypes.bool,
  };

  static defaultProps = {
    author: '',
    borderRadius: '4',
    bottomBackground: false,
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
    topBackground: false,
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
      bottomBackground,
      topBackground,
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
        onClick={
          onClickHandler ||
          (() => {
            console.log('no card onClick hander');
          })
        }
        {...props}
      >
        <StyledContainer
          className={`${active ? 'active' : ''} ${size || 'medium'}`}
          size={size}
          shadow={shadow}
          borderRadius={borderRadius || 4}
        >
          {image ? <Image className="cardImage" backgroundImage={image} /> : null}
          <TopContent className="topContent" topBackground={topBackground}>
            <div className="topContentHidden">
              {author ? (
                <Info>
                  <User title="author" />
                  <InfoSpan>{author}</InfoSpan>
                </Info>
              ) : null}
              {publishDate ? (
                <Info>
                  <Calendar title="publish date" />
                  <DateSpan day={publish.getDate()}>
                    {publish.getDate()}-{publish.getMonth() + 1}-{publish.getFullYear()}{' '}
                  </DateSpan>
                </Info>
              ) : null}
              {commentCount ? (
                <Info>
                  <Message title="comments" />
                  <InfoSpan>{commentCount}</InfoSpan>
                </Info>
              ) : null}
              {location && location.name ? (
                <Info>
                  <Pin title="location" />
                  <InfoSpan>{location.name ? `${location.name} ` : null}</InfoSpan>
                </Info>
              ) : null}
            </div>
            <div className="topContentVisible">
              {signatureCount ? (
                <Info>
                  <Check title="signatures" />
                  <InfoSpan>
                    <Counter
                      max={signatureMax || 1000}
                      current={signatureCount}
                      height="8"
                      barColor="#fff"
                      borderColor="#fff"
                    />
                  </InfoSpan>
                </Info>
              ) : null}
              {startDate ? (
                <Info>
                  <Calendar title="Start date" />
                  <DateSpan day={start.getDate()}>
                    {formatMinutes(start.getDate())}-{formatMinutes(start.getMonth() + 1)}-
                    {start.getFullYear()} {start.getUTCHours() + 1}:
                    {formatMinutes(start.getUTCMinutes())}
                  </DateSpan>
                </Info>
              ) : null}
            </div>
          </TopContent>
          <BottomContent className="bottomContent" bottomBackground={bottomBackground}>
            <div className="titleWrapper">
              <h2>{title}</h2>
            </div>
            <p>{summary}</p>
            {ctaText ? <p className="labelText">{ctaText}</p> : null}
          </BottomContent>
        </StyledContainer>
      </OuterContainer>
    );
  }
}
