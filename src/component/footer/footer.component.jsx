import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../../assets/icons/akar-icons_instagram-fill.svg";
import { ReactComponent as Email } from "../../assets/icons/carbon_email.svg";

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
      <SocialMediaGroup>
        <Link to="">
          <Instagram />
        </Link>
        <Link to="">
          <Email />
        </Link>
      </SocialMediaGroup>
    </Wrapper>
  );
};

export default Footer;
