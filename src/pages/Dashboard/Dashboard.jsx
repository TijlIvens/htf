import React, { useState } from "react";
import NavMenuComponent from "../../components/NavMenuComponent/NavMenuComponent";
import VisualiseComponent from "../../components/VisualiseComponent/VisualiseComponent";
import "./Dachboard.css";

const Dashboard = props => {
  const apiBaseUrl = "https://htf.zinderlabs.com";
  const apiKey = "c5845908142885ccbb0123093471c2b6";
  const [currentBank, setCurrentBank] = useState(null);

  return (
    <div className="FlexBox">
      <NavMenuComponent
        className="NavMenu"
        apiBaseUrl={apiBaseUrl}
        apiKey={apiKey}
        setCurrentBank={setCurrentBank}
      />
      <VisualiseComponent apiBaseUrl={apiBaseUrl} apiKey={apiKey} />
    </div>
  );
};

export default Dashboard;
