import React,{useState} from "react";
import Login from "./Components/Login/Login";
export var userDetailContext = React.createContext(null); //global user state
function App() {
  const [userDetails, setUser] = useState({
    email: null,
    token: null,
    role: null
  });
  const value = { userDetails, setUser }; //passing the values of usestate hook in order to change the global user data anywhere in the children components
  console.log(userDetails,"userDetails aho : ");
  return (
    <div className="App">
    <userDetailContext.Provider value={value}>
      <Login />
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
