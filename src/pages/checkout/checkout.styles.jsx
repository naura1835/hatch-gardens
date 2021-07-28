import styled from "styled-components";

import { H3 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  margin: 2vh 4vw;
  height: 800px;
  display: grid;
  grid-template-columns: 50vw 40vw;
  gap: 78px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 50px;
    height: fit-content;
  }
  @media (max-width: 555px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 48px;
`;
export const FormSubGroup = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "form form";
  grid-template-rows: 28px auto;
  grid-template-columns: repeat(2, 300px);
  column-gap: 40px;
  row-gap: 20px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 25px;
  width: 300px;

  * {
    width: 138px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    row-gap: 25px;
    column-gap: 0;
    width: 100%;

    * {
      width: 100%;
    }
  }
`;
export const Title = styled(H3)`
  grid-area: title;
  font-size: 17px;
`;
export const CartOverviewWrapper = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  height: 520px;
  padding: 0 4vw;
  @media (max-width: 555px) {
    width: 100%;
  }
`;
export const CartItemsWrapper = styled.div`
  padding: 0 0 60px;
  border-bottom: 1px solid #000;
  width: 100%;

  @media (max-width: 1200px){
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
  }
  
`;
export const TotalOverviewWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 20px);
  gap: 24px;
  padding: 42px 0 60px;
  border-bottom: 1px solid #000;
  width: 100%;
`;
