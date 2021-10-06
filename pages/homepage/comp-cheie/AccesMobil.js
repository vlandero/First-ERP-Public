import React from 'react'
import photo from './poze/Rafila/1.jpg'

export default function AccesMobil({isOpen}) {
    if(isOpen!==7)
        return null;
    return (
        <div>
            <hr></hr>
            <div className='comp-cheie-flex'>
                <div>
                    <h3>Acces mobil</h3>
                    <p style={{marginLeft:20}}>Te conectezi la First ERP și devii productiv de oriunde ai fi</p>
                    <ul className='comp-cheie-list'>
                        <li>Adevărata mobilitate în afaceri înseamnă ca, de oriunde te-ai afla, să te conectezi la datele esențiale ale business-ului, să accesezi rapoarte și să poți efectua diverse operațiuni importante: facturare, procesare plăți și încasări, gestiune stocuri.</li>
                        <li>Accesul este securizat, în limita drepturilor fiecărui utilizator. Conexiunea la baza de date beneficiază de protecție maximă.</li>
                        <li>Acces multi-dispozitiv: laptop, calculator, telefon, tabletă. Tot ceea ce-ți trebuie este ca dispozitivul să fie conectat la Internet.</li>
                    </ul>
                </div>
                <img className='comp-cheie-img' style={{marginTop:30}} src={photo}></img>
            </div>
        </div>
    )
}
