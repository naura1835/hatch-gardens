import styled, { css } from "styled-components";

const breakpoints = {
  largePhones: "475px",
  tabletPortraitUp: "600px",
  tabletLandscapeUp: "900px",
  desktopUp: "1024px",
  bigDesktopUp: "1800px",
};

// export const breakpointsUp = Object.keys(breakpoints).reduce(
//   (accumulator, label) => {
//     accumulator[label] = (...args) => css`
//       @media(min-width: ${breakpoints[label]}) {
//         ${css(...args)}
//       }
//     `;
//     console.log(accumulator);
//     return accumulator;
//   },
//   {}
// );
export const breakpointsUp = {
  "large-phones": `(min-width: ${breakpoints.largePhones})`,
  "tablet-portrait-up": `(min-width: ${breakpoints.tabletPortraitUp})`,
  "tablet-landscape-up": `(min-width: ${breakpoints.tabletLandscapeUp})`,
  "desktop-up": `(min-width: ${breakpoints.desktopUp})`,
  "big-desktop-up": `(min-width: ${breakpoints.bigDesktopUp})`,
};
