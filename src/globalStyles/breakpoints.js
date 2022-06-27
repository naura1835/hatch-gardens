import styled, { css } from "styled-components";

const breakpoints = {
  "large-phones": "475px",
  "phones-only": "599px",
  "tablet-portrait-up": "600px",
  "tablet-landscape-up": "900px",
  "desktop-up": "1024px",
  "big-desktop-up": "1800px",
};

export const breakpointsUp = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);
// {

//   "large-phones": `@media (min-width: ${large- phones})`,
//   "phones-only": `@media (min-width: ${phones - only})`,
//   "tablet-portrait-up": `@media (min-width: ${tablet - portrait - up})`,
//   "tablet-landscape-up": `@media (min-width: ${tablet - landscape - up})`,
//   "desktop-up": `@media (min-width: ${desktop - up})`,
//   "big-desktop-up": `@media (min-width: ${big - desktop - up})`,
// };
