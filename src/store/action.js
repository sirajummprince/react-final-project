export const setProductListStore = (productList) => ({
//   return {
    type: "update-product-list",
    payload: productList,
//   };
});

export const setCurrentProductStore = (currentProduct)=>({
    type:"update-curren-product",
    payload: currentProduct,
})
