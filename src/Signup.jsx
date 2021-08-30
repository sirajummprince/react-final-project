import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <p><TextField id="standard-basic" label="Standard" /></p>
      <p><TextField id="filled-basic" label="Filled" variant="filled" /></p> */}
        <p>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </p>
        <p>
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </p>
        <p>
          {/* <Button variant="contained" color="primary">
            Sign In
          </Button> */}
        </p>
        {/* Not a registered user? Sign up below! */}
        <p>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
        </p>
        {/* <p><TextField id="outlined-basic" label="Outlined" variant="outlined" /></p> */}
      </form>
    </>
  );
}
