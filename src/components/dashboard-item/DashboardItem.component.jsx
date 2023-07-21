import React from "react";
import './dashboard-item.style.css'
import InfoBlocks from '../info-blocks/InfoBlocks.component'
import TableSection from "../table-section/TableSection.component";
import SecondFormSection from "../second-form-sectioin/SecondFormSection.component";
import FormSection from '../form-section/FormSecton.component'

class DashboardItem extends React.Component {
    render() {
        return (
            <div className="dashboard-items">
                <InfoBlocks />
                <div className="dashboard-section">
                    <TableSection/>
                    <FormSection/>
                    <SecondFormSection/>
                </div>
            </div>
        );
    }
}

export default DashboardItem;