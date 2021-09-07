import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 20px;
  row-gap: 50px;
  padding: 4vw;
`;
