import React from 'react';
import coffeeBag from '../../../../assets/img/coffee-bag.png';
import './coffeeBagSection.scss';

const CoffeeBagSection = () => {
    return (
        <section>
            <div className='coffee-bag'>
                <p className='coffee-bag-par'>Introducing the <br/> innovate yet <br/> simple</p>
                <img className='coffee-bag-image' src={coffeeBag} alt="coffee-bag" />
                <p className='coffee-bag-par'>Stepped <br/> brewing <br/> method</p>
            </div>
        </section>
    );
}

export default CoffeeBagSection;
