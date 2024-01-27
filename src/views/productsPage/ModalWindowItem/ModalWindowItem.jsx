import React, {useState, useEffect} from 'react';
import './modalWindowItem.scss';
import strength5 from '@assets/img/strength5.png';
import strength4 from '@assets/img/strength4.png';
import strength3 from '@assets/img/strength3.png';
import parse from 'html-react-parser';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWindowItem = ({id, img, price, description, title, strength, setModal}) => {

  const renderImg = 
  strength === 3 
  ? 
  strength3   
  : 
  strength === 4 
  ? 
  strength4 
  : 
  strength === 5 
  ?? 
  strength5;

  /* Order Variables */
  const [bagSize, setBagSize] = useState(0.2);
  const [quantity, setQuantity] = useState(1);
  const [grind, setGrind] = useState('Wholebean');
  const sum = price * (bagSize + 0.8);

  /* Close Animation functionality */
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [closing, setModal]);

  const closeModal = () => {
    setClosing(true);
  };

  /* Add to Cart functionality */
  const handleAddToCart = (props) => {
    // post to db with props - bag Size, quantity, grind, price, product id
    // set button AddToCart into Checkout
    console.log(props);
  }

  return (
    <div onClick={(e) => e.target.id === 'modalWindow' && closeModal()} id='modalWindow' className={`modal-window ${closing ? 'closed' : ''}`} >
        <div className='modal-window-container'>
            <AiOutlineClose className='modal-window-container-close-button' onClick={() => closeModal()} />
            <h1 className='modal-window-container-title'>{title}</h1>
            <div className='modal-window-container-inside'>
                <div className='modal-window-container-inside-information'>
                    <h2 className='modal-window-container-inside-information-title'>Information</h2>
                    <p className='modal-window-container-inside-information-description'>{parse(description)}</p>
                    <h2 className='modal-window-container-inside-information-title'>Strength</h2>
                    <img className='modal-window-container-inside-information-img' src={renderImg} />
                </div>
                <img src={img} className='modal-window-container-inside-img'/>
                <form onSubmit={e => e.preventDefault()} className='modal-window-container-inside-form'>
                    <label className='modal-window-container-inside-form-label'>
                        <h2 className='modal-window-container-inside-form-label-title'>Quantity</h2>
                        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className='modal-window-container-inside-form-label-input' type='number' />
                    </label>

                    <div className='modal-window-container-inside-form-label'>
                        <h2 className='modal-window-container-inside-form-label-title'>Bag Size</h2>
                        <div className='modal-window-container-inside-form-label-circles'>
                            <button onClick={(e) => setBagSize(0.2)} className={`modal-window-container-inside-form-label-circles-option ${bagSize === 0.2 ? ' active' : ''}`}>200g</button>
                            <button onClick={(e) => setBagSize(0.5)} className={`modal-window-container-inside-form-label-circles-option ${bagSize === 0.5 ? ' active' : ''}`}>500g</button>
                            <button onClick={(e) => setBagSize(1)} className={`modal-window-container-inside-form-label-circles-option ${bagSize === 1 ? ' active' : ''}`}>1kg</button>
                        </div>
                    </div>

                    <label className='modal-window-container-inside-form-label'>
                        <h2 className='modal-window-container-inside-form-label-title'>Please choose your grind</h2>
                        <select onChange={e => setGrind(e.target.value)} className='modal-window-container-inside-form-label-select'>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Wholebean'}>Wholebean</option>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Cafetiere'}>Cafetiere</option>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Filter'}>Filter</option>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Aeropress'}>Aeropress</option>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Stovetop'}>Stovetop</option>
                            <option className='modal-window-container-inside-form-label-select-option' value={'Espresso'}>Espresso</option>
                        </select>
                    </label>

                    <button 
                    onClick={() => handleAddToCart({sum, bagSize, grind})}
                    className='modal-window-container-inside-form-label-button'>Add to cart - ${sum}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalWindowItem