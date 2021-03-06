import axios from "axios";
const jwt = require("jsonwebtoken");
export async function loginUser(email, password) {
  var response = "null";
  try {
    const userData = { email: email, password: password };
    response = await axios.post("https://museum-api-backend.herokuapp.com/login", userData);
    if (response.status !== 200) {
      return response.status;
    } else {
      return response.data;
    }
  } catch (e) {
    return response.status;
  }
}
export async function getLoggedInUser(token, contextData) {
  let decodedUserData = jwt.verify(token, "secretkey"); //decode the data in JWT token
  let globalUser = {
    email: decodedUserData.usersigned.Email,
    token: token,
    role: decodedUserData.usersigned.Role,
  };
  contextData.setUser(globalUser); //update global state with user data
}

export function userIsAdmin(token) {
  let decodedUserData = jwt.verify(token, "secretkey"); //decode the data in JWT token
  if (decodedUserData.usersigned.Role === "ADMIN") {
    return true;
  } else {
    return false;
  }
}

export async function getUsers(token, pageNumber) {
  var response = "";
  try {
    response = await axios.get(
      `https://museum-api-backend.herokuapp.com/users?page=${pageNumber}`,
      {
        headers: {
          "login-token": token,
        },
      }
    );
    if (response.status !== 200) {
      return response.status;
    } else {
      return response.data;
    }
  } catch (e) {
    return response.status;
  }
}
