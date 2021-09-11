import React from 'react'

export default function Page1({active,name}) {
    if(active!==name)
        return null; 
    return (
        <div>
            Page1
        </div>
    )
}
