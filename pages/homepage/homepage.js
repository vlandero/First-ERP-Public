import React, { useEffect,useState } from 'react'
import './homepage.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import RegisterButton from '../../../register-button'
import dispozitive from '../../../photos/Picture1.jpg'
import laptop from '../../../photos/Picture2.jpg'
import portrait from '../../../photos/person.png'
import ExtindereaVanzarilor from './comp-cheie/ExtindereaVanzarilor'
import AchizitiiComenzi from './comp-cheie/AchizitiiComenzi'
import PlatiIncasari from './comp-cheie/PlatiIncasari'
import DeclaratiiContabile from './comp-cheie/DeclaratiiContabile'
import GestiuneaStocurilor from './comp-cheie/GestiuneaStocurilor'
import RapoarteAnalize from './comp-cheie/RapoarteAnalize'
import AccesMobil from './comp-cheie/AccesMobil'


export default function Homepage() {
    useEffect(()=>{
        AOS.init({duration:2000})
    })
    const [active,setActive] = useState(0)
    return (
        <div style={{maxWidth:1200,marginLeft:'auto',marginRight:'auto'}}>
            <div className = 'first'>
                <div className='first-header'>
                    <h1>Primul program ERP al afacerii tale</h1>
                    <p>Achiziții. Gestiune stocuri. Facturare. Logistică. Contabilitate. Service.Toate componentele cheie ale unei afaceri de succes se bazează pe First ERP.</p>
                </div>
                <div className='first-links'>
                    <a href='#'>Beneficii First ERP</a>
                    <div className='vl'></div>
                    <a href='#'>De la 10 euro / lună</a>
                </div>
                
            </div>
            <div className = 'second'>
                <div className='second-left'>
                    <h1>ERP fără efort de implementare?</h1>
                    <h3>Da!</h3>
                    <p>First ERP vine cu funcționalități și fluxuri pre-configurate, ușor de folosit din prima. Astfel că elimini costurile și efortul de implementare ERP. Te conectezi în First ERP și începi să lucrezi imediat.</p>
                </div>
                
            </div>
            <div className='third'>
                <h1>Utilizatorii iubesc First ERP</h1>
                <div className='third-cifre'>
                    <div className='third-comp'>
                        <h4>624</h4>
                        <p>De ore pe an puteți câștiga folosind First ERP</p>
                    </div>
                    <div className='third-comp'>
                        <h4>38.000</h4>
                        <p>Utilizatori folosesc programele noastre software în România</p>
                    </div>
                    <div className='third-comp'>
                        <h4>30</h4>
                        <p>De zile este valabil contul gratuit First ERP</p>
                    </div>
                </div>
            </div>
            <div className = 'fourth'>
                <h3>Componente cheie First ERP</h3>
                <div className = 'componente-cheie'>
                    <div style={{transition:'background-color 400ms',border:active===1?'2px dashed black':'none'}} onClick={()=>setActive(1)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {500}>Extinderea<br></br> vânzărilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===2?'2px dashed black':'none'}} onClick={()=>setActive(2)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {700}>Achiziții și<br></br>comenzi<br></br>furnizori </h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===3?'2px dashed black':'none'}} onClick={()=>setActive(3)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {900}>Urmărirea<br></br>plăților și<br></br>încasărilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===4?'2px dashed black':'none'}} onClick={()=>setActive(4)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {1100}>Rapoarte<br></br>și analize</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===5?'2px dashed black':'none'}} onClick={()=>setActive(5)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {1300}>Declarații<br></br>contabile</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===6?'2px dashed black':'none'}} onClick={()=>setActive(6)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {1500}>Gestiunea<br></br>stocurilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:active===7?'2px dashed black':'none'}} onClick={()=>setActive(7)}>
                        <h4 data-aos = 'fade-up' data-aos-duration = {1700}>Acces<br></br>mobil</h4>
                    </div>
                </div>
                <ExtindereaVanzarilor isOpen={active} />
                <AchizitiiComenzi isOpen={active} />
                <PlatiIncasari isOpen={active} />
                <RapoarteAnalize isOpen={active} />
                <DeclaratiiContabile isOpen={active} />
                <GestiuneaStocurilor isOpen={active} />
                <AccesMobil isOpen={active} />
                
            </div>
            <div className = 'fifth'>
                <div className = 'rnm'>
                    <div className = 'text-rnm'>
                        <p>”First ERP este un ajutor de nădejde în activitatea de zi cu zi. 
                        Recomand acest soft tuturor celor care caută un instrument 
                        de control și productivitatea în afacere.”
                        </p>
                        <p>Mirela Șerban, R&M Audit</p>
                    </div>
                    <img src = {portrait}></img>
                </div>
            </div>
        </div>
    )
}

