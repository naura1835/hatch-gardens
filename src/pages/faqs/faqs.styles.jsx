import styled from "styled-components";
import { H1 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4vw;
  row-gap: 70px;

  @media (max-width: 700px) {
    align-items: center;
  }
`;
export const Title = styled(H1)`
  font-weight: 400;

  @media (max-width: 700px) {
    align-self: flex-start;
  }
`;
