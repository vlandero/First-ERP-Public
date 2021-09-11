import React from 'react'

export default function Page4({active,name}) {
    if(active!==name)
        return null;
    return (
        <div>
            Page4
        </div>
    )
}
