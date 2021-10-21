import React,{useState} from 'react'
import './style.css'
import Accordion from './accordion_template'
import CompCheie from './comp_cheie_template'
export default function Homepage(): JSX.Element {
    const [comp_cheie,set_comp_cheie] = useState<number>(1)
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
                    <a href='/'>De la 10 euro / lună</a>
                </div>
                
            </div>
            <div className = 'second'>
                <div className='second-left'>
                    <h1>ERP fără efort de implementare?</h1>
                    <h3>Da!</h3>
                    <p>First ERP vine cu funcționalități și fluxuri pre-configurate, ușor de folosit din prima. Astfel că elimini costurile și efortul de implementare ERP. Te conectezi în First ERP și începi să lucrezi imediat.</p>
                </div>
                <img alt='' className='second-right'></img>
                
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
                    <div style={{transition:'background-color 400ms',border:comp_cheie===1?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(1)}>
                        <h4>Extinderea<br></br> vânzărilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===2?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(2)}>
                        <h4>Achiziții și<br></br>comenzi<br></br>furnizori </h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===3?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(3)}>
                        <h4>Urmărirea<br></br>plăților și<br></br>încasărilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===4?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(4)}>
                        <h4>Rapoarte<br></br>și analize</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===5?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(5)}>
                        <h4>Declarații<br></br>contabile</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===6?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(6)}>
                        <h4>Gestiunea<br></br>stocurilor</h4>
                    </div>
                    <div style={{transition:'background-color 400ms',border:comp_cheie===7?'2px dashed black':'none'}} onClick={()=>set_comp_cheie(7)}>
                        <h4>Acces<br></br>mobil</h4>
                    </div>
                </div>
                <CompCheie id={1} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Extinderea vânzărilor</h3>
                    <ul className='comp-cheie-list'>
                        <li>Administrarea canalelor de vânzare online și offline dintr-un singur program: First ERP.</li>
                        <li>Creezi și impui politica de vânzări și prețuri dorită. Te asiguri că va fi respectată de toți utilizatorii responsabili de vânzări în firmă.</li>
                        <li>Ofertă - Comandă - Contract - Factură - Încasare. Întreg procesul de vânzare este controlat cu ajutorul First ERP.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={2} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Achiziții și comenzi furnizori</h3>
                    <p style={{marginLeft:20}}>Administrarea relației cu furnizorii</p>
                    <ul className='comp-cheie-list'>
                        <li>În relația cu furnizorii, controlezi faptul că prețurile de achiziție sunt conforme cu prețurile ofertate de furnizori sau cu prețurile din contracte și comenzi.</li>
                        <li>Elimini erorile și reduci timpul necesar înregistrării documentelor de achiziție. Automatizezi introducerea facturii furnizori pe bază de comandă furnizor.</li>
                        <li>La achizițiile de produse de la furnizorii ce folosesc tot programul First ERP, veți recepționa automat documentele de achiziție.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={3} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Urmărirea plăților și încasărilor</h3>
                    <p style={{marginLeft:20}}>Controlul financiar al afacerii</p>
                    <ul className='comp-cheie-list'>
                        <li>First ERP se integrează cu aplicațiile software de eBanking și îți permite să imporți extrasele bancare furnizate de către băncile cu care lucrezi.</li>
                        <li>Crești gradul de încasare a facturilor emise prin notificările automate trimise prin email atât reprezentanților de vânzări cât și clienților, la apropierea termenului scadent și la depășirea acestuia.</li>
                        <li>Obții predictibilitate financiară, astfel încât să eviți surprizele neplăcute în efectuarea plăților către furnizori sau a plăților de salarii și taxe.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={4} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Rapoarte și analize</h3>
                    <p style={{marginLeft:20}}>Ai controlul afacerii cu ajutoarelor rapoartelor și analizelor foarte ușor de folosit</p>
                    <ul className='comp-cheie-list'>
                        <li>Rapoartele se bazează pe datele operate în timp real în programul First ERP. Imediat ce un utilizator introduce orice document, factură, plată, încasare, rapoartele se actualizează instantaneu.</li>
                        <li>Tablouri de bord ce îți oferă o imagine de ansamblu, managerială, asupra afacerii.</li>
                        <li>Rapoarte și analize dedicate fiecărui departament ce utilizează programul First ERP: vânzări, achiziții, logistică, contabilitate.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={5} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Declarații contabile</h3>
                    <p style={{marginLeft:20}}>Scapi de bătaia de cap de la depunerea declarațiilor</p>
                    <ul className='comp-cheie-list'>
                        <li>Activitatea ta de contabilitate este externalizată către o firmă de servicii? Fie îi poți oferi furnizorului tău de servicii de contabile un utilizator de acces în First ERP, să-și genereze declarațiile contabile. Fie îi poți trimite un fișier de export pe care să-l importe în programul de contabilitate utilizat.</li>
                        <li>Ai un departament intern care se ocupă de generarea declarațiilor contabile? Vei găsi în programul First ERP instrumentele necesare pentru generarea, verificarea, validarea și depunerea declarațiilor, conform legislației în vigoare. Notele contabile se generează automat în First ERP, pe baza documentelor introduse de utilizatori în modulele operaționale de vânzări, achiziții și stocuri.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={6} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Gestiunea stocurilor</h3>
                    <ul className='comp-cheie-list'>
                        <li>Ai trasabilitate completă asupra produselor, de la intrarea lor în gestiune și până la vânzare și livrare către clienți.</li>
                        <li>Gestionarea relațiilor cu furnizorii, astfel încât să te asiguri că produsele recepționate sunt conforme cu produsele comandate, cantitativ și valoric.</li>
                        <li>Organizezi stocurile de marfă pe gestiuni, obții controlul cantitativ-valoric și contabil al stocurilor și generezi automat documentele specifice intrărilor, ieșirilor și mișcărilor de marfă.</li>
                    </ul>
                </CompCheie>
                <CompCheie id={7} currentOpen={comp_cheie} imageSrc='' imageSyle={{}}>
                    <h3>Acces mobil</h3>
                    <p style={{marginLeft:20}}>Te conectezi la First ERP și devii productiv de oriunde ai fi</p>
                    <ul className='comp-cheie-list'>
                        <li>Adevărata mobilitate în afaceri înseamnă ca, de oriunde te-ai afla, să te conectezi la datele esențiale ale business-ului, să accesezi rapoarte și să poți efectua diverse operațiuni importante: facturare, procesare plăți și încasări, gestiune stocuri.</li>
                        <li>Accesul este securizat, în limita drepturilor fiecărui utilizator. Conexiunea la baza de date beneficiază de protecție maximă.</li>
                        <li>Acces multi-dispozitiv: laptop, calculator, telefon, tabletă. Tot ceea ce-ți trebuie este ca dispozitivul să fie conectat la Internet.</li>
                    </ul>
                </CompCheie>
                
                
            </div>
            <div className='sixth'>
                <h2>Ce este FirstERP</h2>
                <p>First ERP înseamnă modul în care te organizezi eficient pentru a dezvolta afacerea. First ERP reprezintă produsele software de afaceri prin care angajații firmei tale vor lucra mai eficient, pentru îndeplinirea obiectivelor stabilite.</p>
                <h2 style={{alignSelf:'center',marginTop:60}}>De ce First ERP? Avantaje cheie pentru afacerea ta</h2>
                <div className='acordion-menu'>
                    <Accordion title='Controlul afacerii'>Urmărești indicatori cheie ai afacerii și ești anunțat, prin notificări automate, atunci când se întâmplă ceva important cu stocurile, cu achizițiile, cu vânzările sau încasările. Controlul exercitat se referă atât la nivel financiar, cât și operațional.
                    </Accordion>
                    <Accordion title='Integrări cheie pentru dezvoltarea afacerii'>eCommerce, curieri, ANAF – First ERP se integrează cu cele mai importante instrumente software de afaceri utilizate de o firmă în România.
                    </Accordion>
                    <Accordion title='Ușor de utilizat și de administrat'>Ai un angajat nou în firmă? Îi creezi utilizator în programul First ERP și devine productiv imediat după angajarea sa – fie că lucrează la vânzări, achiziții sau stocuri. First ERP este ușor de folosit de către oricine, cu o interfață simplă și clară. De administrarea utilizatorilor, de setarea drepturilor de acces în program și de crearea de noi puncte de lucru în aplicație te vei ocupa fără să ai nevoie de ajutorul nimănui.
                    </Accordion>
                    <Accordion title='Adio foi, agende și fișiere Excel împrăștiate peste tot. Bun venit, organizare!'>Zeci sau sute de ore pierde o firmă în fiecare lună atunci când este dependentă de utilizarea hârtiilor, a agendelor și mai ales a fișierelor interminabile în Excel. Plus că există riscul permanent de eroare. Prin utilizarea First ERP și prin digitalizarea activităților cheie din companie, vânzări, cumpărări, stocuri, contabilitate, hârtiile și fișierele Excel devin inutile. Absolut toate operațiunile efectuate de către angajați vor fi disponibile în aplicație, de unde extragi și rapoartele și analizele necesare controlului afacerii.
                    </Accordion>
                    <Accordion title='Lucru colaborativ în echipă'>First ERP, singura aplicație de business de care are nevoie o companie, reprezintă locul în care angajații din firmă își îndeplinesc o mare parte din task-urile zilnice. Utilizatorii comunică și colaborează intern folosind platforma First ERP, în care sunt conectați cu toții și care le oferă accesul la date comune despre firmă.
                    </Accordion>
                    <Accordion title='Funcționează imediat ce începi să îl folosești'>Pe domenii de activitate, ți-am pregătit fluxuri preconfigurate care să te ajute să începi utilizarea aplicației imediat după achiziționarea ei. Fără implementare, fără configurări complexe.
                    </Accordion>
                    <Accordion title='Orientat spre îndeplinirea obiectivelor firmei'>În First ERP ai la dispoziție rapoartele și tablourile de bord necesare pentru urmărirea îndeplinirii obiectivelor de afaceri. Ai atât date manageriale, cât și informații pentru fiecare angajat, cu ajutorul cărora să își monitorizeze fiecare rezultatele personale.
                    </Accordion>
                    <Accordion title='Funcționează online și nu necesită instalări de aplicații'>Laptop, telefon sau tabletă: orice dispozitiv ai la îndemână, accesezi First ERP printr-o conexiune 100% securitizată și ai acces la informații despre afacerea ta, disponibile în timp real.
                    </Accordion>
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
                    <img alt=""></img>
                </div>
            </div>
        </div>
    )
}
