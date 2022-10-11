import React from 'react'
import Image from 'next/image'
import gerIcon from '../assets/alemania.png'
import usaIcon from '../assets/estados-unidos.png'
import canIcon from '../assets/canada.png'
import Rating from '@mui/material/Rating';



const tableItem = ({data}:any) => {
  return (
    <tr>
        <td>{data.name}</td>
        <td><Rating name="read-only" value={data.movie_rating} readOnly/></td>
        <td>{data.age}</td>
        <td>{data.city}</td>
        <td>{data.region}</td>
        <td>
            {(data.country)==='Germany'?<Image src={gerIcon}/>
            :((data.country)==='Canada'?<Image src={canIcon}/>
            :((data.country)==='United States'?<Image src={usaIcon}/>:null))}
        </td>
    </tr>
    
  )
}

export default tableItem