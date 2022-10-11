import React from 'react'
import Image from 'next/image'
import gerIcon from '../assets/alemania.png'
import usaIcon from '../assets/estados-unidos.png'
import canIcon from '../assets/canada.png'
import Rating from '@mui/material/Rating';
import styles  from '../styles/tableItem.module.css'



const tableItem = ({data,headers}:any) => {
    console.log({headers})
    
  return (
    <tr>
        {(headers.length)==6?
        <>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td><Rating name="read-only" value={data.rating} readOnly/></td>
            
            <td>{data.city}</td>
            <td>{data.region}</td>
            <td>
                {(data.country)==='Germany'?<Image src={gerIcon}/>
                :((data.country)==='Canada'?<Image src={canIcon}/>
                :((data.country)==='United States'?<Image src={usaIcon}/>:null))}
            </td>
        </>
        :(headers.length)==3?
        <>
            <td className={styles.fruta}>{data.item}</td>
            <td className={styles.inventario}>{data.inventory}</td>
            <td>{data.size}</td>
        </>:null
        }
    </tr>
    
  )
}

export default tableItem