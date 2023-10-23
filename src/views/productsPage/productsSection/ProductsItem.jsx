import React, { useMemo } from 'react'
import './productsItem.scss'
import parse from 'html-react-parser';

const ProductsItem = ({img, price, description, title, flavours, strength}) => {

  return (
    <div className='products-item'>
        <img className='products-item-img' src={img} />
        <h3 className='products-item-title'>{title.toString()}</h3>
        <p className='products-item-flavours'>{flavours.map((item, index) => <span key={index}> {item.name + ' • '} </span>)}</p>
        <p className='products-item-price'>From $ {price}</p>
        <button className='products-item-button'>Quick view</button>
        <div className='products-item-strength'>
          <strong>STRENGTH: {strength}</strong>
        </div>
    </div>
  )
}

export default ProductsItem