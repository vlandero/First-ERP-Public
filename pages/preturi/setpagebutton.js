import React from 'react'
import './preturi.css'

export default function SetPageButton({setPage,name,page}) {
    const style = {
        border: name===page ? '0.4px black':'none',
        borderStyle: name===page ? 'dashed ':'none',
        borderBottom: name===page ? '4px solid black':'none',
        
    }
    return (
        <button className='set-page-button' style={style} onClick={()=>setPage(name)}>
            {name}
        </button>
    )
}
