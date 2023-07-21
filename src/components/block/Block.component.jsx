import React from 'react'
import './block.style.css'

class Block extends React.Component {

    constructor(props) {
        super(props);
        
        this.props=props;
    }

    render() {
        return (
            <div className="block">
                <div className="icon">
                    <this.props.icon className="icon-svg" style={
                        {
                            color:this.props.color
                        }
                    }/>
                </div>
                <div className="title-price">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="price">
                        <h3>{this.props.value}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;