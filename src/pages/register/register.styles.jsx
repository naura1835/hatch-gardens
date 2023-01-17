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
`;

export const Title = styled(H3)``;

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    align-self: center;
    flex: 1;
  }
`;
export const OptionGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  width: 100%;
`;
