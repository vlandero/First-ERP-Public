import React from 'react'
import './style.css'
import facebookLogo from './photos/facebook.png'
import linkedInLogo from './photos/linkedin.png'
import twitterLogo from './photos/twitter.png'

export default function Footer(): JSX.Element {
    return (
        <>
            <hr></hr>
            <div className = 'footer'>
                <div className = 'logo-footer'>
                    <a href = '/'><img alt="facebook" src = {facebookLogo}></img></a>
                    <a href = '/'><img alt="linkedin" src = {linkedInLogo}></img></a>
                    <a href = '/'><img alt="twitter" src = {twitterLogo}></img></a>
                </div>
            </div>
        </>
    )
}
