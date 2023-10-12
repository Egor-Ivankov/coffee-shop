import React from 'react';
import coffeeBag from '@assets/img/coffee-bag.png';
import './sliderSection.scss';

const SliderSection = () => {
    return (
        <section className='slider-section'>
            <div className='slider-section-background'></div>
            <img src={coffeeBag} alt="coffee-bag" />
            <img src={coffeeBag} alt="coffee-bag" />
            <img src={coffeeBag} alt="coffee-bag" />
            <div className='slider-section-buttons'>
                <button className='slider-section-buttons-left'>left</button>
                <button className='slider-section-buttons-right'>right</button>
            </div>
        </section>
    )
}

export default SliderSection;
