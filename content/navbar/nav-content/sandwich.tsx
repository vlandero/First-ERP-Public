import React,{useState} from 'react'
import NavMenu from './nav-menu'

export default function Sandwich() {
    const [toggled, setToggled] = useState<boolean>(false)
    const dropdown = () => {
        let bar1 = document.getElementsByClassName('bar1') as HTMLCollectionOf<HTMLElement>
        let bar2 = document.getElementsByClassName('bar2') as HTMLCollectionOf<HTMLElement>
        let bar3 = document.getElementsByClassName('bar3') as HTMLCollectionOf<HTMLElement>
        let menu = document.getElementsByClassName('nav-menu') as HTMLCollectionOf<HTMLElement>
        if(!toggled){
            bar1[0].style.transform = 'rotate(-45deg) translate(-9px, 6px)'
            bar2[0].style.opacity = '0'
            bar3[0].style.transform = 'rotate(45deg) translate(-8px, -8px)'
            menu[0].style.visibility = 'visible'
            menu[0].style.opacity = '1'
            setToggled(true)
            
        }
        else{
            bar1[0].style.transform = ''
            bar2[0].style.opacity = '1'
            bar3[0].style.transform = ''
            menu[0].style.opacity = '0'
            setTimeout(() => {
                menu[0].style.visibility = 'hidden'
            }, 200);
            
            setToggled(false)
        }
        
    }
    return (
        <div className = "sw-div">
            <div className="sandwich" onClick = {dropdown}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
            <NavMenu closeMenu = {dropdown} />
        </div>
    )
}
