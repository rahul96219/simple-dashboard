import React from 'react'
import './table.style.css'
import TableButton from '../tbl-button/TableButton.component';
import {AiOutlineSetting} from 'react-icons/ai';



class Table extends React.Component {
    render() {
        return (
            <div className="table">               
                <table>
                    <thead>
                        <tr>
                            <th className='th'>Table Title</th>
                            <th>Table Title</th>
                            <th>Table Title</th>
                            <th>Table Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" icon={AiOutlineSetting} /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                        <tr>
                            <td>Etiam purus in</td>
                            <td>Curbit donec uidsi</td>
                            <td>Curbit donec uidsi</td>
                            <td className='action'> <TableButton color="blue" text="Edit" /><TableButton color="red" text="Delete" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Table;