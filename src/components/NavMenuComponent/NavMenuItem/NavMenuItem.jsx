import React from "react";

const NavMenuItem = props => {
  return (
    <div>
      <h3 onClick={props.clickOnTitle}>{props.title}</h3>
      <h5 onClick={props.clickOnTransaction}>{props.transaction}</h5>
    </div>
  );
};

export default NavMenuItem;
