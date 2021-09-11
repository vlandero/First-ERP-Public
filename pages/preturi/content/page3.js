import React from 'react'

export default function Page3({active,name}) {
    if(active!==name)
        return null;
    return (
        <div>
            Page3
        </div>
    )
}
