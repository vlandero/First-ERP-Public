import React,{useState,useEffect} from 'react'
import RegisterButton from '../../register-button'
import DropdownNav from './dropdown'

interface Props{
    closeMenu?:() => void
}
type dimension = 'small'|'big'

export default function NavMenu(props:Props):JSX.Element|null {
    
    const [produse,setProduse] = useState(false)
    const [resurse,setResurse] = useState(false)
    const [suport,setSuport] = useState(false)
    const [contact,setContact] = useState(false)
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleResize():void{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[width])
    const addEvent = (element:HTMLElement|null,type:dimension,state:boolean,setState:React.Dispatch<React.SetStateAction<boolean>>,id?:string):void =>{
        if(element == null)
            return
        if(type==='small')
            return element.addEventListener('click',():void=>{setState(!state)})
        element.addEventListener('mouseenter',():void=>{setState(true)})
        element.addEventListener('mouseleave',():void=>{setState(false)})
        element.addEventListener('click',()=>{
            window.location.href = `/${id}`
        })
    }
    useEffect(()=>{
        if(width<1125){
            addEvent(document.getElementById('produse'),'small',produse,setProduse)
            addEvent(document.getElementById('resurse'),'small',resurse,setResurse)
            addEvent(document.getElementById('suport'),'small',suport,setSuport)
            addEvent(document.getElementById('contact'),'small',contact,setContact)
        }
        else{
            addEvent(document.getElementById('produse'),'big',produse,setProduse,'produse')
            addEvent(document.getElementById('resurse'),'big',resurse,setResurse,'resurse')
            addEvent(document.getElementById('suport'),'big',suport,setSuport,'suport')
            addEvent(document.getElementById('contact'),'big',contact,setContact,'contact')
        }
    },[width,produse,resurse,suport,contact])
    return (
        <>
            <div className = 'nav-menu'>
                <ul className='nav-menu-ul'>
                    <li className='nav-menu-li' id='produse'>
                        <a className='nav-menu-li-link'><div>Produse</div></a>
                        <DropdownNav isOpen={produse}>
                            <li><a href='/produse/administrarea-afacerii'><div>&#8594First ERP - Administrarea afacerii</div></a></li>
                            <li><a href='/produse/contabilitate'><div>&#8594First ERP - Contabilitate</div></a></li>
                            <li><a href='/produse/service'><div>&#8594First ERP - Service</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li'>
                        <a className='nav-menu-li-link' href = '/preturi'><div>Preturi</div></a>
                    </li>
                    <li className='nav-menu-li'>
                        <a className='nav-menu-li-link' href='/avantaje'><div>Avantaje FirstERP</div></a>
                    </li>
                    <li className='nav-menu-li' id='resurse'>
                        <a className='nav-menu-li-link'><div>Resurse</div></a>
                        <DropdownNav isOpen={resurse}>
                            <li><a href='/resurse/ce-este-first-erp'><div>&#8594Ce este First ERP</div></a></li>
                            <li><a href='/prima'><div>&#8594Blog</div></a></li>
                            <li><a href='/prima'><div>&#8594Ce spun clienții</div></a></li>
                            <li><a href='/resurse/intrebari-frecvente'><div>&#8594Întrebări frecvente</div></a></li>
                            <li><a href='/prima'><div>&#8594Integrări</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li' id='suport'>
                        <a className='nav-menu-li-link'><div>Suport</div></a>
                        <DropdownNav isOpen={suport}>
                            <li><a href='/prima'><div>&#8594Ghid introductiv</div></a></li>
                            <li><a href='/prima'><div>&#8594Tutoriale video</div></a></li>
                            <li><a href='/prima'><div>&#8594Discută cu un consultant de vânzări</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li' id='contact'>
                        <a className='nav-menu-li-link'><div>Contact</div></a>
                        <DropdownNav isOpen={contact}>
                            <li><a href='/contact/despre'><div>&#8594Despre noi</div></a></li>
                        </DropdownNav>
                    </li>
                    
                    
                </ul>
                <div className = 'nav-buttons-div'>
                    <RegisterButton id='register-mobile' />
                    <button className = 'open-form' id = 'login' onClick = {()=>{
                        window.location.href = '/login'
                    }}> <span>Login</span></button>
                </div>
            </div>
        </>
    )
}
