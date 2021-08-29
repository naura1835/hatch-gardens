import styled from "styled-components";
import { H2, MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 4vh 6vw;
  justify-items: center;
  @media (max-width: 600px) {
    margin-top: 5vh;
    row-gap: 20px;
  }
`;
export const InnerWrapper = styled.div`
  display: grid;
  height: 60vh;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 600px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
`;
export const StoryWrapper = styled.div`
  display: grid;
  height: fit-content;
  align-self: end;
`;
export const PlantImage = styled.img`
  align-self: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled(H2)`
  align-self: center;
`;
export const Description = styled(MediumText)`
  line-height: 30px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 5vh;
`;
