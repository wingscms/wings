import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';

export default class Signup extends Component {
  static propTypes = {
    /** Title */
    title: PropTypes.string,
    /** Introduction text */
    intro: PropTypes.string,
    /** Background image */
    image: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    intro: '',
    image: '',
  };
  render() {
    const { title, intro, image, ...props } = this.props;

    return (
      <section style={image === '' ? {} : { backgroundImage: `url(${image})` }}>
        <h1>{title}</h1>
        <p>{intro}</p>
        <SignupForm {...props} />
      </section>
    );
  }
}
