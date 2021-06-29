import axios from "axios";

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
export default loginUser;
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

// export async function restoreLoggedInUser(contextData) {
//   //1  - get token from cookie
//   var token = Cookies.get("token");
//   // 2 - same implemetation of handle signin func
//   //2- Call the backend again to exchange token for userinfo.
//   let userInfo = await getUserInfo(token);

//   //3- Update global variable with the userinfo.
//   let globalUser = {
//     email: userInfo.userEmail,
//     token: token,
//     isAdmin: userInfo.isadmin,
//     cart: Cart.getProducts(),
//   };
//   contextData.setUser(globalUser); //update global state with user data
//   return globalUser.email;
// }
