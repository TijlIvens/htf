import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavMenuItem = props => {
  return (
    <div>
      <ListItem button onClick={props.clickOnTitle.bind(this, props.item.apiPath)}>
        <ListItemText primary={props.item.name} />
      </ListItem>
    </div>
  );
};

export default NavMenuItem;
