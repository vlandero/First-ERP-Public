import React from 'react'

interface Props{
    id:number,
    currentOpen:number,
    children:JSX.Element[]|JSX.Element|string|string[],
    imageSrc:string,
    imageSyle:React.CSSProperties|undefined
}

export default function CompCheie(p:Props): JSX.Element|null {
    if(p.currentOpen !== p.id)
        return null;
    return (
        <div>
            <hr />
            <div className='comp-cheie-flex'>
                <div>
                    {p.children}
                </div>
                <img className='comp-cheie-img' alt="" style={p.imageSyle} src={p.imageSrc}></img>
            </div>
        </div>
    )
}
