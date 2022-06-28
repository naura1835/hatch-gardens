import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Container } from "../../globalStyles/global.styles";
import { H3, MediumText } from "../../globalStyles/text.styles";

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
`;

export const SignInWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    align-self: center;
    flex: 1;
  }
`;
export const Title = styled(H3)`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
`;
export const SubTitle = styled(MediumText)``;

export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 20px;
  flex-direction: column;
  row-gap: 20px;

  & > button {
    width: 100%;
  }

  @media ${breakpointsUp["large-phones"]} {
    flex-direction: row;
  }
`;
