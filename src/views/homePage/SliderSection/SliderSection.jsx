import React, { useState, useEffect } from 'react';
import lines from '@assets/img/lines.png'
import coffeeBag from '@assets/img/coffee-bag.png';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import './sliderSection.scss';

const SliderSection = () => {
    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    
    useEffect(() => {
        setItems([
            {   
                image: coffeeBag, 
                title: 'Sun coffee 1', 
                price: 100, 
                id: nanoid()
            },
            {
                image: coffeeBag, 
                title: 'Sun coffee 2', 
                price: 200, 
                id: nanoid()
            },
            {
                image: coffeeBag, 
                title: 'Sun coffee 3', 
                price: 300, 
                id: nanoid()
            },
        ]);
    }, []);

    const renderItems = (arr) => {
        return arr.map((item, index) => {
            const {image, title, id} = item;

            let position = ' nextSlide';

            if (slide === index) {
                position = ' activeSlide';
            }

            if (slide === index - 1 || (index === 0 && slide === items.length - 1)) {
                position = ' lastSlide'
            }

            return  (
                <img 
                    className={`slider-section-coffee ${position}`} 
                    src={image} 
                    alt={title} 
                    key={id}
                />
            );
        });
    }

    const elements = renderItems(items);

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

            <div className='slider-section-container'>
                <p className='slider-section-container-name'>Sun coffee</p>
                <p className='slider-section-container-price'>100$</p>
                <div className='slider-section-container-buttons'>
                    <BsArrowLeftShort 
                        onClick={() => setItems(slide => slide - 1)}
                        className='slider-section-container-buttons-item'
                    />
                    <BsArrowRightShort 
                        onClick={() => setSlide(slide => slide + 1)}
                        className='slider-section-container-buttons-item'
                    />
                </div>
            </div>

        </section>
    )
}

export default SliderSection;
