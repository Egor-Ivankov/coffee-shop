import React from 'react';
import lines from '@assets/img/lines.png';
import './howToSleep.scss';

const HowToSleep = () => {
    return (
        <section className='how-to-sleep'>
            <div className="how-to-sleep-container">
                <h2 className="how-to-sleep-container-title">How to sleep <br/> sun coffee</h2>
                <p className="how-to-sleep-container-description">
                    Nemo enim ipsam voluptatem quia <br/> 
                    voluptas sit aspernatur aut odit 
                    aut <br/> fugit, sed quia consequuntur
                    magni <br/> dolores eos
                </p>
            </div>
            <img src={lines} alt="lines" />
        </section>
    );
}

export default HowToSleep;
