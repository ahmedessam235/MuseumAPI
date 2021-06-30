import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import "./VerticalNavBar.css"
function VerticalNavBar() {
    
return (<div>
<List className= "test">
       <ListItem button>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        </List>

 </div>);
}

export default VerticalNavBar;