import React, { useRef } from 'react';
import coffeeBag from '@assets/img/coffee-bag-old.png';
import lines from '@assets/img/lines.png';
import coffeeKernels from '@assets/img/coffee-kernels.png';
import './coffeeBagSection.scss';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-scroll'

const CoffeeBagSection = () => {

    return (
        <section className='coffee-bag'>
            <div className='coffee-bag-section'>
                <div className='coffee-bag-section-introducing'>
                    <p className='coffee-bag-section-introducing-par'>Introducing the <br/> innovate yet <br/> simple</p>
                    <img className='coffee-bag-section-introducing-lines' src={lines} alt="lines" />
                </div>
                <img className='coffee-bag-section-image' src={coffeeBag} alt="coffee-bag" />
                <div className='coffee-bag-section-stepped'>
                    <p className='coffee-bag-section-stepped-par'>Steeped <br/> brewing <br/> method</p>
                    <img className='coffee-bag-section-stepped-kernels' src={coffeeKernels} alt="coffee-kernels"/>
                </div>
            </div>
            <Link to="benefitsSection" smooth={true} duration={500}><button className='coffee-bag-button'>
                <MdKeyboardArrowDown className='coffee-bag-button-arrow' />
                <BsDot className='coffee-bag-button-dot' />
            </button></Link>
            
        </section>
    );
}

export default CoffeeBagSection;