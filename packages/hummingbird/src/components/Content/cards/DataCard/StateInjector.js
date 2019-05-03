import React, { Component } from 'react';

export default (Comp) => {
  class StateInjector extends Component {
    state = {
      hovering: false,
    };

    handleMouseEnter = () => this.setState({ hovering: true });
    handleMouseLeave = () => this.setState({ hovering: false });

    render() {
      const newProps = {
        ...this.props,
        hover: this.state.hovering,
      };
      return (
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Comp {...newProps} />
        </div>
      );
    }
  }

  return StateInjector;
};
