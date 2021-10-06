import React, { useEffect,useState } from 'react'
import './homepage.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import RegisterButton from '../../../register-button'
import dispozitive from '../../../photos/Picture1.jpg'
import laptop from '../../../photos/Picture2.jpg'
import portrait from '../../../photos/person.png'
import second from './comp-cheie/poze/full_0.jpg'

import ExtindereaVanzarilor from './comp-cheie/ExtindereaVanzarilor'
import AchizitiiComenzi from './comp-cheie/AchizitiiComenzi'
import PlatiIncasari from './comp-cheie/PlatiIncasari'
import DeclaratiiContabile from './comp-cheie/DeclaratiiContabile'
import GestiuneaStocurilor from './comp-cheie/GestiuneaStocurilor'
import RapoarteAnalize from './comp-cheie/RapoarteAnalize'
import AccesMobil from './comp-cheie/AccesMobil'
import Acordion from './acordion/template'


export default function Homepage() {
    useEffect(()=>{
        AOS.init({duration:1000})
    })
    const [active,setActive] = useState(1)
    return (
        <div className='page-div'>
            <div className = 'first'>
                <div className='first-header'>
                    <h1>Primul program ERP al afacerii tale</h1>
                    <p>Achiziții. Gestiune stocuri. Facturare. Logistică. Contabilitate. Service.Toate componentele cheie ale unei afaceri de succes se bazează pe First ERP.</p>
                </div>
                <div className='first-links'>
                    <a href='/avantaje'>Beneficii First ERP</a>
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
                <img src={second} className='second-right'></img>
                
            </div>
            <div className='third'>
                <h1>Utilizatorii iubesc First ERP</h1>
                <div className='third-cifre'>
                    <div data-aos='fade-right' className='third-comp'>
                        <h4>624</h4>
                        <p>De ore pe an puteți câștiga folosind First ERP</p>
                    </div>
                    <div data-aos='fade-up' className='third-comp'>
                        <h4>38.000</h4>
                        <p>Utilizatori folosesc programele noastre software în România</p>
                    </div>
                    <div data-aos='fade-left' className='third-comp'>
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
            <div className='sixth'>
                <h2>Ce este FirstERP</h2>
                <p>First ERP înseamnă modul în care te organizezi eficient pentru a dezvolta afacerea. First ERP reprezintă produsele software de afaceri prin care angajații firmei tale vor lucra mai eficient, pentru îndeplinirea obiectivelor stabilite.</p>
                <h2 style={{alignSelf:'center',marginTop:60}}>De ce First ERP? Avantaje cheie pentru afacerea ta</h2>
                <div className='acordion-menu'>
                    <Acordion title='Controlul afacerii'>Urmărești indicatori cheie ai afacerii și ești anunțat, prin notificări automate, atunci când se întâmplă ceva important cu stocurile, cu achizițiile, cu vânzările sau încasările. Controlul exercitat se referă atât la nivel financiar, cât și operațional.
                    </Acordion>
                    <Acordion title='Integrări cheie pentru dezvoltarea afacerii'>eCommerce, curieri, ANAF – First ERP se integrează cu cele mai importante instrumente software de afaceri utilizate de o firmă în România.
                    </Acordion>
                    <Acordion title='Ușor de utilizat și de administrat'>Ai un angajat nou în firmă? Îi creezi utilizator în programul First ERP și devine productiv imediat după angajarea sa – fie că lucrează la vânzări, achiziții sau stocuri. First ERP este ușor de folosit de către oricine, cu o interfață simplă și clară. De administrarea utilizatorilor, de setarea drepturilor de acces în program și de crearea de noi puncte de lucru în aplicație te vei ocupa fără să ai nevoie de ajutorul nimănui.
                    </Acordion>
                    <Acordion title='Adio foi, agende și fișiere Excel împrăștiate peste tot. Bun venit, organizare!'>Zeci sau sute de ore pierde o firmă în fiecare lună atunci când este dependentă de utilizarea hârtiilor, a agendelor și mai ales a fișierelor interminabile în Excel. Plus că există riscul permanent de eroare. Prin utilizarea First ERP și prin digitalizarea activităților cheie din companie, vânzări, cumpărări, stocuri, contabilitate, hârtiile și fișierele Excel devin inutile. Absolut toate operațiunile efectuate de către angajați vor fi disponibile în aplicație, de unde extragi și rapoartele și analizele necesare controlului afacerii.
                    </Acordion>
                    <Acordion title='Lucru colaborativ în echipă'>First ERP, singura aplicație de business de care are nevoie o companie, reprezintă locul în care angajații din firmă își îndeplinesc o mare parte din task-urile zilnice. Utilizatorii comunică și colaborează intern folosind platforma First ERP, în care sunt conectați cu toții și care le oferă accesul la date comune despre firmă.
                    </Acordion>
                    <Acordion title='Funcționează imediat ce începi să îl folosești'>Pe domenii de activitate, ți-am pregătit fluxuri preconfigurate care să te ajute să începi utilizarea aplicației imediat după achiziționarea ei. Fără implementare, fără configurări complexe.
                    </Acordion>
                    <Acordion title='Orientat spre îndeplinirea obiectivelor firmei'>În First ERP ai la dispoziție rapoartele și tablourile de bord necesare pentru urmărirea îndeplinirii obiectivelor de afaceri. Ai atât date manageriale, cât și informații pentru fiecare angajat, cu ajutorul cărora să își monitorizeze fiecare rezultatele personale.
                    </Acordion>
                    <Acordion title='Funcționează online și nu necesită instalări de aplicații'>Laptop, telefon sau tabletă: orice dispozitiv ai la îndemână, accesezi First ERP printr-o conexiune 100% securitizată și ai acces la informații despre afacerea ta, disponibile în timp real.
                    </Acordion>
                </div>
            </div>
            <div className='seventh'>
                <h2>Începi utilizarea First ERP în firma ta</h2>
                <h4>Creează-ți contul gratuit valabil 30 de zile</h4>
                <p style={{marginLeft:20}}>Pentru prețuri, alege-ți varianta de First ERP care ți se potrivește. Pentru a descoperi funcționalitățile enumerate mai jos ai la dispoziție 30 de zile de cont gratuit.</p>
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

