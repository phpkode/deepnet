import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../components/ProductList';

const Products = () => {
  const id = useParams().id;
  let data = {};
  
  if(id){
	  data.category = id;
  }else{
	  data.category = 'NIL';
  }
  
	const [loadedProducts, setloadedProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/product', {
		  method: 'POST', // or 'PUT'
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(data => {
		  console.log('Success:', data);
		  setloadedProducts(data.products);
		  
		})
		.catch((error) => {
		  console.error('Error:', error);
		});

	}, [id]);
  return <ProductList items={loadedProducts} />;
};

export default Products;
