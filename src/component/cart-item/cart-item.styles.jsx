import styled from "styled-components";
import { MediumText, SmallMediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.li`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  max-height: 10rem;
  padding-bottom: 1vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ItemImageWrapper = styled.div`
  position: relative;
  width: 20%;
  aspect-ratio: 1;
`;

export const ItemImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const Quantity = styled.span`
  position: absolute;
  top: -10%;
  right: -10%;
  height: 24px;
  width: 24px;
  color: #434344;
  font-size: 17px;
  font-family: "Roboto";
  background-color: #c4d6b0;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const ItemDetails = styled.section`
  flex: 1;
`;

export const TotalAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemName = styled(MediumText)`
  font-weight: 500;
  font-family: "Roboto";
`;

export const ItemPrice = styled(SmallMediumText)`
  font-weight: 500;
  font-family: "Roboto";
  color: rgba(0, 0, 0, 0.6);
`;

export const TotalItemPrice = styled(SmallMediumText)`
  font-weight: 500;
  font-family: "Roboto";
  display: inline;
`;
