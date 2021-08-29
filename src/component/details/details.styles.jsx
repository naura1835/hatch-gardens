import styled from "styled-components";
import { BodyMainText, H1, H2 } from "../../globalStyles/text.styles";

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
