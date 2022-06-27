import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Container } from "../../globalStyles/global.styles";
import { H3, MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;

  & > svg {
    display: none;
  }

  ${breakpointsUp["tablet-portrait-up"]`
    flex-direction: row;

    & > svg {
    display: block;
    max-width: 500px;
  }
  `}
`;

export const SignInWrapper = styled.div`
  /* align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: fit-content;

  @media (max-width: 636px) {
    width: 100%;
  } */
`;
export const Title = styled(H3)`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
`;
export const SubTitle = styled(MediumText)``;

export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 20px;
  /*flex-direction: row;
  

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 20px;

    & > button {
      width: 100%;
    }
  } */
`;
// margin: 5vh auto;
//   width: 100%;
/* height: 80vh; */
// display: flex;
// align-items: center;
// column-gap: 14px;

// & > * {
//   width: 100%;
//   flex: 1;
// }
// ${
/* & > svg {
    flex: 1;
  } */
// }

// @media (max-width: 880px) {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-self: flex-start;

//   & > svg {
//     width: 40%;
//     align-self: flex-end;
//   }
// }

// @media (max-width: 636px) {
//   flex-direction: column-reverse;

//   & > svg {
//     display: none;
//   }
// }
