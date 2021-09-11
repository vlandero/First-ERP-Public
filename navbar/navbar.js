import React from 'react';
import './style.css';
import Sandwich from "./sandwitch.js";
import Logo from "./logo.js";
import NavMenu from "./nav-menu.js";
import Media from 'react-media'

export default function Navbar(props) {
    return (
        <div className = 'navbar'>
        <Media query = '(min-width: 1125px)'>
          {matches =>{
            return matches ? <><Logo /><NavMenu /></> : <><Logo /><Sandwich></Sandwich></>
          }}
        </Media>
        </div>
    )
}

