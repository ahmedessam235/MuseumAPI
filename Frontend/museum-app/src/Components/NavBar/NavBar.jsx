import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { userDetailContext } from "../../App";
import "./NavBar.css";

function NavBar() {
  var contextData = React.useContext(userDetailContext);

  return (
    <AppBar id="NavBar" position="static">
      <Toolbar>
        <Box className="museum-name" display="flex" flexGrow={1}>
          <Typography variant="h6">Louvre</Typography>
        </Box>
        <Box>
          <p className="email">{contextData.userDetails.email}</p>
          <h6 className="role">{contextData.userDetails.role}</h6>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
