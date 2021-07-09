import styled from "styled-components";

import { H1, MediumText } from "../../globalStyles/text.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vw;
  row-gap: 46px;
`;
export const BlogTitle = styled(H1)`
  width: 620px;
`;
export const BlogImage = styled.img`
  width: 100%;
  height: 72vh;
  object-fit: cover;
  object-position: center;
`;
export const DescriptionWrapper = styled.div`
  width: 888px;
  align-self: center;
`;
export const BlogDescription = styled(MediumText)`
  line-height: 30px;
`;
