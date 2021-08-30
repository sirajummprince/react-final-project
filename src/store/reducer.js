const initialState = {
  productList: [],
  currentProduct: null,
};

const MyReducer = (state = initialState, action) => {
  if (action.type === "update-product-list") {
    return {
      ...state,
      productList: action.payload,
    };
  } else return state;
};

export default MyReducer;
