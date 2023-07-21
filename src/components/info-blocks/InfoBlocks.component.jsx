import React from 'react'
import Block from '../block/Block.component';
import { BsBag } from 'react-icons/bs'
import { BiStore } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsBorderStyle } from 'react-icons/bs'
import './info-blocks.style.css'


class InfoBlocks extends React.Component {
    render() {

        const blockdetails = [
            {
                title: "Total Sales",
                value: "$2,569",
                icon: BsBag,
                color:'red'
            },
            {
                title: "Total Expenses",
                value: "$3,969",
                icon: BiStore,
                color:'#9400d3'
            },
            {
                title: "Total Visitors",
                value: "5,111",
                icon: FiUsers,
                color:'green'
            },
            {
                title: "Total Orders",
                value: "3,969",
                icon: BsBorderStyle,
                color:'#9400d3'
            },
        ]
        return (
            <div className="info-blocks">
                {
                    blockdetails.map(({ title, value, icon,color }) => {
                        return (
                            <Block title={title} color={color} value={value} icon={icon}/>
                        );
                    })
                }

            </div>
        );
    }
}

export default InfoBlocks;