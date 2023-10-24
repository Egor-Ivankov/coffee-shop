import React, { useState } from 'react'
import './productsItem.scss'
import strength5 from '@assets/img/strength5.png'
import strength4 from '@assets/img/strength4.png'
import strength3 from '@assets/img/strength3.png'
import ModalWindowItem from '../ModalWindowItem/ModalWindowItem'

const ProductsItem = ({img, price, description, title, flavours, strength, id}) => {


  /* Переделать key */
  const renderFlavours = flavours.map(item => {
    if (item !== flavours[flavours.length - 1]) {
      return <span key={item.name.length}> {item.name + ' • '} </span> // ГРЯЗЬ
    } else {
      return <span key={item.name.length}>{item.name}</span> // ГРЯЗЬ
    }
  }
  )
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

  const [modal, setModal] = useState(false)

  return (
    <>
    <div className='products-item'>
        <img className='products-item-img' src={img} />
        <h3 className='products-item-title'>{title.toString()}</h3>
        <p className='products-item-flavours'>{renderFlavours}</p>
        <p className='products-item-price'>From $ {price}</p>
        <button onClick={() => setModal(true)} className='products-item-button'>Quick view</button>
        <div className='products-item-strength'>
          <strong className='products-item-strength-p'>STRENGTH: </strong>
          <img 
          className='products-item-strength-img' 
          src={renderImg} />
        </div>
    </div>
    {modal &&
        <ModalWindowItem
            title={title}
            img={img}
            price={price}
            description={description}
            flavours={flavours}
            strength={strength}
     />
    }
    </>
  )
}

export default ProductsItem