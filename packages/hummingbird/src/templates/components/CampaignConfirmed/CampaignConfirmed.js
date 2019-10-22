import React, { Component } from 'react';
import qs from 'qs';
import Campaign from '../Campaign';

import FundraiserText from './FundraiserText';
import NonFundraiserText from './NonFundraiserText';
import ShareButtons from './ShareButtons';

const Content = props => {
  const {
    pageContext: {
      node: { resourceType },
    },
    location,
  } = props;
  return (
    <React.Fragment>
      {resourceType === 'node.fundraiser' ? (
        <FundraiserText status={qs.parse(location.search.replace('?', '')).transaction_status} />
      ) : (
        <NonFundraiserText />
      )}
      <ShareButtons {...props} />
    </React.Fragment>
  );
};

class Main extends Component {
  static defaultProps = {
    children: [<Content />],
  };

  childProps = () => {
    const { children, ...props } = this.props;
    return {
      ...props,
      ...this.props.childProps,
    };
  };

  children = (children = this.props.children) => {
    const props = this.childProps();
    return React.Children.map(children, element => React.cloneElement(element, props));
  };

  render() {
    return <Campaign.Content {...this.props}>{this.children()}</Campaign.Content>;
  }
}

export default class CampaignConfirmed extends Component {
  static Navigation = Campaign.Navigation;
  static FundraiserText = FundraiserText;
  static NonFundraiserText = NonFundraiserText;
  static ShareButtons = ShareButtons;
  static Content = Content;
  static Main = Main;

  static defaultProps = {
    children: [<CampaignConfirmed.Navigation />, <CampaignConfirmed.Main />],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
