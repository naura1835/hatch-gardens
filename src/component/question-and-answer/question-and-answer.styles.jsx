import styled from "styled-components";
import { BodyMainText, H3 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 880px;
  display: grid;
  row-gap: 32px;

  @media (max-width: 970px) {
    width: 100%;
  }
`;

export const Question = styled(H3)``;
export const Answer = styled(BodyMainText)`
  font-family: Arial, Helvetica, sans-serif;

  a {
    font-weight: 600;
    ${
      "" /* text-decoration: underline;
    text-underline-offset: 0.4em; */
    }
  }
`;
