import Cookies from "js-cookie";

import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Gallery from "./Components/Gallery/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
export var userDetailContext = React.createContext(null); //global user state
function App() {
  const [userDetails, setUser] = useState({
    email: null,
    token: null,
    role: null,
  });
  const value = { userDetails, setUser }; //passing the values of usestate hook in order to change the global user data anywhere in the children components
  var sessionData = Cookies.get("login-token");
  return (
    <div className="App">
      <userDetailContext.Provider value={value}>
      <Router>
      <Switch>
          <Route exact path="/">
        {/* rendring the gallery after siging in since login in the "/" directory */}
        {sessionData === undefined ? <Login /> : <Gallery />}{" "}
        </Route>
        <Route path="/admin">
              <AdminPanel />
            </Route>
        </Switch>
        </Router>
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
