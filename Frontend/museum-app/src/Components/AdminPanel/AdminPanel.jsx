import Cookies from "js-cookie";
import { userIsAdmin } from "../../Actions/userActions";
import { useHistory } from "react-router-dom";
function AdminPanel(props) {
  let history = useHistory();

  var token = Cookies.get("login-token");
  var isAdmin = userIsAdmin(token);

  if (isAdmin) {
    //protecting the admin path in case of unauthorized admin access
    return (
      <div>
        <h1>welcome to AdminPanel</h1>
      </div>
    );
  } else {
    history.push("/");
    return <h1> you are not authorized here</h1>;
  }
}

export default AdminPanel;
