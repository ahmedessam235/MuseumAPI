import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./VerticalNavBar.css";
function VerticalNavBar(props) {
  // the two functions call the upper function in the admin panel and change the view state for it.
  function handleUserClick() {
    props.controlView("users");
  }
  function handleGalleryClick() {
    props.controlView("gallery");
  }
  return (
    <div>
      <List className="VerticalNavBar">
        <ListItem button onClick={handleUserClick}>
          <ListItemIcon>
            <i className="user-icon"></i>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button onClick={handleGalleryClick}>
          <ListItemIcon>
            <i className="gallery-icon"></i>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );
}

export default VerticalNavBar;
