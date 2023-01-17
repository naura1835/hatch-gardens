import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { CaptionText, MediumText } from "../../globalStyles/text.styles";

export const ItemWrapper = styled.section`
  position: relative;
  width: 10rem;
  height: 18rem;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    width: 15rem;
    height: 24rem;
  }
`;

export const ProductWrapper = styled.article`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 25%;
  row-gap: 10px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(137, 141, 136, 0.35);
    display: none;
  }

  ${ItemWrapper}:hover &::after {
    display: block;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  transform: scale(1.2);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const DetailsWrapper = styled.article``;

export const ProductName = styled(MediumText)`
  margin-bottom: 10px;
`;

export const ProductPrice = styled(CaptionText)``;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  width: 90%;
  margin: 0 auto;
  z-index: 3;
  overflow: hidden;
`;

export const AddToCartBtn = styled.button`
  height: 50px;
  width: inherit;
  background-color: #25251f;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #ffffff;
  transform: translateY(50px);
  transition: transform 0.35s cubic-bezier(0.65, 0.005, 0.35, 0.995);

  &:hover {
    background-color: transparent;
    border: solid 2px #25251f;
    color: #25251f;
  }

  ${ItemWrapper}:hover & {
    transform: translateY(0px);
  }
`;
