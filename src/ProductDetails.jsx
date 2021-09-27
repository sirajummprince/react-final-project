import React from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ProductDetails = () => {
  const  {id}  = useParams();
  const [productDetails, setProductDetails] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },[id]);

  const backToList=()=>{
    history.push('/')
  }

  return (
    
      <Grid container spacing={3} justifyContent="center" style={{marginTop: '20px'}}>
        <Grid container item lg={5}>
          <Grid item lg={12}>
              {productDetails && (
                <>
                  <p>{productDetails.id}</p>
                  <p>{productDetails.title}</p>
                  <p>{productDetails.description}</p>
                  <p>{productDetails.category}</p>
                  <img
                    src={productDetails.image}
                    style={{ width: "100%" }}
                    alt={"Not Found"}
                  />
                  <p>{productDetails.description}</p>
                  <p>{productDetails.category}</p>
                  <Button variant="contained" color="primary"
                    onClick={() => {
                       backToList();
                    }}
                  >
                    Home Page
                  </Button>
                  <Button variant="contained" color="secondary"
                    onClick={() => {
                      history.push('/update-product       ')
                    }}
                  >
                    Update Product
                  </Button>
                  <Button variant="contained" color="primary"
                    onClick={() => {
                      history.push('/add-product')
                    }}
                  >
                    Add Product
                  </Button>
                  <Button variant="contained" color="secondary"
                    onClick={() => {
                      // <Redirect to='/update-product'/>
                    }}
                  >
                    Add To Cart
                  </Button>
                </>
              )}
          </Grid>
        </Grid>
      </Grid>
  );
};

export default ProductDetails;
