import React, { Component } from 'react';
import { classToDOMCard } from 'react-mobiledoc-editor';
import PropTypes from 'prop-types';

export default ({ renderWith: ViewComp, editWith: Editor, name }) => {
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
      if (!isInEditor) return <ViewComp {...payload} />;
      return <Editor {...this.props} />;
    }
  }

  return classToDOMCard(MobiledocCard);
};
