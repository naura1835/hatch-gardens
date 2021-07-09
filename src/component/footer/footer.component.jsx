import React from "react";
import { Link } from "react-router-dom";

import {
  Wrapper,
  FooterLinkGroup,
  FooterLink,
  SocialMediaGroup,
} from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterLinkGroup>
        <FooterLink>Plants.com</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Shipping and Return</FooterLink>
        <Link to="/faqs">
          <FooterLink>FAQs</FooterLink>
        </Link>
      </FooterLinkGroup>
      <SocialMediaGroup></SocialMediaGroup>
    </Wrapper>
  );
};

export default Footer;
