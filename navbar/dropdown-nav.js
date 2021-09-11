import React from 'react'

export default function DropdownNav({isOpen,children}) {
    if(!isOpen)
        return null
    return (
       
            <ul className='dropdown-nav-li'>
                {children}
            </ul>
       
    )
}
    

