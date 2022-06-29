import styled from "styled-components";
import { breakpointsUp } from "./breakpoints";

export const Container = styled.div`
  max-width: 1300px;
  padding: 1em;
  margin: 0 auto;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 2em;
  }
`;
