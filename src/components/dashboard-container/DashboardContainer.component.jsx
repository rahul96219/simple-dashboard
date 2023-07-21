import React from 'react'
import Sidebar from '../sidebar/Sidebar.component';
import MainContainer from '../main-container/MainContainer.component';
import './dashboard-container.style.css'

class DashboardContainer extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                <Sidebar />
                <MainContainer />
            </div>
        );
    }
}

export default DashboardContainer;