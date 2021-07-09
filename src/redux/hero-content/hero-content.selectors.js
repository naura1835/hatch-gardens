import { createSelector } from "reselect";

const selectHero = (state) => state.hero;

export const selectHeroContent = createSelector(
  [selectHero],
  (hero) => hero.content
);

export const selectContentDetails = (collectionURLParam) =>
  createSelector([selectHeroContent], (heroContent) =>
    heroContent.find((item) => item.routeName === collectionURLParam)
  );
