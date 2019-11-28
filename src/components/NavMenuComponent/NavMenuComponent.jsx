import React from "react";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const banks = [{ name: "test1" }];

const NavMenuComponent = props => {
  function clickOnTile(id) { }
  return (
    <div>
      {banks.map(item => (
        <NavMenuItem title={item.name} />
      ))}
    </div>
  );
};

export default NavMenuComponent;
