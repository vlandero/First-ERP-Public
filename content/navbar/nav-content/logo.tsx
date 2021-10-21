import React from 'react'
import plurivalogo from './photos/plurivalogo.png'



export default function Logo() {
    return (
        <div className = 'logo'>
            <a href = '/'><img src = {plurivalogo} style = {{height: 65}} alt = 'pluriva logo'></img></a>
        </div>
    )
}
