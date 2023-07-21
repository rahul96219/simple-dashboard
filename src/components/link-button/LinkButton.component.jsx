import React from "react";

import './link-button.style.css'

class LinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="link-button" style={{
                backgroundColor: this.props.color ? `${this.props.color}` : ""
            }}>
                <div className="icon">
                    {this.props.children}
                </div>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default LinkButton;