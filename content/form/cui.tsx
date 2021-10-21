import React from 'react'
import {page,FormProps} from './content/form-types'
import Input from './content/input'

interface Props{
    isOpen:string
    setOpen:React.Dispatch<React.SetStateAction<page>>,
    data:FormProps['data'],
    setData:React.Dispatch<React.SetStateAction<FormProps['data']>>
}

export default function Cui(p:Props): JSX.Element|null {
    if(p.isOpen!=="cui")
        return null
    return (
        <div className = "cui-div">
            <form className = 'form'>
                <Input change='cui' data={p.data} setData={p.setData} id='cui' type='text' className='Cui' label='Introduceți codul fiscal'></Input>
                <button type="submit" className = 'cui-button' onClick={(e):void=>{
                    e.preventDefault()
                    p.setOpen("datefirma")
                }}><span>Incepe</span></button>
                <button type="button" className = 'cui-button' onClick={(e):void=>{
                    e.preventDefault()
                    p.setOpen("datefirma")
                }}><span>Fără cui</span></button>
            </form>
        </div>
    )
}
