import React, { useMemo } from 'react'
import './productsItem.scss'
import strength5 from '@assets/img/strength5.png'
import strength4 from '@assets/img/strength4.png'
import strength3 from '@assets/img/strength3.png'

const ProductsItem = ({img, price, description, title, flavours, strength}) => {

  const renderFlavours = flavours.map(item => {
    if (item !== flavours[flavours.length - 1]) {
      return <span> {item.name + ' • '} </span>
    } else {
      return <span>{item.name}</span>
    }
  }
  )

  return (
    <div className='products-item'>
        <img className='products-item-img' src={img} />
        <h3 className='products-item-title'>{title.toString()}</h3>
        <p className='products-item-flavours'>{renderFlavours}</p>
        <p className='products-item-price'>From $ {price}</p>
        <button className='products-item-button'>Quick view</button>
        <div className='products-item-strength'>
          <strong>STRENGTH: {strength}</strong>
        </div>
    </div>
  )
}

export default ProductsItem