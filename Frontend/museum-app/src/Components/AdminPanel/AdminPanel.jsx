import Cookies from "js-cookie";
import { userIsAdmin } from "../../Actions/userActions";
import { useHistory } from "react-router-dom";
import Users from "../Users/Users";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import NavBar from "../NavBar/NavBar";
import AdminGallery from "../AdminGallery/AdminGallery";
import "./AdminPanel.css";
import { useState } from "react";
function AdminPanel(props) {
  let history = useHistory();
  var token = Cookies.get("login-token");
  var isAdmin = userIsAdmin(token);
  const [adminView,changeAdminView] = useState("users");  //state change to handle diffeent views for the admin panel by default we will start with users.
  function toggleAdminView(view){
    changeAdminView(view);
  }
  if (isAdmin) {
    //protecting the admin path in case of unauthorized admin access the proection will be rerouting to the "/" route
    return (
      <div>
        <NavBar />
        <div className="AdminPanel">
          <VerticalNavBar 
            controlView={toggleAdminView}  //pass the toggle function to vertical nav ar to control view and condtionally render the output from the function
          /> 
          {(adminView==="users")?<Users />  :   <AdminGallery /> } 
                         
        </div>
      </div>
    );
  } else {
    history.push("/");
    return <h1> you are not authorized here</h1>;
  }
}

export default AdminPanel;
