import Cookies from "js-cookie";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import "./Login.css";
import { loginUser } from "../../Actions/userActions";
import { userDetailContext } from "../../App";
import { useHistory } from "react-router-dom";

const jwt = require("jsonwebtoken");

function Login() {
  var contextData = React.useContext(userDetailContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
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
        alert("Wrong credentials provided");
      } else {
        let decodedUserData = jwt.verify(token, "secretkey"); //decode the data in JWT token
        let globalUser = {
          email: decodedUserData.usersigned.Email,
          token: token,
          role: decodedUserData.usersigned.Role,
        }; //holder for the decoded data preparing the object to update the global context variable "global variable"
        if (decodedUserData.usersigned.Role === "ADMIN") {
          Cookies.set("login-token", token); //adding the token in the cookie to maintain sessions
          contextData.setUser(globalUser);
          history.push("/admin");
        }
        Cookies.set("login-token", token); //adding the token in the cookie to maintain sessions
        contextData.setUser(globalUser);
      }
    }
  }
  return (
    <div>
      <Container className="login-form" maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h2 className="login-headline">Log In</h2>
          <hr />
          <Grid item>
            <p>Email</p>
            <TextField
              variant="outlined"
              onChange={handleEmail}
              value={email}
              placeholder="input your email in here"
            />
          </Grid>
          <Grid item>
            <p>Password</p>
            <TextField
              variant="outlined"
              onChange={handlePassword}
              value={password}
              placeholder="input your password in here"
            />
          </Grid>
          <Grid item id="button-container">
            <Button
              id="login-button"
              variant="contained"
              color="primary"
              onClick={HandleSignIn}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
