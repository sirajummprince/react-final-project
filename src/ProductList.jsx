import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { setProductListStore } from "./store/action";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  // const [productList, setProductList] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const reduxStore = useSelector((store) => store);
  // console.log(reduxStore,"===reduxStore");

  useEffect(() => {
    axios
      // .get("http://127.0.0.1:8080/products")
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        reduxStore.setProductList(response.data);
        dispatch(setProductListStore(response.data));
      })
      .catch((error) => {});
  }, [reduxStore.productList]);

  const seeDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid container item md={5}>
        <Grid item md={3}>
          {/* <p>ProductList</p> */}
          <Grid>
            {reduxStore.productList.map((product, index) => (
              <Grid key={index} item md={12}>
                <img src={product.image} alt="" style={{ width: "100%" }} />
                <p>{product.title}</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => seeDetails(product.id)}
                >
                  See Details
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductList;
