import styled from "styled-components";
import { MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.footer`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 40px 10px;
  margin-top: 10vh;
  margin-bottom: 0;
  background-color: #edece9;
`;
export const FooterLinkGroup = styled.div`
  width: 544px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SocialMediaGroup = styled.div`
  width: 90px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FooterLink = styled(MediumText)`
  cursor: pointer;
`;
