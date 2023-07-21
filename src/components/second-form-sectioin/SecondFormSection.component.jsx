import React from 'react'
import SectionHead from '../section-head/SectionHead.component';
import Input from '../input/Input.component';
import './second-form-section.style.css';
import TextArea from '../input/TextArea.component';

class SecondFormSection extends React.Component{
    render(){
        return(
            <div className="second-form-section">

                <div className="first-columns">
                <SectionHead/>
                    <div className="form-inputs">
                        <Input type="text" label="Label title" placeholder="placeholder content" width="100%"/>
                        <Input type="text" label="Label title" placeholder="placeholder content" width="100%"/>
                        <Input type="text" label="Label title" placeholder="placeholder content" width="40%"/>
                        <Input type="text" label="Label title" placeholder="placeholder content" width="40%"/>
                        <TextArea rows="8" cols="10" label="Label title" placeholder="placeholder content" width="100%"/>
                    </div>
                </div>

                <div className="second-columns">
                <SectionHead/>
                    <div className="form-inputs">
                        <Input type="text" label="Label title" placeholder="placeholder content" width="100%"/>
                        <Input type="text" label="Label title" placeholder="placeholder content" width="100%"/>
                        <TextArea rows="8" cols="10" label="Label title" placeholder="placeholder content" width="100%"/>
                        <button className='submit-button'>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SecondFormSection;