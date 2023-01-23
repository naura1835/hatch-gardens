export enum PRODUCTS_ACTION_TYPES {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_PRODUCT_NAME = "SET_PRODUCT_NAME",
  // SET_PRODUCT_DETAILS: "SET_PRODUCT_DETAILS",
}

// export type treatment = {
//   fertilizer: string,
//   sunglight: string,
//   water: string,
//   temperature: string,
// }

export type product = {
  description: string;
  id: number;
  imageUrl: string[];
  name: string;
  price: number;
  treatment: {
    fertilizer: string;
    sunglight: string;
    water: string;
    temperature: string;
  };
};

export type category = {
  title: string;
  items: product[];
};
