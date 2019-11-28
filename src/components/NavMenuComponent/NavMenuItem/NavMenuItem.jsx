import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const NavMenuItem = props => {
  return (
    <div>
      <ListItem button onClick={props.clickOnTitle.bind(this, props.item.name)}>
        <ListItemText primary={props.item.name} />
      </ListItem>
    </div>
  );
};

export default NavMenuItem;
