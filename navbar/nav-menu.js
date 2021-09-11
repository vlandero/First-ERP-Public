import React, {useState,useEffect} from 'react'
import './style.css'
import Form from '../content/forms/form';
import DropdownNav from './dropdown-nav';
export default function NavMenu(props) {
    const [isFormOpen, setFormOpen] = useState(0);
    function setDefaultItems(){
        sessionStorage.setItem('nume','');
        sessionStorage.setItem('adresa','');
        sessionStorage.setItem('telefon','');
        sessionStorage.setItem('parola','');
        sessionStorage.setItem('user','');
        sessionStorage.setItem('verifica-parola','');
        sessionStorage.setItem('regcom','');
        sessionStorage.setItem('atributfiscal','-');
        sessionStorage.setItem('impozit','venit');
        sessionStorage.setItem('impozitpevenit','');
        sessionStorage.setItem('linkProvizoriu','');
        sessionStorage.setItem('tvaIncasare','0');
        sessionStorage.setItem('loggedGoogle','0');
    }
    const [produse,setProduse] = useState(0);
    const [resurse,setResurse] = useState(0);
    const [suport,setSuport] = useState(0);
    const [contact,setContact] = useState(0);
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[width])
    useEffect(()=>{
        if(width<1125){
            document.getElementById('produse').addEventListener('click',()=>{
                setProduse(!produse)
            })
            document.getElementById('resurse').addEventListener('click',()=>{
                setResurse(!resurse)
            })
            document.getElementById('suport').addEventListener('click',()=>{
                setSuport(!suport)
            })
            document.getElementById('contact').addEventListener('click',()=>{
                setContact(!contact)
            })
        }
        else{
            document.getElementById('produse').addEventListener('mouseenter',()=>{
                setProduse(1)
            })
            document.getElementById('resurse').addEventListener('mouseenter',()=>{
                setResurse(1)
            })
            document.getElementById('resurse').addEventListener('mouseleave',()=>{
                setResurse(0)
            })
            document.getElementById('produse').addEventListener('mouseleave',()=>{
                setProduse(0)
            })
            document.getElementById('suport').addEventListener('mouseenter',()=>{
                setSuport(1)
            })
            document.getElementById('suport').addEventListener('mouseleave',()=>{
                setSuport(0)
            })
            document.getElementById('contact').addEventListener('mouseenter',()=>{
                setContact(1)
            })
            document.getElementById('contact').addEventListener('mouseleave',()=>{
                setContact(0)
            })
        }
    },[width,produse,resurse,suport,contact])
    return (
        <>
            <div className = 'nav-menu'>
                <ul className='nav-menu-ul'>
                    <li className='nav-menu-li' id='produse'>
                        <a className='nav-menu-li-link'><div>Produse</div></a>
                        <DropdownNav isOpen={produse}>
                            <li><a href='/prima'><div>&#8594;First ERP - Administrarea afacerii</div></a></li>
                            <li><a href='/prima'><div>&#8594;First ERP - Contabilitate</div></a></li>
                            <li><a href='/prima'><div>&#8594;First ERP - Service</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li'>
                        <a className='nav-menu-li-link' href = '/preturi'><div>Preturi</div></a>
                    </li>
                    <li className='nav-menu-li'>
                        <a className='nav-menu-li-link'><div>Avantaje FirstERP</div></a>
                    </li>
                    <li className='nav-menu-li' id='resurse'>
                        <a className='nav-menu-li-link'><div>Resurse</div></a>
                        <DropdownNav isOpen={resurse}>
                            <li><a href='/prima'><div>&#8594;Ce este First ERP</div></a></li>
                            <li><a href='/prima'><div>&#8594;Blog</div></a></li>
                            <li><a href='/prima'><div>&#8594;Ce spun clienții</div></a></li>
                            <li><a href='/prima'><div>&#8594;Întrebări frecvente</div></a></li>
                            <li><a href='/prima'><div>&#8594;Integrări</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li' id='suport'>
                        <a className='nav-menu-li-link'><div>Suport</div></a>
                        <DropdownNav isOpen={suport}>
                            <li><a href='/prima'><div>&#8594;Ghid introductiv</div></a></li>
                            <li><a href='/prima'><div>&#8594;Tutoriale video</div></a></li>
                            <li><a href='/prima'><div>&#8594;Discută cu un consultant de vânzări</div></a></li>
                        </DropdownNav>
                    </li>
                    <li className='nav-menu-li' id='contact'>
                        <a className='nav-menu-li-link'><div>Contact</div></a>
                        <DropdownNav isOpen={contact}>
                            <li><a href='/prima'><div>&#8594;Despre noi</div></a></li>
                        </DropdownNav>
                    </li>
                    
                    
                </ul>
                <div className = 'nav-buttons-div'>
                    <button className = 'open-form' onClick = {()=>{
                        setFormOpen(1);
                        setDefaultItems();
                        if(props.closeMenu)
                            props.closeMenu();
                        }}>
                        <span>Incearca gratuit</span>
                    </button>
                        <button className = 'open-form' id = 'login' onClick = {()=>{
                            window.location.href = '/login';
                        }}> <span>Login</span></button>
                </div>
            </div>
            <Form open = {isFormOpen} onClose ={()=>{setFormOpen(0)}}></Form>
        </>
    )
}
