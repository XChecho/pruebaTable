import React, { useMemo } from 'react';
import dataJson from './data.json';
import TableShortItem from './tableShortItem';


const TableShort = () => {

    const allData2 = useMemo(()=> dataJson.table2,[]);

    return(
        <div className='table-container'>
            <h2>Short Table</h2>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Inventory</th>
                    <th>Size</th>
                </tr>
                {allData2.map(data2 => {return <TableShortItem data2={data2} />})}
            </table>
        </div>
    )
}

export default TableShort;