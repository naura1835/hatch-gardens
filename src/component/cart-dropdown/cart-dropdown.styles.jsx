import styled from "styled-components";

import { H2, MediumText } from "../../globalStyles/text.styles";

export const DropdownWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;

  &::before {
    content: "";
    position: relative;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #313942;
    opacity: 0.2;
    z-index: 3 !important;
  }
`;
export const Dropdown = styled.div`
  height: 100vh;
  width: 40vw;
  background-color: #edece9;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  padding-top: 10vh;
  padding-bottom: 5vh;
  padding-right: 2vw;
  position: fixed;
`;
export const CartItemsWrapper = styled.div`
  overflow: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding: 0 2vw;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: rgba(80, 80, 80, 1);
  }
  &::-webkit-scrollbar-track {
    background: #bfbfbf;
  }
`;
export const EmptyCart = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 414px;
  ${"" /* padding: 2vh 2vw 0 2vw; */}
`;
export const Logo = styled.img`
  height: 200px;
  width: 144px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  height: 134px;
  width: 414px;
`;
export const Title = styled(H2)`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 46.3px;
  text-align: center;
`;
export const SubTitle = styled(MediumText)``;
export const ContinueButton = styled.button`
  margin-top: 58px;
  width: 300px;
  height: 62px;
  background-color: #25251f;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
