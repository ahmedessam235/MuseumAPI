import axios from "axios";
const jwt = require("jsonwebtoken");
export async function loginUser(email, password) {
  var response = "null";
  try {
    const userData = { email: email, password: password };
    response = await axios.post("http://localhost:5000/login", userData);
    if (response.status !== 200) {
      return response.status;
    } else {
      return response.data;
    }
  } catch (e) {
    return response.status;
  }
}
export async function getLoggedInUser(token,contextData) {

  let decodedUserData = jwt.verify(token, "secretkey"); //decode the data in JWT token
  let globalUser = {
    email: decodedUserData.usersigned.Email,
    token: token,
    role: decodedUserData.usersigned.Role,
  }; 
  contextData.setUser(globalUser); //update global state with user data
 
}

// export async function getUsertoken(email, password) {
//   let response = await axios.post("https://ecommerce-app-everst-minds.herokuapp.com/login", {
//     email: email,
//     password: password,
//   });
//   if (response.status === 200) {
//     return response.data.token;
//   } else if (response.status === 500) {

//     alert("wrong data");
//     return null;
//   } else {
//     return null;
//   }
// }

// export async function getUserInfo(token) {
//   let response = await axios.get("https://ecommerce-app-everst-minds.herokuapp.com/user", {
//     headers: {
//       token: token
//     },
//   });
//   if (response.status === 200) {
//     return response.data;
//   } else {
//     return null;
//   }
// }


