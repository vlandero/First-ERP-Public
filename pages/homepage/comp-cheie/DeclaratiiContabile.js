import React from 'react'
import photo from './poze/Rafila/3.jpg'
export default function DeclaratiiContabile({isOpen}) {
    if(isOpen!==5)
        return null;
    return (
        <div>
            <hr></hr>
            <div className='comp-cheie-flex'>
                <div>
                    <h3>Declarații contabile</h3>
                    <p style={{marginLeft:20}}>Scapi de bătaia de cap de la depunerea declarațiilor</p>
                    <ul className='comp-cheie-list'>
                        <li>Activitatea ta de contabilitate este externalizată către o firmă de servicii? Fie îi poți oferi furnizorului tău de servicii de contabile un utilizator de acces în First ERP, să-și genereze declarațiile contabile. Fie îi poți trimite un fișier de export pe care să-l importe în programul de contabilitate utilizat.</li>
                        <li>Ai un departament intern care se ocupă de generarea declarațiilor contabile? Vei găsi în programul First ERP instrumentele necesare pentru generarea, verificarea, validarea și depunerea declarațiilor, conform legislației în vigoare. Notele contabile se generează automat în First ERP, pe baza documentelor introduse de utilizatori în modulele operaționale de vânzări, achiziții și stocuri.</li>
                    </ul>
                </div>
                <img className='comp-cheie-img' style={{marginTop:50}} src={photo}></img>
            </div>
            
        </div>
    )
}
