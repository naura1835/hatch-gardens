import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Image = styled.img`
  width: 500px;
  height: 450px;
  border-radius: 10px;
`;
export const ImageGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
export const ImageItem = styled.img.attrs((props) => ({
  className: props.className,
}))`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;

  &.active {
    border: 2px solid #44633f;
  }
`;
