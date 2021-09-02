import styled from "styled-components";

import { Display, MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 86vh;
  background-color: #f8f7f7;
  display: grid;
  grid-template-columns: 30vw repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 552px) {
    grid-template-columns: 48vw 1fr;
  }
  @media (max-width: 480px) {
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    ${"" /* grid-template-columns: 1fr; */}
  }
`;
export const TextWrapper = styled.div`
  width: 40vw;
  height: auto;
  margin: 4vh 5vw 15vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
  @media (max-width: 552px) {
    width: 80vw;
    align-self: end;
    margin-bottom: 5vh;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;
export const Title = styled(Display)``;
export const Description = styled(MediumText)``;
export const ImageWrapper = styled.div`
  height: 50vh;
  width: 60%;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  &:nth-child(2) {
    align-self: center;
    justify-self: end;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 552px) {
    height: 70vh;
    width: 90%;
    &:nth-child(2) {
      display: none;
    }
  }
`;
export const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
