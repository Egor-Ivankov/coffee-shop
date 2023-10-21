import React from 'react'
import './productsItem.scss'

const ProductsItem = ({img, price, description, title}) => {
  return (
    <div className='products-item'>
        <h1 className='products-item-title'>{title}</h1>
        <img className='products-item-img' src={img} />
        <p className='products-item-description'>{description}</p>
        <p className='products-item-price'>{price} $</p>
    </div>
  )
}

export default ProductsItem