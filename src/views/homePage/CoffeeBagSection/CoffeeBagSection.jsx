import React from 'react';
import coffeeBag from '@assets/img/coffee-bag.png';
import lines from '@assets/img/lines.png';
import coffeeKernels from '@assets/img/coffee-kernels.png';
import './coffeeBagSection.scss';

const CoffeeBagSection = () => {
    return (
        <section className='coffee-bag'>
                <div className='coffee-bag-introducing'>
                    <p className='coffee-bag-introducing-par'>Introducing the <br/> innovate yet <br/> simple</p>
                    <img className='coffee-bag-introducing-lines' src={lines} alt="lines" />
                </div>
                <img className='coffee-bag-image' src={coffeeBag} alt="coffee-bag" />
                <div className='coffee-bag-stepped'>
                    <p className='coffee-bag-stepped-par'>Steeped <br/> brewing <br/> method</p>
                    <img className='coffee-bag-stepped-kernels' src={coffeeKernels} alt="coffee-kernels"/>
                </div>

        </section>
    );
}

export default CoffeeBagSection;