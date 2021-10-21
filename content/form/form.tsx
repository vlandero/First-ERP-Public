import React,{useState} from 'react'
import './style.css'
import Cui from './cui'
import {page,FormProps} from './content/form-types'
import DateFirma from './date-firma'
import Register from './register'
const stateZero:FormProps["data"] = {
    cui:'',
    denumire:'',
    adresa:'',
    telefon:'',
    email:'',
    logat_google:'0',
    reg_com:'',
    atribut_fiscal:'---'
}
export default function Form(p:FormProps["Form"]):JSX.Element|null {
    const [pageOpen,setPageOpen] = useState<page>("cui")
    const [loading,setLoading] = useState<boolean>(false)
    const [data,setData] = useState<FormProps["data"]>(stateZero)
    if(!p.isOpen)
        return null;
    if(loading)
        return (
            <div style = {{overflow:'auto'}}>
                <div className = 'overlay'></div>
                <div className = 'modal'>
                    <div className = 'header'>
                        <h3 className = 'modal-title'>Loading...</h3>
                        <button className = 'closeButton' onClick = {p.onClose}>&#9747;</button>
                    </div>
                </div>
            </div>
        )
    return (
        <div>
            <div className = 'overlay'></div>
            <div id = 'modal' className = 'modal'>
                <div className = 'header'>
                    <h3 className = 'modal-title'>Title</h3>
                    <button className = 'closeButton' onClick = {()=>{
                        p.onClose()
                        setPageOpen("cui")
                        setData(stateZero)
                    }}>&#9747;</button>
                </div>
                <Cui data={data} setData={setData} setOpen={setPageOpen} isOpen={pageOpen} />
                <DateFirma data={data} setData={setData} setOpen={setPageOpen} isOpen={pageOpen} />
                <Register data={data} setData={setData} setOpen={setPageOpen} isOpen={pageOpen} />
            </div>
        </div>
    )
}
