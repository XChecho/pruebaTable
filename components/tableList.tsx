import React, { useMemo } from 'react';
import TableItem from './tableItem';

const TableList = ({allData}:any) => {

    const Headers = Object.keys(allData[0])

    return(
        <div className='table-container'>
            <h2>Basic Table</h2>
            <table className='table'>
                <thead>
                    <tr>
                        {Headers.map((Header) => <th>{Header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {allData.map((data:any) => {return <TableItem data={data} />})}
                </tbody>
            </table>
        </div>
    )
}

export default TableList;