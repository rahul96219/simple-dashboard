import React from 'react'

class TextArea extends React.Component{

    constructor(props){
        super(props);

        this.props=props;
    }
    render(){
        return(
            <div className="input" style={{
                width:this.props.width,
                flex:"1 1 auto"
            }}>
                <label htmlFor="">{this.props.label}</label>
                <br/>
            <textarea placeholder={this.props.placeholder} rows={this.props.rows} cols={this.props.cols} style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border:"1px solid black",
                borderRadius:"5px"
            }}></textarea>
            </div>
        );
    }
}

export default TextArea;