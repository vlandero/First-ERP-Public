import React from 'react'

export default function GestiuneaStocurilor({isOpen}) {
    if(isOpen!==6)
        return null;
    return (
        <div>
            <hr></hr>
            <h3>Gestiunea stocurilor</h3>
            <ul className='comp-cheie-list'>
                <li>Ai trasabilitate completă asupra produselor, de la intrarea lor în gestiune și până la vânzare și livrare către clienți.</li>
                <li>Gestionarea relațiilor cu furnizorii, astfel încât să te asiguri că produsele recepționate sunt conforme cu produsele comandate, cantitativ și valoric.</li>
                <li>Organizezi stocurile de marfă pe gestiuni, obții controlul cantitativ-valoric și contabil al stocurilor și generezi automat documentele specifice intrărilor, ieșirilor și mișcărilor de marfă.</li>
            </ul>
        </div>
    )
}
