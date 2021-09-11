import React from 'react'

export default function RapoarteAnalize({isOpen}) {
    if(isOpen!==4)
        return null;
    return (
        <div>
            <hr></hr>
            <h3>Rapoarte și analize</h3>
            <p style={{marginLeft:20}}>Ai controlul afacerii cu ajutoarelor rapoartelor și analizelor foarte ușor de folosit</p>
            <ul className='comp-cheie-list'>
                <li>Rapoartele se bazează pe datele operate în timp real în programul First ERP. Imediat ce un utilizator introduce orice document, factură, plată, încasare, rapoartele se actualizează instantaneu.</li>
                <li>Tablouri de bord ce îți oferă o imagine de ansamblu, managerială, asupra afacerii.</li>
                <li>Rapoarte și analize dedicate fiecărui departament ce utilizează programul First ERP: vânzări, achiziții, logistică, contabilitate.</li>
            </ul>
        </div>
    )
}
