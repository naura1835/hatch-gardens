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
  justify-self: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24vw, 1fr));
  justify-items: center;
  column-gap: 30px;
  row-gap: 10px;

  @media (max-width: 480px) {
    ${"" /* column-gap: 10px; */}
    padding: 0 18px;
  }
`;
