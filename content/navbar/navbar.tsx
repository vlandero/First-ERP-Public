import React from 'react'
import './style.css'
import Media from 'react-media'
import Logo from './nav-content/logo'
import NavMenu from './nav-content/nav-menu'
import Sandwich from './nav-content/sandwich'

export default function Navbar() {
    return (
        <div className = 'navbar'>
            <Media query = '(min-width: 1125px)'>
            {matches =>{
                return matches ? <><Logo /><NavMenu /></> : <><Logo /><Sandwich /></>
            }}
            </Media>
        </div>
    )
}
