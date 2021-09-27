import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router";

const AddProduct = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    iamge: "",
  });

  const addProduct = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  const requestAddProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.iamge,
      })
      .then((response) => {
        //console.log(response);
        history.push('/')
      })
      .catch();
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <p><TextField id="standard-basic" label="Standard" /></p>
      <p><TextField id="filled-basic" label="Filled" variant="filled" /></p> */}
        <p>
          <TextField
            value={product.name}
            onChange={(e) => addProduct(e, "name")}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            value={product.description}
            onChange={(e) => addProduct(e, "description")}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            value={product.price}
            onChange={(e) => addProduct(e, "price")}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            value={product.category}
            onChange={(e) => addProduct(e, "category")}
            id="outlined-basic"
            label="Category"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            value={product.iamge}
            onChange={(e) => addProduct(e, "image")}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
        </p>
        <p>
          {/* <Button variant="contained" color="primary">
            Sign In
          </Button> */}
        </p>
        {/* Not a registered user? Sign up below! */}
        <p>
          <Button
            onClick={requestAddProduct}
            variant="contained"
            color="secondary"
          >
            Add Product
          </Button>
        </p>
        {/* <p><TextField id="outlined-basic" label="Outlined" variant="outlined" /></p> */}
      </form>
    </>
  );
};

export default AddProduct;
