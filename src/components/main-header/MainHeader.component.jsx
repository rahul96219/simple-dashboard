import React from "react";
import './main-header.style.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'

class MainHeader extends React.Component {
    render() {
        return (
            <div className="main-header">
                <div className="add-items">
                    <div className="add-new-post">
                        <span>Add new Post</span>
                    </div>
                    <div className="add-content-setting">
                        <div className="add-content ">
                            <GrAdd />
                            <span>Add Content</span>
                        </div>
                        <div className="setting">
                            <AiOutlineSetting />
                            <span>Setting</span>
                        </div>
                    </div>
                </div>
                <div className="search-items">
                    <input type="text" placeholder="search here" />
                    <BsSearch />
                </div>

            </div>
        );
    }
}

export default MainHeader;