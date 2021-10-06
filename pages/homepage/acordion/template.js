import React,{useState} from 'react'

function AcMenu({open,children}){
    return(
        <div className={open===false?'acordion-text':'acordion-text show'}>
            {children}
        </div>
    )
}

export default function Acordion({children,title,first}) {
    const [open,setOpen] = useState(false)
    
    return (
        <div className='acordion-element'>
            <div onClick={()=>setOpen(!open)} className='acordion-preview'>
                <h4>{title}</h4>
                <span>{open === true ? '-' : '+'}</span>
            </div>
            <AcMenu open={open}>
                {children}
            </AcMenu>
        </div>
    )
}
