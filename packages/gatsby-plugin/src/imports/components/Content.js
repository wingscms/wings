import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mdr from 'mobiledoc-dom-renderer';
import { ImageCard } from '@wingscms/mobiledoc-cards';

const Renderer = mdr.default;


export default class Content extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const rendered = this.renderer.render(JSON.parse(this.props.content));
    this.ref.appendChild(rendered.result);
  }

  renderer = new Renderer({
    cards: [ImageCard],
    // unknownCardHandler: () => {},
  });

  render() {
    return <div ref={(ref) => { this.ref = ref; }} />;
  }
}
