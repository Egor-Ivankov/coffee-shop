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
        return (
            filter === 'all'
            ?
            products
            :
            products.filter(product => product.region.name.toLowerCase() === filter)
        )
    }

    const filteredFlavour = (products, filter) => {
        return (
            filter === 'all'
            ?
            products
            :
            products.filter(product => {
                const flavourName = product.flavours.map(flavour => flavour.name.toLowerCase());
                switch (filter) {
                    case 'chocolate':
                        return flavourName.some(name => 
                            name.includes('chocolate') 
                            || 
                            name.includes('caramel') 
                            || 
                            name.includes('butter')
                            ||
                            name.includes('toffee')
                        );
                    case 'citrus':
                        return flavourName.some(name => 
                            name.includes('citrus') 
                            || 
                            name.includes('boiled sweets')
                            ||
                            name.includes('marmalade')
                        );
                    case 'fruit':
                        return flavourName.some(name => 
                            name.includes('berry') 
                            || 
                            name.includes('grape')
                            ||
                            name.includes('fruit')
                            ||
                            name.includes('cherry')
                        );
                    case 'nut':
                        return flavourName.some(name => 
                            name.includes('nut') 
                            || 
                            name.includes('almond')
                            ||
                            name.includes('spice')
                        );
                    case 'strong':
                        return flavourName.some(name => 
                            name.includes('dark')
                            ||
                            name.includes('tobacco')
                            ||
                            name.includes('cloves')
                            )
                }
            })
        )
    }

    const filteredStrength = (products, filter) => {
        return (
            filter === 'all'
            ?
            products
            :
            products.filter(product => product.strength == filter)
        ) 
    }

    const renderFilteredProducts = (products) => {
        let filteredProducts = [...products];

        filteredProducts = filteredRegion(filteredProducts, regions);
        filteredProducts = filteredFlavour(filteredProducts, flavour)
        filteredProducts = filteredStrength(filteredProducts, strength);

        if (filteredProducts.length === 0) {
            return (
                <CSSTransition timeout={400} classNames='product'>
                    <div className='empty'>Coffee list is empty</div>
                </CSSTransition>
            )
        } else {
            return filteredProducts.map(product => {
                return (
                    <CSSTransition timeout={400} classNames="product" key={product._id}>
                        <ProductsItem
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