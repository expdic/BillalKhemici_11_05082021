import React from 'react';
import '../styles/apropos.css';
import aboutImg from '../assets/about.png'
import Collapse from './collapse';




function Apropos() {

    return (
            <main className='aboutMain'>
                <section>
                    <div className='aboutImg'>
                        <img src={aboutImg} alt="about"></img>
                    </div>
                    <Collapse />
                    
                </section>
            </main>
        )
}
        

export default Apropos;