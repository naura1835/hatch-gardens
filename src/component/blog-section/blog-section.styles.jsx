import styled from "styled-components";

import { H2 } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 10vh;
`;

export const BlogGroup = styled.div`
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 20px;
  row-gap: 50px;
`;

export const Title = styled(H2)``;
