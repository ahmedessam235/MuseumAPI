import Cookies from "js-cookie";
import React, { useEffect } from "react";
import User from "../User/User";
import NavBar from "../NavBar/NavBar";
import { userDetailContext } from "../../App";
import { getLoggedInUser,getUsers } from "../../Actions/userActions";

function Users() {
  const [users, renderUsers] = React.useState("");
  var contextData = React.useContext(userDetailContext);
  useEffect(() => {
    async function fetchData() {
      var token = Cookies.get("login-token");
      const requestedUsers = await getUsers(token);
      renderUsers(requestedUsers);
      getLoggedInUser(token, contextData);
    }
    fetchData();
  }, []);

  if (users) {
      console.log(users,"users aho");
    return (
      <div>
        <NavBar />
        <h1>Users</h1>
        {users.map((user, index) => {
          return (
            <User
              key={index}
              id={index}
              Email={user.Email}
              ID={user._id}
              PhoneNumber={user.PhoneNumber}
              
            />
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading .....</h1>;
  }
}

export default Users;
