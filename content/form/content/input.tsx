import React from 'react'
import {FormProps,dataToChange} from './form-types'
interface Props{
    id:string,
    type:string,
    className:string,
    label:string,
    setData:React.Dispatch<React.SetStateAction<FormProps['data']>>,
    data:FormProps['data'],
    change:dataToChange
}

export default function Input(p:Props):JSX.Element {
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>):void=>{
        if(p.change==='atribut_fiscal')
            return
        p.setData({...p.data,[p.change]:ev.target.value})
    }
    return (
        <div className={"input-label-div"+` ${p.className}`}>
            <label htmlFor = {p.id} className = 'labels'>{p.label}</label>
            <br />
            <input type = {p.type} id = {p.id} onChange = {(e)=>{handleChange(e)}} value = {p.data[p.change]}></input>
        </div>
    )
}
