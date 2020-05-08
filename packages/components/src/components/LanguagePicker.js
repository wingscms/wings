import React from 'react';
import styled from '../../lib/styled';
import useDimensions from '../../hooks/useDimensions';
import Icons from '../../img/svg/icons';

const { Globe } = Icons;

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
  height: 50px;
  width: calc(100% - 40px);
  background-color: transparent;
  line-height: 50px;
  background-color: ${({ theme }) => theme.navigationLanguagePickerColor};
  text-align: left;
  padding-left: 20px;
  @media screen and (max-width: 800px) {
    text-transform: uppercase;
  }
`;

const Current = styled(Item)`
  background-color: ${({ theme }) => theme.navigationLanguagePickerColor};
  cursor: default;
  display: inline-block;
  vertical-align: middle;
`;

const Translation = styled(Item)`
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin-left: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.navigationLanguagePickerHoverColor};
    color: #fff;
  }
`;

const Translations = styled.div`
  width: 100%;
  position: absolute;
  top: ${({ showAbove }) => (showAbove ? '0' : '100%')};
  transform: ${({ showAbove }) => (showAbove ? 'translateY(-100%)' : 'initial')};
  left: 0;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: auto;
  max-height: 275px;
`;

const Icon = styled.div`
  background-color: ${({ theme }) => theme.navigationLanguagePickerColor};
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 100%;
  svg {
    fill: ${({ theme }) => theme.navigationLanguagePickerIconColor};
    margin-top: 15px;
    width: 20px;
    margin-left: 2px;
  }
`;

export default ({
  current = 'en',
  translations = [],
  onTranslationClick = () => {},
  showAbove = false,
}) => {
  const windowDimensions = useDimensions();
  return (
    <Wrapper>
      <Icon>
        <Globe />
      </Icon>
      <Current>{windowDimensions.width > 800 ? current.name : current.locale}</Current>
      <Translations className="translations" showAbove={showAbove}>
        {translations.map(trans => (
          <Translation
            key={trans.locale}
            onClick={e => {
              e.preventDefault();
              onTranslationClick(trans, { event: e });
            }}
          >
            {windowDimensions.width > 800 ? trans.name : trans.locale}
          </Translation>
        ))}
      </Translations>
    </Wrapper>
  );
};
