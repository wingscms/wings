import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import languageList from '../../data/languageList';

const Wrapper = styled.div`
  position: relative;
  display: block;
  overflow: visible;
  height: 50px;
  width: 100%;
  .translations {
    display: none;
  }
  &:hover {
    .translations {
      display: block;
    }
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: transparent;
`;

const Current = styled(Item)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: default;
`;

const Translation = styled(Item)`
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
    color: #fff;
  }
`;

const Translations = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  position: absolute;
  top: ${({ showAbove }) => (showAbove ? '0' : '100%')};
  transform: ${({ showAbove }) => (showAbove ? 'translateY(-100%)' : 'initial')};
  left: 0;
  overflow: auto;
  overflow-y: scroll;
  height: auto;
  max-height: 275px;
`;

export default class LanguagePicker extends Component {
  static propTypes = {
    /** String with current language */
    current: PropTypes.string,
    /** Array of languages */
    translations: PropTypes.array,
    /** onClickHander. Receives event, translation object, translations, languageList */
    onClickHandler: PropTypes.func,
    /** Background color for the items */
    backgroundColor: PropTypes.string,
    /** Hover background color for the items */
    backgroundColorHover: PropTypes.string,
    /** Whether to show the dropdown above or below */
    showAbove: PropTypes.bool,
  };
  static defaultProps = {
    current: 'en',
    translations: [],
    onClickHandler: () => {},
    backgroundColor: '#fff',
    backgroundColorHover: '#4856c9',
    showAbove: false,
  };

  render() {
    const {
      backgroundColor,
      backgroundColorHover,
      current,
      onClickHandler,
      showAbove,
      translations,
    } = this.props;
    return (
      <Wrapper>
        <Current backgroundColor={backgroundColor}>
          {languageList[current] ? languageList[current].nativeName : null}
        </Current>
        <Translations
          className="translations"
          showAbove={showAbove}
          backgroundColor={backgroundColor}
        >
          {translations
            .sort((a, b) => (a.locale < b.locale ? -1 : 1))
            .map(trans => (
              <Translation
                key={trans.locale}
                backgroundColorHover={backgroundColorHover}
                onClick={e => onClickHandler(e, trans, translations, languageList)}
              >
                {languageList[trans.locale] ? languageList[trans.locale].nativeName : null}
              </Translation>
            ))}
        </Translations>
      </Wrapper>
    );
  }
}
