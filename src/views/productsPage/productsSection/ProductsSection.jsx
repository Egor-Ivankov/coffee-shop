import React from 'react';
import { ProductsItem } from '..';
import './productsSection.scss';
import { useSelector } from 'react-redux';

const ProductsSection = ({products}) => {

    const regions = useSelector(state => state.productsFilter.regions)
    const flavour = useSelector(state => state.productsFilter.flavour)
    const strength = useSelector(state => state.productsFilter.strength)


    const filteredRegion = (products, filter) => {
        if (filter === 'all') {
        return products;
        } else {
        return products.filter(product => product.region.name.toLowerCase() === filter);
        }
    }

    const filteredStrength = (products, filter) => {
        if (filter === 'all') {
        return products;
        } else {
        return products.filter(product => product.strength == filter);
        }
    }

    const renderFilteredProducts = () => {
        const filteredRegionProducts = filteredRegion(products, regions);
        const filteredStrengthProducts = filteredStrength(filteredRegionProducts, strength);
        return filteredStrengthProducts.map(product => {
            return <ProductsItem
                        key={product._id}
                        title={product.title}
                        img={product.img}
                        price={product.price}
                        description={product.description}
                        flavours={product.flavours}
                        region={product.region}
                        environment={product.environment}
                        strength={product.strength}
                    />
        })
    }

    const allProducts = renderFilteredProducts();

    return (
        <div className='products-section'>
            {allProducts}
        </div>
    )
}

export default ProductsSection