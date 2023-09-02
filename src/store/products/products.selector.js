import { createSelector } from "reselect";

const productsReducerSelector = (state) => state.products;

export const productsSelector = createSelector(
  [productsReducerSelector],
  (shop) => shop.products
);

export const productNameSelector = createSelector(
  [productsReducerSelector],
  (shop) => shop.productName
);

// export const isLoadingSelector = createSelector(
//   [productsReducerSelector],
//   (shop) => shop.isLoading
// );

export const productsMapSelector = createSelector(
  [productsSelector],
  (products) =>
    products.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = {
        title: `${title} plant`,
        routeName: title,
        items: items,
      };
      return accumulator;
    }, {})
);

export const productDetailsSelector = createSelector(
  [productsSelector, productNameSelector],
  (products, productName) => {
    const collection = Object.keys(products).map((key) => products[key].items);

    for (let i = 0; i < collection.length; i++) {
      const found = collection[i].find(
        (item) => item.name.toLowerCase() === productName.toLowerCase()
      );
      if (!!found) return found;
    }
  }
);
