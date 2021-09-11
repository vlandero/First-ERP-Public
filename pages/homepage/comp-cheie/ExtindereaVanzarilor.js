import React from 'react'

export default function ExtindereaVanzarilor({isOpen}) {
    if(isOpen!==1)
        return null;
    return (
        <div>
            <hr></hr>
            <h3>Extinderea vânzărilor</h3>
            <ul className='comp-cheie-list'>
                <li>Administrarea canalelor de vânzare online și offline dintr-un singur program: First ERP.</li>
                <li>Creezi și impui politica de vânzări și prețuri dorită. Te asiguri că va fi respectată de toți utilizatorii responsabili de vânzări în firmă.</li>
                <li>Ofertă - Comandă - Contract - Factură - Încasare. Întreg procesul de vânzare este controlat cu ajutorul First ERP.</li>
            </ul>
        </div>
    )
}
