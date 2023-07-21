import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="input" style={{
                width:this.props.width,
                flex:"1 1 auto"
            }}>
                <label htmlFor="">{this.props.label}</label>
                <br/>
                <input type={this.props.type} placeholder={this.props.placeholder} style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    border:"1px solid black",
                    borderRadius:"5px"

                }} />
            </div>
        );
    }
}

export default Input;