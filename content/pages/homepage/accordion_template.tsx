import React,{useState} from 'react'

interface IProps{
    Accordion:{
        title:string,
        children?:string
    }
    AcMenu:{
        open:boolean,
        children?:string
    }
}

function AcMenu({open,children}:IProps["AcMenu"]):JSX.Element{
    return(
        <div className={open===false?'acordion-text':'acordion-text show'}>
            {children}
        </div>
    )
}

const Accordion = ({title,children}:IProps["Accordion"]) => {
    const [open,setOpen] = useState<boolean>(false)
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

export default Accordion