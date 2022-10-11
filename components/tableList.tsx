import React, { useMemo } from 'react';
import dataJson from './data.json';
import {Columns} from './columns';
import TableItem from './tableItem';

const TableList = () => {
    const allData = useMemo(()=> dataJson.table1,[]);

    return(
        <div className='table-container'>
            <h2>Basic Table</h2>
            <table className='table'>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>State/Province</th>
                    <th>Country</th>
                </tr>
                {allData.map(data => {return <TableItem data={data} />})}
            </table>
        </div>
    )
}

export default TableList;