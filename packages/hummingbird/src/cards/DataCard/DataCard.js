import React, { Component } from 'react';
import { createCard } from '@wingscms/react';
import { Breakout, Gallery } from '@wingscms/crane';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Chart from './Chart';
import Video from './Video';
import Audio from './Audio';
import Collection from './Collection';
import SignupEmbed from './SignupEmbed';
import SimpleSignup from './SimpleSignup';
import Donation from './Donation';

class DataCardView extends Component {
  renderCards() {
    if (this.props.schema === 'fundraiser') {
      return <Donation fundraiserId={this.props.data.fundraiserId} />;
    }
    const { json } = this.props;
    const data = this.props.data || JSON.parse(json);
    switch (data.type) {
      case 'audio':
        return <Audio src={data.src} />;
      case 'chart':
        return <Chart chartData={data.chartData} />;
      case 'cloudinary':
        if (data.resourceType === 'video') {
          return (
            <Video
              cloudName={data.cloudName}
              videoId={data.id}
              autoplay={data.autoplay}
              muted={data.muted}
            />
          );
        }
        return <div />;
      case 'collection':
        return <Collection items={data.items} />;
      case 'highlightedText':
        return (
          <Breakout
            title={data.highlightedTextData.title}
            text={data.highlightedTextData.text}
            expandable={data.highlightedTextData.expandable}
            closeText={data.highlightedTextData.closeText || 'Minder'}
            openText={data.highlightedTextData.openText || 'Meer'}
            toggleFontFamily="Open Sans"
            shadow
          />
        );
      case 'breakout':
        return (
          <Breakout
            title={data.title}
            text={data.text}
            expandable={data.expandable}
            closeText={data.closeText || 'Minder'}
            openText={data.openText || 'Meer'}
            toggleFontFamily="Open Sans"
            shadow
          />
        );
      case 'gallery':
        return <Gallery {...data.options} items={data.items} />;
      case 'simpleSignup':
        return <SimpleSignup {...data} />;
      case 'petitionEmbed':
        return (
          <SignupEmbed
            type="petition"
            signupId={data.petitionId}
            ctaText={data.ctaText}
            ctaButtonText={data.ctaButtonText}
            useBackgroundImage={data.useBackgroundImage}
            expandable={data.expandable}
          />
        );
      case 'eventEmbed':
        return (
          <SignupEmbed
            type="event"
            signupId={data.eventId}
            ctaText={data.ctaText}
            ctaButtonText={data.ctaButtonText}
            useBackgroundImage={data.useBackgroundImage}
            expandable={data.expandable}
          />
        );
      case 'twitter':
        return <TwitterTweetEmbed tweetId={data.tweetId} />;
      case 'donation':
        return <Donation fundraiserId={data.fundraiserId} />;
      default:
        return <div />;
    }
  }
  render() {
    return this.renderCards();
  }
}

export default createCard({
  name: 'DataCard',
  renderWith: DataCardView,
});
