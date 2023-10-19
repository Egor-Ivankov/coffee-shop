import React from 'react'
import './productsItem.scss'

const ProductsItem = ({img, price, description, title}) => {
  return (
    <div className='products-item'>
        <img className='products-item-img' src={img} />
        <h3 className='products-item-title'>{title}</h3>
        <p className='products-item-description'>{description}</p>
        <p className='products-item-price'>From $ {price}</p>
        <button className='products-item-button'>Quick view</button>
        <div className='products-item-strength'>
          <strong>STRENGTH: </strong>
          {4}
        </div>
    </div>
  )
}

export default ProductsItem