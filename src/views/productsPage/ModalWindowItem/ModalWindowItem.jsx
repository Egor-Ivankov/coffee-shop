import React from 'react';
import './modalWindowItem.scss';
import strength5 from '@assets/img/strength5.png';
import strength4 from '@assets/img/strength4.png';
import strength3 from '@assets/img/strength3.png';
import parse from 'html-react-parser';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWindowItem = ({img, price, description, title, flavours, strength, setModal}) => {

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

  return (
    <div className='modal-window'>
        <div className='modal-window-container'>
            <AiOutlineClose className='modal-window-container-close-button' onClick={() => setModal(false)} />
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
                        <h2>Quantity</h2>
                        <input className='modal-window-container-inside-form-label-input' type='number' />
                    </label>

                    <label className='modal-window-container-inside-form-label'>
                        <h2>Bag Size</h2>
                        <div className='modal-window-container-inside-form-label-circles'>
                            <button className='modal-window-container-inside-form-label-circles-option'>200g</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>500g</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>1kg</button>
                        </div>
                    </label>

                    <label className='modal-window-container-inside-form-label'>
                        <h2>Please choose your grind</h2>
                        <select className='modal-window-container-inside-form-label-select'>
                            <option className='modal-window-container-inside-form-label-select-option'>Wholebean</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Cafetiere</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Filter</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Aeropress</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Stovetop</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Espresso</option>
                        </select>
                    </label>

                    <button className='modal-window-container-inside-form-label-button'>Add to cart - $ {price}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalWindowItem