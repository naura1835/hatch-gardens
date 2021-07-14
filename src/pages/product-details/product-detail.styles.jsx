import styled from "styled-components";

export const ProductWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 40vw);
  column-gap: 4vw;
  justify-items: start;
  padding: 0 4vw;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;
export const ImageGrid = styled.div`
  width: 100%;
  height: 100%;
`;
export const DetailsWrapper = styled.div`
  align-self: end;

  @media (max-width: 478px) {
    width: 100%;
  }
`;
