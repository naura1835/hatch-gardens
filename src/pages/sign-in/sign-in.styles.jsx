import styled from "styled-components";

import { H3 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  margin: 5vh auto;
  width: 100%;
  ${"" /* height: 80vh; */}
  display: flex;
  align-items: center;
  column-gap: 14px;

  & > * {
    width: 100%;
    flex: 1;
  }
  ${
    "" /* & > svg {
    flex: 1;
  } */
  }

  @media (max-width: 880px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;

    & > svg {
      width: 40%;
      align-self: flex-end;
    }
  }

  @media (max-width: 636px) {
    flex-direction: column-reverse;

    & > svg {
      display: none;
    }
  }
`;

export const SignInWrapper = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: fit-content;

  @media (max-width: 636px) {
    width: 100%;
  }
`;
export const Title = styled(H3)`
  font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 20px;

    & > button {
      width: 100%;
    }
  }
`;
