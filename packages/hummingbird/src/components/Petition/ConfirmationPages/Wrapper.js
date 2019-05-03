import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #000;
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-size: cover;
  padding: 160px 0;
  @media screen and (max-width: 800px) {
    padding: 100px 0;
  }
`;
