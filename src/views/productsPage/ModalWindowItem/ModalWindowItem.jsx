import React from 'react';
import strength5 from '@assets/img/strength5.png'
import strength4 from '@assets/img/strength4.png'
import strength3 from '@assets/img/strength3.png'

const ModalWindowItem = ({img, price, description, title, flavours, strength}) => {

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
            <h1 className='modal-window-container-title'>{title}</h1>
            <div className='modal-window-container-inside'>
                <div className='modal-window-container-inside-information'>
                    <h3 className='modal-window-container-inside-information-title'>Information</h3>
                    <p className='modal-window-container-inside-information-description'>{description}</p>
                    <h3 className='modal-window-container-inside-information-title'>Strength</h3>
                    <img className='modal-window-container-inside-information-img' src={renderImg} />
                </div>
                <img className='modal-window-container-inside-information'/>
                <form onSubmit={e => e.preventDefault()} className='modal-window-container-inside-form'>
                    <label className='modal-window-container-inside-form-label'>
                        Quantity
                        <input className='modal-window-container-inside-form-label-input' type='number' />
                    </label>
                    
                    <label className='modal-window-container-inside-form-label'>
                        Deliver
                        <div className='modal-window-container-inside-form-label-circles'>
                            <button className='modal-window-container-inside-form-label-circles-option'>Once</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>Weekly</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>2 Weekly</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>Monthly</button>
                        </div>
                    </label>

                    <label className='modal-window-container-inside-form-label'>
                        Bag Size
                        <div className='modal-window-container-inside-form-label-circles'>
                            <button className='modal-window-container-inside-form-label-circles-option'>200g</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>500g</button>
                            <button className='modal-window-container-inside-form-label-circles-option'>1kg</button>
                        </div>
                    </label>

                    <label className='modal-window-container-inside-form-label'>
                        Please choose your grind
                        <select className='modal-window-container-inside-form-label-select'>
                            <option className='modal-window-container-inside-form-label-select-option'>Wholebean</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Cafetiere</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Filter</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Aeropress</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Stovetop</option>
                            <option className='modal-window-container-inside-form-label-select-option'>Espresso</option>
                        </select>
                    </label>

                    <button>Add to cart - $ ${price}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalWindowItem