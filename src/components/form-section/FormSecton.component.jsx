import React from "react";
import SectionHead from "../section-head/SectionHead.component";
import './form-section.style.css'
import Input from '../input/Input.component'
import TextArea from "../input/TextArea.component";

class FormSection extends React.Component {
    render() {
        return (
            <div className="form-section">
                <SectionHead/>
                <div className="form-inputs">
                    <Input label="Label title" type="text" placeholder="placeholder content" width="100%"/>
                    <Input label="Label title" type="select" placeholder="placeholder content" width="30%"/>
                    <Input label="Label title" type="text" placeholder="placeholder content" width="30%"/>
                    <Input label="Label title" type="text" placeholder="placeholder content" width="30%"/>
                    <Input label="Label title" type="text" placeholder="placeholder content" width="40%"/>
                    <Input label="Label title" type="text" placeholder="placeholder content" width="40%"/>
                    <TextArea rows="8" cols="10" label="Label title" placeholder="placeholder content" width="100%"/>
                </div>
            </div>
        );
    }
}

export default FormSection