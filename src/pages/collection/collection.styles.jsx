import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Container } from "../../globalStyles/global.styles";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Items = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 4vw;
  row-gap: 40px;
  margin-bottom: 30px;
  margin-inline: auto;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    width: 80%;
    column-gap: 40px;
  }
  @media ${breakpointsUp["tablet-landscape-up"]} {
    width: 96%;
    column-gap: 20px;
  }
  @media ${breakpointsUp["desktop-up"]} {
    width: 82%;
    column-gap: 20px;
    row-gap: 40px;
    justify-content: center;
  }
`;
