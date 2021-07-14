import styled from "styled-components";

import { CaptionText } from "../../globalStyles/text.styles";

export const TreatmentGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 400px;
  height: 120px;

  ${
    "" /* @media (max-width: ){
    width: 100%
  } */
  }
`;
export const TreatmentWrapper = styled.div`
  width: 70px;
  display: grid;
  grid-template-rows: 70px auto;
  gap: 1vh;

  ${
    "" /* @media (max-width: ){
    width: 20%;
  } */
  }
`;
export const TreatmentOption = styled.div`
  ${"" /* width: 5vw; */}
  height: 70px;
  background-color: #c4d6b0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TreatmentImage = styled.img`
  height: 44px;
  width: 44px;
`;
export const CaptionWrapper = styled.div`
  width: 70px;
  height: auto;
  display: flex;
  align-items: flex-start;
`;
export const Caption = styled(CaptionText)`
  text-align: center;
  color: #44633f;
`;
