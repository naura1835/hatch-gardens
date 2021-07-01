import React from "react";

import {
  Wrapper,
  FooterLinkGroup,
  FooterLink,
  SocialMediaGroup,
} from "./footer.styles";

const Footer = () => (
  <Wrapper>
    <FooterLinkGroup>
      <FooterLink>Plants.com</FooterLink>
      <FooterLink>Privacy Policy</FooterLink>
      <FooterLink>Shipping and Return</FooterLink>
      <FooterLink>FAQs</FooterLink>
    </FooterLinkGroup>
    <SocialMediaGroup></SocialMediaGroup>
  </Wrapper>
);

export default Footer;
