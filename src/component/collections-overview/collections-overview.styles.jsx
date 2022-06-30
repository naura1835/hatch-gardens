import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  row-gap: 30px;
  justify-content: center;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    gap: 50px;
  }
`;
