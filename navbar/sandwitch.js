import React from 'react'
import './style.css'
import NavMenu from './nav-menu';

export default class Sandwich extends React.Component {

    constructor(props){
        super(props);
        this.dropdown = this.dropdown.bind(this);
        this.state = {
            toggled: 0,
        }
    }
    dropdown(){
        let bar1 = document.getElementsByClassName('bar1');
        let bar2 = document.getElementsByClassName('bar2');
        let bar3 = document.getElementsByClassName('bar3');
        let menu = document.getElementsByClassName('nav-menu');
        if(!this.state.toggled){
            bar1[0].style.transform = 'rotate(-45deg) translate(-9px, 6px)';
            bar2[0].style.opacity = 0;
            bar3[0].style.transform = 'rotate(45deg) translate(-8px, -8px)';
            menu[0].style.visibility = 'visible';
            menu[0].style.opacity = 1;
            this.setState({toggled:1});
            
        }
        else{
            bar1[0].style.transform = '';
            bar2[0].style.opacity = 1;
            bar3[0].style.transform = '';
            menu[0].style.opacity = 0;
            setTimeout(() => {
                menu[0].style.visibility = 'hidden';
            }, 200);
            
            this.setState({toggled:0});
        }
        
    }
    render(){
        return (
            <div className = "sw-div">
                <div className="sandwich" onClick = {this.dropdown}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <NavMenu closeMenu = {this.dropdown} />
            </div>
            
        )
    }
}



