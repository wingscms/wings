/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { classToDOMCard } from 'react-mobiledoc-editor';
import PropTypes from 'prop-types';

export default ({
  renderWith: ViewComp,
  editWith: Editor,
  name,
  payload: defaultPayload = {},
  buttonText = '',
}) => {
  class MobiledocCard extends Component {
    static displayName = name;
    static propTypes = {
      isInEditor: PropTypes.bool.isRequired,
      payload: PropTypes.object,
    };
    static defaultProps = {
      payload: {},
    };

    render() {
      const { isInEditor, payload } = this.props;
      return isInEditor ? <Editor {...this.props} /> : <ViewComp {...payload} />;
    }
  }

  class Button extends Component {
    static displayName = `${name}Button`;
    static propTypes = {
      isEditing: PropTypes.bool.isRequired,
    };
    static contextTypes = {
      editor: PropTypes.object,
    };
    render() {
      const { isEditing = false, ...props } = this.props;
      const { editor } = this.context;
      return (
        <button
          {...props}
          onClick={() => editor.insertCard(name, defaultPayload, isEditing)}
        >
          {buttonText || name}
        </button>
      );
    }
  }
  const Card = classToDOMCard(MobiledocCard);
  Card.Button = Button;
  return Card;
};
