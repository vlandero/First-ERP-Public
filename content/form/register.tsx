import React from 'react'
import {page,FormProps} from './content/form-types'
import Input from './content/input'
interface Props{
    isOpen:string,
    setOpen:React.Dispatch<React.SetStateAction<page>>
    data:FormProps['data'],
    setData:React.Dispatch<React.SetStateAction<FormProps['data']>>
}
export default function Register(p:Props): JSX.Element|null {
    if(p.isOpen!=='register')
        return null
    return (
        <div className = 'modal-form-div' id = "register-div">
            <form className = 'form'>
                <Input change='email' data={p.data} setData={p.setData} className = 'Register' type = 'text' id = 'user' label='E-mail'></Input>
                <div className = 'buttons-div'>
                    <button type="button" className='nav-button' onClick={(e):void=>{
                        e.preventDefault()
                        p.setOpen("datefirma")
                    }}>Inapoi</button>
                    <button type="submit" className='nav-button' onClick={(e):void=>{
                        e.preventDefault()
                        p.setOpen("verify")
                    }}>Inainte</button>
                </div>
            </form>
        </div>
    )
}
