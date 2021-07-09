import heroData from "./hero-content.data";

const INITIAL_STATE = {
  content: heroData,
};

const heroContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default heroContentReducer;
