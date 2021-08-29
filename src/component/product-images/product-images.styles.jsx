import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 820px) {
    height: 32rem;
  }
`;
export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 820px) {
    height: 100%;
    border-radius: 0;
  }
`;
export const ImageGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 820px) {
    position: absolute;
    top: 34rem;
    left: 6vw;
    width: auto;
    gap: 0.31rem;
    width: 16.31rem;
  }
`;
export const ImageItem = styled.img.attrs((props) => ({
  className: props.className,
}))`
  height: 100px;
  width: 23%;
  border-radius: 10px;
  cursor: pointer;
  object-fit: cover;

  &.active {
    border: 2px solid #44633f;
  }
  @media (max-width: 999px) {
    width: 9vw;
  }
  @media (max-width: 820px) {
    border-radius: 0;
    height: 4rem;
    width: 4rem;
  }
`;
