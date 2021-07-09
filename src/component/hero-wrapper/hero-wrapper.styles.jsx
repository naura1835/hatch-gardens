import styled from "styled-components";

import { H1, MediumText } from "../../globalStyles/text.styles";

export const HeroWrapper = styled.div`
  background-color: #edece9;
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 4vw 10vh 4vw;

  @media (max-width: 574px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: 100%;
    padding-top: 5vh;
  }
`;
export const HeroImage = styled.img`
  max-height: 100%;

  @media (max-width: 574px) {
    width: 30%;
    margin-bottom: -10vh;
  }
`;
export const TextWrapper = styled.div`
  width: 626px;
  display: flex;
  flex-direction: column;
  row-gap: 38px;

  @media (max-width: 574px) {
    width: auto;
  }
`;
export const HeroTitle = styled(H1)``;
export const HeroDescription = styled(MediumText)``;
