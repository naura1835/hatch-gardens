import styled from "styled-components";

import { BodyIntroText, MediumText } from "../../globalStyles/text.styles";

export const SectionWrapper = styled.section`
  display: grid;
  ${"" /* grid-template-columns: 30vw 1fr; */}
  grid-template-columns: repeat(auto-fit, minmax(min(100%,200px),1fr));
  gap: 50px;
  align-items: center;

  :nth-child(even) {
    direction: rtl;
  }
  > * {
    direction: ltr;
  }
`;
export const SectionSvgWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  justify-self: center;
`;
export const SectionSvg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const SectionDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const Title = styled(BodyIntroText)`
  text-transform: uppercase;
`;
export const Description = styled(MediumText)``;
