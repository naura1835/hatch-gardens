import styled, { keyframes } from "styled-components";

const textAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-100px) skew(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  25%{
    opacity: 1;
    transform: translateY(0) skew(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  75%{
    opacity: 1;
    transform: translateY(0) skew(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  100%{
    opacity: 0;
    transform: translateY(-100px) skew(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  
`;

export const Wrapper = styled.span`
  display: inline-block;
`;
export const SpanText = styled.span`
  display: inline-block;
  background: linear-gradient(180deg, #44633f 0%, #b3d1a7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${textAnimation} 6s cubic-bezier(0, 0.88, 0.63, 0.76) forwards
    infinite;
  animation-delay: ${(props) => `${props.delay}s`};
`;
