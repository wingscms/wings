import React, { Component } from 'react';
import Navigation from '../../../components/Navigation';
import LayoutDefault from '../../../components/LayoutDefault';

export default class Entry extends Component {
  static Navigation = Navigation;

  static defaultProps = {
    layout: LayoutDefault,
  };

  childProps = () => {
    const { children, ...props } = this.props;
    return {
      ...props,
      ...this.props.childProps,
    };
  };

  children = () =>
    React.Children.map(this.props.children, element =>
      React.cloneElement(element, this.childProps()),
    );

  render() {
    const { layout: Layout } = this.props;
    return <Layout>{this.children()}</Layout>;
  }
}
