import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { userDetailContext } from '../../App';
function NavBar(){
    var contextData = React.useContext(userDetailContext);
    
    return(
        <AppBar position="static">
        <Toolbar>
        <Box display='flex' flexGrow={1}>
          <Typography variant="h6" >
            Louvre
          </Typography>
          </Box>
          <Box display='flex' >
          <Typography  variant="h6" >
            {contextData.userDetails.email}
          </Typography>
          <Typography  variant="h6" >
            {contextData.userDetails.role}
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;