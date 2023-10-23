import React from 'react';
import { ProductsItem } from '..';
import './productsSection.scss';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProductsSection = ({products}) => {

    const regions = useSelector(state => state.productsFilter.regions);
    const flavour = useSelector(state => state.productsFilter.flavour);
    const strength = useSelector(state => state.productsFilter.strength);


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

    const renderFilteredProducts = (products) => {
        const filteredRegionProducts = filteredRegion(products, regions);
        const filteredStrengthProducts = filteredStrength(filteredRegionProducts, strength);

        if (filteredStrengthProducts.length === 0) {
            return (
                <CSSTransition timeout={400} classNames='product'>
                    <div className='empty'>Coffee list is empty</div>
                </CSSTransition>
            )
        } else {
            return filteredStrengthProducts.map(product => {
                return (
                    <CSSTransition timeout={400} classNames="product">
                        <ProductsItem
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
                    </CSSTransition>
                )
            });
        }
    }

    const allProducts = renderFilteredProducts(products);

    return (
        <TransitionGroup component='div' className='products-section'>
            {allProducts} 
        </TransitionGroup>
    )
}

export default ProductsSection