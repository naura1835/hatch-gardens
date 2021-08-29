import styled from "styled-components";

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 6px;
  }
`;
export const Line = styled.span`
  height: 2px;
  width: 26px;
  background-color: #25251f;
`;
