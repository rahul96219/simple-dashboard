import React from 'react'
import SectionHead  from '../section-head/SectionHead.component';
import './table-section.style.css'
import {FiAlertCircle} from 'react-icons/fi'
import Table from '../table/Table.component';
import Pagination from '../pagination/Pagination.component';

class TableSection extends React.Component{
    render(){
        return(
            <div className="table-section">
                <SectionHead/>
                <div className="alert">
                    <FiAlertCircle/>
                    <div className="alert-desc">Senectus malesuada suspendisse bibendum elit amet vitae.</div>
                </div>
                <Table/>
                <Pagination/>
            </div>
        );
    }
}

export default TableSection;