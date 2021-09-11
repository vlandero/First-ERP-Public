import React,{ useState } from 'react'
import Page1 from './content/page1';
import Page2 from './content/page2';
import Page3 from './content/page3';
import Page4 from './content/page4';
import './preturi.css'
import SetPageButton from './setpagebutton';

export default function Preturi() {
    const [page,setPage] = useState('page1');
    return (
        <div className='preturi-page'>
            <div className='nav-preturi'>
                <SetPageButton page={page} setPage={setPage} name='page1'></SetPageButton>
                <SetPageButton page={page} setPage={setPage} name='page2'></SetPageButton>
                <SetPageButton page={page} setPage={setPage} name='page3'></SetPageButton>
                <SetPageButton page={page} setPage={setPage} name='page4'></SetPageButton>
            </div>
            <Page1 name='page1' active={page}></Page1>
            <Page2 name='page2' active={page}></Page2>
            <Page3 name='page3' active={page}></Page3>
            <Page4 name='page4' active={page}></Page4>
        </div>
    )
}
