import styled from '../lib/styled';

// eslint-disable-next-line
const calculatePercentage = n => 100 / n;
const getDivisions = n => n || 4;
const getMargins = n => (n || 0) * 2;

// Return css calc() for witdh of item.
const returnCalc = (screen, props) => {
  const { divisions, tabletDivisions, mobileDivisions, margins } = props;
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
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'center'};
  width: 100%;
  height: auto;
  & > * {
    width: ${props => returnCalc('desktop', props)};
    max-width: ${props => returnCalc('desktop', props)};
    min-width: ${props => returnCalc('desktop', props)};
    flex: 0 0 ${props => returnCalc('desktop', props)};
    margin: ${props => `${props.margins}px`};
    height: auto;
    @media screen and (max-width: 900px) {
      width: ${props => returnCalc('tablet', props)};
      max-width: ${props => returnCalc('tablet', props)};
      min-width: ${props => returnCalc('tablet', props)};
      flex: 0 0 ${props => returnCalc('tablet', props)};
    }
    @media screen and (max-width: 645px) {
      width: ${props => returnCalc('mobile', props)};
      max-width: ${props => returnCalc('mobile', props)};
      min-width: ${props => returnCalc('mobile', props)};
      flex: 0 0 ${props => returnCalc('mobile', props)};
    }
  }
`;

export default FlexGrid;
