import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Container } from "../../globalStyles/global.styles";
import { H3 } from "../../globalStyles/text.styles";

export const Wrapper = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;

  & > svg {
    display: none;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: flex;
    flex-direction: row;
    column-gap: 40px;

    & > svg {
      display: block;
      max-width: 500px;
    }
  }
  /* margin: 5vh 8vw 0;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80vh;
  column-gap: 14px;

  

  @media (max-width: 880px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;

    & > svg {
      width: 50%;
      align-self: flex-end;
    }
  }

  @media (max-width: 636px) {
    flex-direction: column-reverse;

    & > svg {
      display: none;
    }
  } */
`;

export const Title = styled(H3)``;

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    align-self: center;
    flex: 1;
  }
  /* align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: 80%;

  @media (max-width: 636px) {
    width: 100%;
  } */
`;
export const OptionGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  width: 100%;
`;
