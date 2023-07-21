import React from "react";
import {HiChevronDoubleLeft} from 'react-icons/hi'
import {FiChevronsRight} from 'react-icons/fi'

class Pagination extends React.Component {
    render() {
        const num = [1,2,3,4,5];
        return (
            <div className="pagination"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    gap:"5px"
                }}
            >
                <HiChevronDoubleLeft/>
                {
                    num.map((index)=>{
                        return( <button style={{
                            padding: "6px",
                            backgroundColor: 'white',
                            width: "40px",
                            border: "1px solid black",
                            borderRadius: "3px"
                        }}>{index}</button>)
                    })
                }
                <FiChevronsRight/>
               
            </div>
        );
    }
}

export default Pagination;