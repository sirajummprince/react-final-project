import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { requestSignIn } from "./store/signInAction";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.signInStore);

  const [cred, setCred] = useState([]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(requestSignIn(cred));
  };

  useEffect(() => {
    history.push("/");
  }, [history, token]);
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <p><TextField id="standard-basic" label="Standard" /></p>
      <p><TextField id="filled-basic" label="Filled" variant="filled" /></p> */}
        <p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            defaultValue={cred.password}
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
        </p>
        <p>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="Password"
            onChange={(e)=>setCred({...cred, password:e.target.value})}
          />
        </p>
        <p>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </p>
        Not a registered user? Sign up below!
        <p>
          <Button
            onClick={() => {
              history.push("/signup");
            }}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </p>
        {/* <p><TextField id="outlined-basic" label="Outlined" variant="outlined" /></p> */}
      </form>
    </>
  );
}
