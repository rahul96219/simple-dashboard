import React from "react";
import MainHeader from '../main-header/MainHeader.component'
import DashboardItem from "../dashboard-item/DashboardItem.component";
import './main-container.style.css'

class MainContainer extends React.Component {
    render() {
        return (
            <div className="main-container">
               <MainHeader/>
                <DashboardItem/>
            </div>
        );
    }
}

export default MainContainer;