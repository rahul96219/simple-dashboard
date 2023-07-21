import React from 'react'
import LinkButton from '../link-button/LinkButton.component';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './sidebar.style.css'
import { GrAdd } from "react-icons/gr"
import { LuLayoutDashboard } from 'react-icons/lu'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="new-item-button">
                    <div className="add-button">
                        <GrAdd />
                        <span>New Item</span>
                    </div>
                </div>
                <div className="sidebar-links">
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Dashboard">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        <div className='sidebar-link-item'>
                            <ul>
                                <li>Commarce</li>
                                <li>Analytics</li>
                                <li>Crypto</li>
                                <li>Helpdesk</li>
                                <li>Monitoring</li>
                                <li>Fitness</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Application">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Element">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Forms">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Plugin">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="sidebar-link">
                        <div className="sidebar-link-button">
                            <LinkButton text="Setting">
                                <LuLayoutDashboard />
                            </LinkButton>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;