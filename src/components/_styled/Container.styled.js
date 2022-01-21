import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 87px;
  }

  @media screen and (min-width: 1280px) {
    min-width: ${props => props.width ? props.width + "px" : "1280px"};
    padding: 0 115px;
    /* display: ${props => props.flex ? props.flex : 'block'}; */
  }
`;

export default Container;