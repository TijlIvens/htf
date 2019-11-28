import React, { useState, useEffect } from "react";
import axios from "axios";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const banks = [{ name: "test1" }];

const NavMenuComponent = props => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    axios
      .get(`${props.apiBaseUrl}/banks`, {
        headers: {
          Authorization: props.apiKey
        }
      })
      .then(data => {
        setDate(data.data.result);
      })
      .catch(err => console.log(err));
  }, [props.apiBaseUrl, props.apiKey]);

  function clickOnTile(id) {}

  return (
    <div>
      {data.map(item => (
        <NavMenuItem title={item.name} />
      ))}
    </div>
  );
};

export default NavMenuComponent;
