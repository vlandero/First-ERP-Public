import React from 'react'
import './style.css'
import plurivalogo from './plurivalogo.png'

export default function Logo(props) {
    return (
        <div className = 'logo'>
            <a href = '/'><img src = {plurivalogo} style = {{height: 65}} alt = 'pluriva logo'></img></a>
        </div>
    )
}
