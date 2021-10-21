import React from 'react'
import Input from './content/input'
import {page,FormProps} from './content/form-types'

interface Props{
    isOpen:string,
    setOpen:React.Dispatch<React.SetStateAction<page>>
    data:FormProps['data'],
    setData:React.Dispatch<React.SetStateAction<FormProps['data']>>
}
interface cuiProps{
    data:FormProps['data'],
    setData:React.Dispatch<React.SetStateAction<FormProps['data']>>
}

const CuiInput = (p:cuiProps):JSX.Element => {
    return(
        <div className='input-label-div'>
            <label htmlFor = 'cui' className = 'labels'>Cui</label>
            <div style = {{display:'flex',width:'15.5rem'}}>
                <select onChange = {(e)=>{p.setData({...p.data,atribut_fiscal:e.target.value})}}  className = 'DateFirma' name = 'atributfiscal' id = 'atributfiscal' value = {p.data['atribut_fiscal']}>
                    <option value = '---'>---</option>
                    <option value = 'RO'>RO</option>
                </select>
                <input className = 'DateFirma' style = {{marginBottom:0}} type = 'text' id = 'cui' onChange = {(e)=>{p.setData({...p.data,cui:e.target.value})}} value = {p.data['cui']}></input>
            </div>
        </div>
    )
}

export default function DateFirma(p:Props): JSX.Element|null {
    if(p.isOpen!=='datefirma')
        return null
    return (
        <div className = 'modal-form-div' id = "date-firma">
            <form className = 'form'>
                <Input change='denumire' data={p.data} setData={p.setData} className = 'DateFirma' type = 'text' id = 'nume' label='Denumire companie'></Input>
                <Input change='adresa' data={p.data} setData={p.setData} className = 'DateFirma' type = 'text' id = 'adresa' label='Adresa'></Input>
                <Input change='telefon' data={p.data} setData={p.setData} className = 'DateFirma' type = 'text' id = 'telefon' label='Telefon'></Input>
                <CuiInput data={p.data} setData={p.setData}></CuiInput>
                <Input change='reg_com' data={p.data} setData={p.setData} className = 'DateFirma' type = 'text' id = 'regcom' label='Reg Com'></Input>
                <div className = 'buttons-div'>
                    <button type="button" className='nav-button' onClick={(e):void=>{
                        e.preventDefault()
                        p.setOpen("cui")
                    }}>Inapoi</button>
                    <button type="submit" className='nav-button' onClick={(e):void=>{
                        e.preventDefault()
                        p.setOpen("register")
                    }}>Inainte</button>
                </div>
            </form>
        </div>
    )
}
