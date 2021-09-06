import styled from "styled-components";
import { MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.footer`
  position: absolute;
  width: 100%;
  ${"" /* height: 50px; */}
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "links social"
    "copyright copyright";
  gap: 20px;
  padding: 18px 40px 10px;
  margin-top: 5vh;
  margin-bottom: 0;
  background-color: #edece9;

  @media (max-width: 768px) {
    height: 16rem;
    display: flex;
    flex-direction: column;
  }
`;
export const FooterLinkGroup = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;

  @media (max-width: 768px) {
    height: 8rem;
    flex-direction: column;
  }
`;
export const SocialMediaGroup = styled.div`
  grid-area: social;
  justify-self: end;
  width: 90px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FooterLink = styled(MediumText)`
  cursor: pointer;
`;
export const CopyRight = styled(MediumText)`
  grid-area: copyright;
  justify-self: center;
  text-align: center;
`;
