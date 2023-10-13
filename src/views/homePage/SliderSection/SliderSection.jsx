import React from 'react';
import coffeeBag from '@assets/img/coffee-bag.png';
import lines from '@assets/img/lines.png'
import {BsArrowRightShort} from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import './sliderSection.scss';

const SliderSection = () => {
    return (
        <section className='slider-section'>
            <div className='slider-section-information'>
                <h2 className='slider-section-information-header'>Our products</h2>
                <p className='slider-section-information-description'>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit <br/> 
                    aut fugit, sed quia consequuntur magni dolores eos
                </p>
            </div>
            <img className='slider-section-lines' src={lines} alt="lines" />
            <img className='slider-section-coffee' src={coffeeBag} alt="coffee-bag" />
            <img className='slider-section-coffee active' src={coffeeBag} alt="coffee-bag" />
            <img className='slider-section-coffee' src={coffeeBag} alt="coffee-bag" />
            <div className='slider-section-container'>
                <p className='slider-section-container-name'>Sun coffee</p>
                <p className='slider-section-container-price'>100$</p>
                <div className='slider-section-container-buttons'>
                    <BsArrowLeftShort className='slider-section-container-buttons-item'/>
                    <BsArrowRightShort className='slider-section-container-buttons-item'/>
                </div>
            </div>
        </section>
    )
}

export default SliderSection;
