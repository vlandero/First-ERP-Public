import React from 'react'

interface Props{
    isOpen:boolean,
    children:JSX.Element[]|JSX.Element
}

export default function DropdownNav({isOpen,children}:Props):JSX.Element|null {
    if(!isOpen)
        return null
    return (
        <ul className='dropdown-nav-li'>
            {children}
        </ul>
    )
}
    

