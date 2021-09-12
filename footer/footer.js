import React from 'react'
import './footer.css'
import facebookLogo from '../../photos/facebook.png'
import linkedInLogo from '../../photos/linkedin.png'
import twitterLogo from '../../photos/twitter.png'

export default function Footer() {
    return (
        <>
            <hr></hr>
            <div className = 'footer'>
                <div className = 'logo-footer'>
                    <a href = '#'><img src = {facebookLogo}></img></a>
                    <a href = '#'><img src = {linkedInLogo}></img></a>
                    <a href = '#'><img src = {twitterLogo}></img></a>
                </div>
            </div>
        </>
    )
}
