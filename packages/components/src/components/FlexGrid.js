import styled from '../lib/styled';

const AlignItems = {
  START: 'flex-start',
  CENTER: 'middle',
  END: 'flex-end',
};

const JustifyContent = {
  START: 'flex-start',
  CENTER: 'center',
  END: 'flex-end',
};

const calculatePercentage = n => 100 / n;
const getDivisions = n => n || 4;
const getMargins = n => (n || 0) * 2;

// TODO: use theme breakpoints for sizes
const getCalc = (screen, { divisions, tabletDivisions, mobileDivisions, margins }) => {
  switch (screen) {
    case 'mobile':
      return `calc(${calculatePercentage(getDivisions(mobileDivisions || 1))}% - ${getMargins(
        margins,
      )}px)`;
    case 'tablet':
      return `calc(${calculatePercentage(getDivisions(tabletDivisions || 2))}% - ${getMargins(
        margins,
      )}px)`;
    case 'desktop':
    default:
      return `calc(${calculatePercentage(getDivisions(divisions))}% - ${getMargins(margins)}px)`;
  }
};

const FlexGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || AlignItems.START};
  justify-content: ${({ justifyContent }) => justifyContent || JustifyContent.CENTER};
  width: 100%;
  height: auto;
  & > * {
    width: ${props => getCalc('desktop', props)};
    max-width: ${props => getCalc('desktop', props)};
    min-width: ${props => getCalc('desktop', props)};
    flex: 0 0 ${props => getCalc('desktop', props)};
    margin: ${({ margins }) => `${margins}px`};
    height: auto;
    @media screen and (max-width: 900px) {
      width: ${props => getCalc('tablet', props)};
      max-width: ${props => getCalc('tablet', props)};
      min-width: ${props => getCalc('tablet', props)};
      flex: 0 0 ${props => getCalc('tablet', props)};
    }
    @media screen and (max-width: 645px) {
      width: ${props => getCalc('mobile', props)};
      max-width: ${props => getCalc('mobile', props)};
      min-width: ${props => getCalc('mobile', props)};
      flex: 0 0 ${props => getCalc('mobile', props)};
    }
  }
`;

FlexGrid.AlignItems = AlignItems;
FlexGrid.JustifyContent = JustifyContent;

export default FlexGrid;
