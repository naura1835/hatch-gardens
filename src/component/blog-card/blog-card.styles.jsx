import styled from "styled-components";

import { H3, SmallMediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100%;
  height: 100%;
  row-gap: 26px;
`;
export const BlogImage = styled.img`
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
`;
export const BlogTitle = styled(H3)`
  line-height: 28.13px;
  cursor: pointer;
`;
export const Description = styled(SmallMediumText)``;
