import React from 'react'
import { ProductsItem } from '..'
import './productsSection.scss'

const ProductsSection = ({products}) => {
  return (
    <div className='products-section'>
        {products.map(item => (
            <ProductsItem
            key={item._id}
            title={item.title}
            img={item.img}
            price={item.price}
            description={item.description}
            />
        ))}
    </div>
  )
}

export default ProductsSection