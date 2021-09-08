import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5vh 8vw 0;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80vh;
  column-gap: 14px;

  & > svg {
    align-self: end;
  }

  @media (max-width: 880px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;

    & > svg {
      width: 50%;
      align-self: flex-end;
    }
  }

  @media (max-width: 636px) {
    flex-direction: column-reverse;

    & > svg {
      display: none;
    }
  }
`;
export const SignUpWrapper = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: 80%;

  @media (max-width: 636px) {
    width: 100%;
  }
`;
export const OptionGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  width: 100%;
`;
