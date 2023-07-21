import React from "react";

class TableButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <button
                style={{
                    backgroundColor: this.props.color,
                    borderRadius:"2px",
                    padding:"6px",
                    border:"none",
                    color:"white",
                    cursor:"pointer"
                }}
            >
                <span>{this.props.text}</span>
            </button>
        );
    }
}


export default TableButton;