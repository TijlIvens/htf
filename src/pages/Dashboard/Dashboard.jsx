import React, { useState } from "react";
import NavMenuComponent from "../../components/NavMenuComponent/NavMenuComponent";
import VisualiseComponent from "../../components/VisualiseComponent/VisualiseComponent";

const Dashboard = props => {
  const apiBaseUrl = "https://htf.zinderlabs.com";
  const apiKey = "c5845908142885ccbb0123093471c2b6";
  const [currentBank, setCurrentBank] = useState(null);

  return (
    <div>
      <NavMenuComponent
        apiBaseUrl={apiBaseUrl}
        apiKey={apiKey}
        setCurrentBank={setCurrentBank}
      />
    </div>
  );
      <VisualiseComponent apiBaseUrl={apiBaseUrl} apiKey={apiKey} />
};

export default Dashboard;
