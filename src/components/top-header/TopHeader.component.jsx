import React from "react";
import LinkButton from "../link-button/LinkButton.component";
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
// import profileicon from './'

import './top-header.style.css'

class TopHeader extends React.Component {
    render() {
        return (
            <div className="top-header">

                <div className="top-header-buttons">
                    <LinkButton color="" text="Home">
                        <AiOutlineHome />
                    </LinkButton>
                    <LinkButton color="" text="Contents">
                        <AiOutlineMenu />
                    </LinkButton>
                    <LinkButton color="" text="Categories">
                        <BiCategory />
                    </LinkButton>
                    <LinkButton color="" text="Setting">
                        <FiSettings />
                    </LinkButton>
                </div>
                
                <div className="profile-icon">
                    <img src="/profile.png" alt="" />
                    <span>ismail</span>&nbsp;
                    <span>ihsan</span>&nbsp;
                    <span>bulbul</span>
                </div>
            </div>
        );
    }
}

export default TopHeader;