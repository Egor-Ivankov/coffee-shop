import React from 'react';
import lines from '@assets/img/lines.png';
import leafs from '@assets/img/leafs.png';
import planet from '@assets/img/eco-planet.png';
import usa from '@assets/img/made-in-usa.png';
import './benefitsSection.scss';

const BenefitsSection = () => {
    return (
        <section id='benefitsSection' className='benefits-section'>
            <div className='benefits-section-origin'>
                <h2 className='benefits-section-origin-h2'>100% single <br/> origin <br/> specialty <br/> coffee <br/> </h2>
                <img src={lines} alt="lines" />
                <ul className='benefits-section-origin-list'>
                    <li className='benefits-section-origin-list-item'>
                        <img className='benefits-section-origin-list-item-img' src={planet} alt="eco-planet" />
                        <hr className='benefits-section-origin-list-item-line'/>
                        <span className='benefits-section-origin-list-item-span'>Eco friendly water <br/> based ink</span>
                    </li>
                    <li className='benefits-section-origin-list-item'>
                        <img className='benefits-section-origin-list-item-img' src={leafs} alt="leafs" />
                        <hr className='benefits-section-origin-list-item-line'/>
                        <span className='benefits-section-origin-list-item-span'>Renewable & <br/> compositable materials</span>
                    </li>                    
                    <li className='benefits-section-origin-list-item'>
                        <img className='benefits-section-origin-list-item-img' src={usa} alt="made in usa" />
                        <hr className='benefits-section-origin-list-item-line'/>
                        <span className='benefits-section-origin-list-item-span'>Made in <br/> USA</span>
                    </li>
                </ul>
            </div>
            <div className='benefits-section-description'>
                <p className='benefits-section-description-p'>
                    Sed ut perspiciatis unde omnis iste natus <br/>
                    error sit voluptatem accusantium <br/> doloremque
                    laudantium, totam rem <br/> aperiam, eaque ipsa 
                    quae ab illo inventore <br/> veritatis et quasi 
                    architacto beatae vitae <br/> dicta sunt explicabo.
                </p>
                <p className='benefits-section-description-p'>
                    Nemo enim ipsam voluptatem quia <br/> voluptas sit 
                    aspernatur aut odit aut fugit, <br/> sed quia consequuntur
                    magni dolores eos <br/> qui ratione voluptatem sequi nesciunt. <br/>
                    Neque porro quisquam est, qui dolorem <br/> ipsum quia dolor sit amet,
                    consectetur, <br/> adipisci velit, sed quia non numquam eius <br/>
                    modi tempora incidunt ut labore et dolore <br/> magham aliquam quaerat 
                    voluptatem. Ut <br/> enim ad minima veniam, quis nostrum <br/> 
                    exercitationem ullam 
                </p>
            </div>
        </section>
    )
}

export default BenefitsSection;