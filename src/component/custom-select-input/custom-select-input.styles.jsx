import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 8px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const FormLabel = styled.label`
  font-size: 13px;
  line-height: 18px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 12px;
  color: #252525;
`;
export const FormInput = styled.select`
  width: 300px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
