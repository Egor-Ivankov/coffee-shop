import React from 'react';
import cupCoffee from '@assets/img/cup-coffee.png';
import commasLines from '@assets/img/commas-lines.png';
import './cupCoffeeSection.scss';

export default function CupCoffeeSection() {
    return (
        <section className='cup-coffee-section'>
            <img className='cup-coffee-section-cup' src={cupCoffee} alt="cup-coffee" />
            <div className='cup-coffee-section-container'>
                <img className='cup-coffee-section-container-commas' src={commasLines} alt="commas-lines" />
                <p className='cup-coffee-section-container-quotation'>
                    Nemo enim ipsam voluptatem  quia voluptas sit <br/> 
                    aspernatur aut odit aut fugit, sed quia <br/>
                    consequuntur magni dolores eos
                </p>
                <p className='cup-coffee-section-container-author'>
                    - Mark Schewll
                </p>
            </div>
        </section>
    )
}
