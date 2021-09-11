import React from 'react'

export default function Page2({active,name}) {
    if(active!==name)
        return null;
    return (
        <div>
            Page2
        </div>
    )
}
