import styled from "styled-components";

import { CaptionText, MediumText } from "../../globalStyles/text.styles";

export const CategoryContent = styled.div`
  display: none;
`;
export const CategoryCardWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  @media (max-width: 1024px) {
    &.last {
      display: none;
    }
  }
  @media (max-width: 768px) {
    &.last {
      display: block;
    }
  }

  position: relative;
  height: 20rem;
  width: 100%;
  background-position: 50% 60%;
  background-size: cover;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 16px 32px rgba(23, 0, 102, 0.12),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
  &:hover > ${CategoryContent} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(70, 82, 68, 0.65);
    border-radius: 20px;
    display: grid;
    grid-template-rows: repeat(2, 3vh);
    align-content: end;
    justify-items: start;
    row-gap: 10px;
    padding: 4vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 14rem;
  }
`;

export const Title = styled(CaptionText)`
  line-height: 28px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);
`;
export const ViewMore = styled(MediumText)`
  font-weight: bold;
  line-height: 47px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
