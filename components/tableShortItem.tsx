import React from 'react'

const tableShortItem = ({data2}:any) => {
  return (
    <tr>
        <td>{data2.item}</td>
        <td>{data2.inventory}</td>
        <td>{data2.size}</td>
    </tr>
  )
}

export default tableShortItem