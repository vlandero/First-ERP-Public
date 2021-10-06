import React from 'react'
import photo from './poze/Rafila/2.jpg'
export default function AchizitiiComenzi({isOpen}) {
    if(isOpen!==2)
        return null;
    return (
        <div>
            <hr></hr>
            <div className='comp-cheie-flex'>
                <div>
                    <h3>Achiziții și comenzi furnizori</h3>
                    <p style={{marginLeft:20}}>Administrarea relației cu furnizorii</p>
                    <ul className='comp-cheie-list'>
                        <li>În relația cu furnizorii, controlezi faptul că prețurile de achiziție sunt conforme cu prețurile ofertate de furnizori sau cu prețurile din contracte și comenzi.</li>
                        <li>Elimini erorile și reduci timpul necesar înregistrării documentelor de achiziție. Automatizezi introducerea facturii furnizori pe bază de comandă furnizor.</li>
                        <li>La achizițiile de produse de la furnizorii ce folosesc tot programul First ERP, veți recepționa automat documentele de achiziție.</li>
                    </ul>
                </div>
                <img src={photo} style={{marginTop:35}} className='comp-cheie-img'></img>
            </div>
            
        </div>
    )
}
