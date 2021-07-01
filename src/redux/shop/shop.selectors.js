import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionURLParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionURLParam]
  );

export const selectRecentForPreview = createSelector(
  [selectCollectionsForPreview],
  (collectionsForPreview) =>
    collectionsForPreview.map(({ items }) =>
      Object.keys(items).map((key) => items[key])
    )
);
//code down below aint working
export const selectProduct = (productName) =>
  createSelector([selectCollections], (collections) =>
    Object.values(collections).find((collection) =>
      collection.items.forEach((item) => {
        if (item.name === productName) {
          return item;
        }
      })
    )
  );
