import styled from "styled-components";
import { H2, BodyMainText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 4vh 6vw;
  justify-items: center;
  @media (max-width: 600px) {
    row-gap: 20px;
  }
`;
export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const StoryWrapper = styled.div`
  display: grid;
`;
export const Title = styled(H2)`
  align-self: center;
`;
export const Description = styled(BodyMainText)`
  line-height: 30px;
`;
