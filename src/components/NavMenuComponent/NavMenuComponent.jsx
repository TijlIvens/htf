import React, { useState, useEffect } from "react";
import axios from "axios";
import NavMenuItem from "./NavMenuItem/NavMenuItem";
import List from "@material-ui/core/List";
import "./NavMenuComponent.css";

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
    <div className="NavMenu">
      <h3>Select Bank</h3>
      <List>
        {dataBanken &&
          dataBanken.map(item => (
            <NavMenuItem item={item} clickOnTitle={props.setCurrentBank} />
          ))}
      </List>
    </div>
  );
};

export default NavMenuComponent;
