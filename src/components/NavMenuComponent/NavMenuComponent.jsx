import React, { useState, useEffect } from "react";
import axios from "axios";
import NavMenuItem from "./NavMenuItem/NavMenuItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const banks = [{ name: "test1" }];

const NavMenuComponent = props => {
  const [dataBanken, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${props.apiBaseUrl}/banks`, {
        headers: {
          Authorization: props.apiKey
        }
      })
      .then(data => {
        setData(data.data);
      })
      .catch(err => console.log(err));
  }, [props.apiBaseUrl, props.apiKey]);

  return (
    <div>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        {dataBanken &&
          dataBanken.map(item => (
            <NavMenuItem item={item} clickOnTitle={props.setCurrentBank} />
          ))}
      </List>
    </div>
  );
};

export default NavMenuComponent;
