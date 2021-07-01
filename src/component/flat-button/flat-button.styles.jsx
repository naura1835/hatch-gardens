import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: fit-content;
  max-width: 180px;
  font-size: 15px;
  font-family: "Roboto";
  color: rgba(37, 37, 31, 0.9);
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 18px 10px 18px;
  background-color: #edece9;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(255, 255, 255, 0.2),
    inset 0px 0px 0px 0.5px rgba(68, 99, 63, 0.5);
`;
