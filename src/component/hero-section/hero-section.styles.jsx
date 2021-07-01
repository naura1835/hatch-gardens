import styled from "styled-components";

import { Display, MediumText } from "../../globalStyles/text.styles";

import heroImg from "../../images/pawel-czerwinski-lWBZ01XRRoI-unsplash.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 86vh;
  background-image: url(${heroImg});
  background-size: cover;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  padding: 2vh;
  margin-left: 4vw;
  margin-right: 4vw;
`;
export const CTAButton = styled.button`
  height: 58px;
  width: 240px;
  background-color: #70916a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 17px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(74, 87, 80, 0.3),
      inset 0px 0px 0px 0.5px rgba(112, 145, 106, 0.5);
    transform: translateY(-3px);
  }
`;
export const Title = styled(Display)``;
export const Description = styled(MediumText)``;
