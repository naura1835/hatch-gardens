import styled from "styled-components";

import { CaptionText } from "../../globalStyles/text.styles";

export const TreatmentGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 400px;
  height: 120px;
`;
export const TreatmentWrapper = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TreatmentOption = styled.div`
  width: 5vw;
  height: 20vh;
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
  height: 100px;
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;
export const Caption = styled(CaptionText)`
  text-align: center;
  color: #44633f;
`;
