import React from 'react'
import photo from './poze/Rafila/10.jpg'
export default function PlatiIncasari({isOpen}) {
    if(isOpen!==3)
        return null;
    return (
        <div>
            <hr></hr>
            <div className='comp-cheie-flex'>
                <div>
                    <h3>Urmărirea plăților și încasărilor</h3>
                    <p style={{marginLeft:20}}>Controlul financiar al afacerii</p>
                    <ul className='comp-cheie-list'>
                        <li>First ERP se integrează cu aplicațiile software de eBanking și îți permite să imporți extrasele bancare furnizate de către băncile cu care lucrezi.</li>
                        <li>Crești gradul de încasare a facturilor emise prin notificările automate trimise prin email atât reprezentanților de vânzări cât și clienților, la apropierea termenului scadent și la depășirea acestuia.</li>
                        <li>Obții predictibilitate financiară, astfel încât să eviți surprizele neplăcute în efectuarea plăților către furnizori sau a plăților de salarii și taxe.</li>
                    </ul>
                </div>
                <img src={photo} style={{maxWidth:200,marginTop:10}} className='comp-cheie-img'></img>
            </div>
            
        </div>
    )
}
