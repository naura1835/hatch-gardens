import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))`
  height: 58px;
  width: 240px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #25251f;
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

  &.google-sign-in {
    background-color: #70916a;
    color: #fff;
  }
`;
