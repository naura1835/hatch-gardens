import styled from "styled-components";
import { BodyIntroText, BodyMainText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 0 5vw;
  row-gap: 20px;
`;
export const Title = styled(BodyIntroText)`
  text-transform: uppercase;
`;
export const MainText = styled(BodyMainText)`
  width: 75ch;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ItemList = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 50px;
  row-gap: 40px;
  margin-bottom: 44px;

  @media (max-width: 1024px) {
    width: 90vw;
  }
  @media (max-width: 856px) {
    width: 96vw;
    column-gap: 20px;
  }
  @media (max-width: 572px) {
    column-gap: 4vw;
    margin-left: -3vw;
  }
`;
