import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 6px;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    display: none;
  }
`;
export const Line = styled.span`
  height: 2px;
  width: 26px;
  background-color: #25251f;
`;
