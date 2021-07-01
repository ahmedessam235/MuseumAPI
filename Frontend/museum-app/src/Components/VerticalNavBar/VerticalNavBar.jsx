import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./VerticalNavBar.css";
function VerticalNavBar() {
  return (
    <div>
      <List className="VerticalNavBar">
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="gallery" />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="users" />
        </ListItem>
      </List>
    </div>
  );
}

export default VerticalNavBar;
