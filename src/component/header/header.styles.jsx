import styled, { keyframes } from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Container } from "../../globalStyles/global.styles";

const slideUp = keyframes`
    from{
        transform: translateY(50px);
        visibility: hidden;
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        visibility: visible;
        opacity: 1;
    }
`;

export const Wrapper = styled(Container).attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "hamburgerMenu logo cart"
    "menuList menuList menuList";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  align-items: center;
  z-index: 2;

  &::before {
    position: fixed;
    left: 0;
    top: 0;
    content: "";
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: #edece9;
    transform: translateX(-100%);
    transition: all 0.3s linear;
  }
  &.active {
    row-gap: 40px;

    &::before {
      display: block;
      transform: translateX(0);
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    grid-template-areas: "logo menuList cart";
    grid-template-columns: 100px 1fr 50px;
    grid-template-rows: auto;
    padding: 1em;
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  height: 50px;
  width: 50px;
  background-image: url("/assets/Group 23.svg");
  background-size: cover;
`;

export const MenuWrapper = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  grid-area: menuList;
  align-self: start;
  display: none;
  flex-direction: column;
  padding: 0.3em;

  *:not(:last-child) {
    margin-bottom: 40px;
  }
  * {
    transform: translateY(50px);
    visibility: hidden;
    opacity: 0;
  }

  &.active {
    display: flex;

    & > * {
      animation: ${slideUp} 0.3s linear forwards;

      &:nth-child(1) {
        animation-delay: 200ms;
      }
      &:nth-child(2) {
        animation-delay: 300ms;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-delay: 500ms;
      }
      &:nth-child(5) {
        animation-delay: 600ms;
      }
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    align-self: center;
    justify-self: end;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    * {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
    *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
  @media ${breakpointsUp["tablet-landscape-up"]} {
    *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
    }
    *::after {
      content: "";
      position: absolute;
      left: 45%;
      display: block;
      width: 8px;
      height: 8px;
      background-color: #44633f;
      border-radius: 50%;
      transform-origin: center;
      transform: scale(0);
      transition: 0.25s ease-out;
      visibility: hidden;
    }
    *:hover::after {
      transform: scale(1);
      visibility: visible;
    }
  }
`;

export const CartIconWrapper = styled.div`
  grid-area: cart;
  justify-self: end;
`;
