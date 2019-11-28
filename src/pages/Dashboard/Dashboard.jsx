import React from 'react';
import NavMenuComponent from "../../components/NavMenuComponent/NavMenuComponent";
import VisualiseComponent from "../../components/VisualiseComponent/VisualiseComponent";

const Dashboard = props => {
    const apiBaseUrl = "https://htf.zinderlabs.com";
    const apiKey = "c5845908142885ccbb0123093471c2b6";


    return (
        <div>
            <NavMenuComponent />
            <VisualiseComponent apiBaseUrl={apiBaseUrl} apiKey={apiKey} />
        </div>
    );
}

export default Dashboard;