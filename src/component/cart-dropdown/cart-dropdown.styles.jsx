import styled from "styled-components";

import { H2, MediumText } from "../../globalStyles/text.styles";

export const OverlayWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: #edece9;
  display: grid;
  place-items: center;
  padding: 1.2em;
  max-width: 31.25rem;
  transform: ${(props) =>
    (props.active && "translateX(0%)") || "translateX(100%)"};
`;
export const CartItemsWrapper = styled.ol`
  list-style-type: none;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding: 3rem 0.5rem 2.5rem;

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
export const SubTotalWrapper = styled.div`
  align-self: start;
  padding: 0 2vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const EmptyCart = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
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
  width: 100%;
  padding: 0 4vw;
`;
export const Title = styled(H2)`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 46.3px;
  text-align: center;
`;
export const SubTitle = styled(MediumText)``;
export const ContinueButton = styled.button`
  margin-top: 58px;
  width: auto;
  padding: 2vh 4vw;
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
