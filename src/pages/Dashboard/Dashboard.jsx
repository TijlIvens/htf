import React from "react";
import NavMenuComponent from "../../components/NavMenuComponent/NavMenuComponent";
import AccountComponent from "../../components/AccountComponent/AccountComponent";

const Dashboard = props => {
  const apiBaseUrl = "https://htf.zinderlabs.com";
  const apiKey = "c5845908142885ccbb0123093471c2b6";

  return (
    <div>
      <NavMenuComponent apiBaseUrl={apiBaseUrl} apiKey={apiKey} />
      <AccountComponent apiBaseUrl={apiBaseUrl} apiKey={apiKey} />
    </div>
  );
};

export default Dashboard;
