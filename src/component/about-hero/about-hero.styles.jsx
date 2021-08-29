import styled from "styled-components";

import { BodyMainText, H2, MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 86vh;
  background-color: #f8f7f7;
  display: grid;
  grid-template-columns: 30vw repeat(2, 1fr);
  gap: 20px;
`;
export const TextWrapper = styled.div`
  width: 50vw;
  height: auto;
  margin: 4vh 5vw 15vh;
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
`;
export const Title = styled(H2)``;
export const Description = styled(BodyMainText)``;
export const ImageWrapper = styled.div`
  height: 50vh;
  width: 60%;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  &:nth-child(2) {
    align-self: center;
    justify-self: end;
  }
`;
export const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
