const initialState = {
  productList: [],
  currentProduct: null,
};

const productReducer = (state = initialState, action) => {
  if (action.type === "update-product-list") {
    return {
      ...state,
      productList: action.payload,
    };
  } else return state;
};

export default productReducer;
