import React,{useState} from 'react'
import Form from './form/form'

interface Props{
    id?:string
}

export default function RegisterButton({id}:Props):JSX.Element {
    const [isFormOpen,setFormOpen] = useState<boolean>(false)
    return (
        <>
            <button className = 'open-form' id={id} onClick = {()=>{setFormOpen(true)}}>
                <span>Încearcă gratuit</span>
            </button>
            <Form isOpen = {isFormOpen} onClose ={()=>{setFormOpen(false)}}></Form>
        </>
    )
}
