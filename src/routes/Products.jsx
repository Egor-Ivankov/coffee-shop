import axios from '../utils/axios';
import React, {useEffect, useState} from 'react'
import { ProductsSection, ProductsItem } from '../views/productsPage';
import { Link } from 'react-router-dom';

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
    <div className='products-page'>
      <h1>Developing...</h1>
      <Link to='/' ><h3>back to home</h3></Link>
      <ProductsSection products={products}  />
      
    </div>
  )
}

export default Products