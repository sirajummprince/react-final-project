import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Grid from "@material-ui/core/Grid";
import Error404 from "./Error404";
import Login from "./Login";
import Signup from "./Signup";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

const App = () => {
  const [productList, setProductList] = useState([]);

  const history = useHistory();

  const addProduct = (productData) => {
    setProductList([...productList, productData]);
  };

  useEffect(() => {
    return () => {};
  }, [productList]);

  const backToList = () => {
    <Redirect to="/"></Redirect>;
  };

  const signUp=()=>{
    <Redirect to="/login"></Redirect>;
  }

  return (
    <>
      <header justifyContent={"center"}>
        <Link to="/">Home</Link>
        {/* <Link to="/product-list">Product List</Link> */}
        {/* <Link to="/product-details">Product Details</Link> */}
        <Link to="/login">Login</Link>
        {/* <Link to="/signup">Signup</Link> */}
      </header>
      <body>
        <Grid container justifyContent={"center"}>
          <Switch>
            <Route exact path="/">
              <ProductList productList={productList} />
            </Route>
            <Route exact path="/product-details/:id">
              <ProductDetails productDetails={ProductDetails} />
            </Route>
            <Route exact path="/add-product">
              <AddProduct/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/update-product">
              <UpdateProduct />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Grid>
      </body>

      <footer></footer>
    </>
  );
};

export default App;
