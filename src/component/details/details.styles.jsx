import styled from "styled-components";
import {
  BodyMainText,
  CaptionText,
  H1,
  H2,
} from "../../globalStyles/text.styles";

export const DetailsWrapper = styled.section`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media (max-width: 820px) {
    padding: 4vw;
    width: 100%;
  }
`;
export const PriceNameRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SubTitle = styled(H2)`
  line-height: 47px;
`;
export const Title = styled(H1)``;
export const DescriptionWrapper = styled.div`
  width: 100%;
  font-weight: 500;
`;
export const Description = styled(BodyMainText)`
  line-height: 25px;
`;
export const CareTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TreatmentGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 400px;
  height: 120px;

  @media (max-width: 427px) {
    width: 100%;
    gap: 0.5rem;
  }
`;
export const TreatmentWrapper = styled.div`
  width: 70px;
  display: grid;
  grid-template-rows: 70px auto;
  gap: 1vh;
`;
export const TreatmentOption = styled.div`
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
