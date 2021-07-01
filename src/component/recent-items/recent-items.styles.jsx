import styled from "styled-components";
import { H2 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 0 5vw;
  row-gap: 20px;
`;
export const Title = styled(H2)``;
export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 50px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
