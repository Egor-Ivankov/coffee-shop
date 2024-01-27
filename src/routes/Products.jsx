import axios from '../utils/axios';
import React, {useEffect, useState} from 'react';
import { NavBar, Footer } from '@components/layout';
import { 
  ProductsSection,
  HeadingSection,
  FilterSection,
} from '../views/productsPage';

const Products = () => {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/products');
      const filteredData = data.products;
      setProducts(filteredData)
      console.log('fetched')
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
	<NavBar/>
	<div className='products-page'>
		<HeadingSection />
    <FilterSection products={products} />
    <ProductsSection products={products} />
	</div>
	<Footer />
	</>
  )
}

export default Products