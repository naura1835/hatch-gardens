import styled from "styled-components";

export const CollectionWrapper = styled.div`
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
  }
`;
