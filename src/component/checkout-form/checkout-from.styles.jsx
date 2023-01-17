import styled from "styled-components";

import { H3 } from "../../globalStyles/text.styles";

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
