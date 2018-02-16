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
      isEditing: PropTypes.bool.isRequired,
      edit: PropTypes.func.isRequired,
      payload: PropTypes.object,
    };
    static defaultProps = {
      payload: {},
    };

    render() {
      const { isInEditor, isEditing, edit, payload } = this.props;
      if (!isInEditor) return <ViewComp {...payload} />;
      return !isEditing ? <ViewComp {...payload} onClick={edit} /> : <Editor {...this.props} />;
    }
  }

  class Button extends Component {
    static displayName = `${name}Button`;
    static propTypes = {
      edit: PropTypes.bool,
    };
    static defaultProps = {
      edit: false,
    };
    static contextTypes = {
      editor: PropTypes.object,
    };
    render() {
      const { edit, ...props } = this.props;
      const { editor } = this.context;
      return (
        <button {...props} onClick={() => editor.insertCard(name, defaultPayload, edit)}>
          {buttonText || name}
        </button>
      );
    }
  }
  const Card = classToDOMCard(MobiledocCard);
  Card.Button = Button;
  return Card;
};
