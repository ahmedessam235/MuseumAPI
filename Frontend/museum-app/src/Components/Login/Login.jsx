import Cookies from "js-cookie";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import "./Login.css";
import {loginUser} from "../../Actions/userActions";
import { userDetailContext } from "../../App";

const jwt = require("jsonwebtoken");

function Login() {
  var contextData = React.useContext(userDetailContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    //handles the email input from form
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value); //handles the password input from form
  }

  async function HandleSignIn(event) {
    let token;

    if (email === "" || password === "") {
      alert("missing email or password ");
    } else {
      event.preventDefault();
      token = await loginUser(email, password);
      if (token === undefined) {
        alert("Wring credentials provided");
      } else {
        let decodedUserData = jwt.verify(token, "secretkey"); //decode the data in JWT token
        let globalUser = {
          email: decodedUserData.usersigned.Email,
          token: token,
          role: decodedUserData.usersigned.Role,
        }; //holder for the decoded data preparing the object to update the global context variable "global variable"

        Cookies.set("login-token", token); //adding the token in the cookie to maintain sessions
        contextData.setUser(globalUser);
      }
    }
  }
  return (
    <div>
      <Container className="login-form" maxWidth="sm">
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Log In</h1>
          <TextField
            id="outlined-basic"
            label="Email "
            variant="outlined"
            onChange={handleEmail}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password "
            variant="outlined"
            onChange={handlePassword}
            value={password}
          />
          <Button variant="contained" color="primary" onClick={HandleSignIn}>
            Login
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
