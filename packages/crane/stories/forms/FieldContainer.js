import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(239, 91, 88);
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

export default class FieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: props.initialValue,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(val) {
    this.setState({ fieldValue: val });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onChange: this.onChange, value: this.state.fieldValue }),
    );

    return <Container>{childrenWithProps}</Container>;
  }
}
