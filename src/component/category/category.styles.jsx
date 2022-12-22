import styled from "styled-components";

export const CategoryList = styled.div`
  padding: 2vh 4vw;
  width: 100%;
  justify-content: center;
  display: grid;
  row-gap: 2vh;
  column-gap: 1vw;
  grid-template-columns: 2fr repeat(3, 1fr);
  justify-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 2fr repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 3vh;
    justify-items: center;
  }
`;
