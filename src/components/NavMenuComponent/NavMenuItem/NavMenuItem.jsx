import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import color from "@material-ui/core/colors/amber";

const NavMenuItem = props => {
  const color = {
    color: "#eeeeee"
  };
  return (
    <div>
      <ListItem button onClick={props.clickOnTitle.bind(this, props.item.name)}>
        <p style={color}>{props.item.name}</p>
        <ListItemText />
      </ListItem>
    </div>
  );
};

export default NavMenuItem;
