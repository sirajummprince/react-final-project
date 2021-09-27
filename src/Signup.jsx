import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { requestSignUp } from "../store/action/signUpAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit= (e)=>{
    dispatch(requestSignUp(user));
    history.push("/login");
    e.preventDefault();
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <p><TextField id="standard-basic" label="Standard" /></p>
      <p><TextField id="filled-basic" label="Filled" variant="filled" /></p> */}
        <p>
          <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleChange}/>
        </p>
        <p>
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChange}/>
        </p>
        <p>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="Password"
            onChange={handleChange}
          />
        </p>
        <p>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={handleChange}
          />
        </p>
        <p>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={handleChange}/>
        </p>
        <p>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            onChange={handleChange}
          />
        </p>
        <p>
          {/* <Button variant="contained" color="primary">
            Sign In
          </Button> */}
        </p>
        {/* Not a registered user? Sign up below! */}
        <p>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </p>
        {/* <p><TextField id="outlined-basic" label="Outlined" variant="outlined" /></p> */}
      </form>
    </>
  );
}
