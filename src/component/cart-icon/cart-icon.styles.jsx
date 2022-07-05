import styled from "styled-components";
import { CaptionText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  width: auto;
  height: 50px;
  position: relative;
  cursor: pointer;
  display: grid;
  place-items: center;

  > :nth-child(1) {
    width: 28px;
    height: 28px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 10%;
  right: -20%;
  height: 20px;
  width: 20px;
  background-color: #c4d6b0;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const ItemCount = styled(CaptionText)``;

export const CloseBtn = styled.div`
  position: relative;
  z-index: 2;

  &::before,
  &::after {
    background-color: #000;
    content: "";
    height: 2px;
    width: 20px;
    position: absolute;
    left: 0;
    top: 10px;
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;
