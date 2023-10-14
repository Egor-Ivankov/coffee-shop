import React, { useState, useEffect } from 'react';
import lines from '@assets/img/lines.png'
import data from './sliders';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import './sliderSection.scss';

const SliderSection = () => {
    const [sliders, setSliders] = useState(data);
    const [slideIndex, setSlideIndex] = useState(0);
    
    const renderItems = (arr) => {
        return arr.map((slide, index) => {
            const {image, title, id, price} = slide;

            let position = ' nextSlide';

            if (slideIndex === index) {
                position = ' activeSlide';
            }

            if (slideIndex === index - 1 || (index === 0 && slideIndex === sliders.length - 1)) {
                position = ' lastSlide'
            }

            return  (
                <article className={`slider-section-container ${position}`}>
                    <img 
                        className={`slider-section-container-coffee`} 
                        src={image} 
                        alt={title} 
                        key={id}
                    />
                    <p className='slider-section-container-name'>{title}</p>
                    <p className='slider-section-container-price'>{price}$</p>
                </article>
            );
        });
    }

    const elements = renderItems(sliders);

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

            {elements}

            <div className='slider-section-buttons'>
                <BsArrowLeftShort 
                        onClick={() => setSlideIndex(slideIndex => slideIndex - 1)}
                        className='slider-section-buttons-item'
                    />
                <BsArrowRightShort 
                    onClick={() => setSlideIndex(slideIndex => slideIndex + 1)}
                    className='slider-section-buttons-item'
                />
            </div>

        </section>
    )
}

export default SliderSection;
