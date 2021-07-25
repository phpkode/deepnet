import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {withRouter} from 'react-router'

import CategoryList from '../components/CategoryList';

const Categories = () => {
  const id = useParams().id;
  let data = {};
  
  if(id){
	  data.head = id;
  }
  
  console.log('category called', id);
  
	const [loadedCategories, setloadedCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/category', {
		  method: 'POST', // or 'PUT'
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(data => {
		  console.log('Success:', data);
		  setloadedCategories(data.categories);
		  
		})
		.catch((error) => {
		  console.error('Error:', error);
		});

	}, [id]);
  
	return <CategoryList items={loadedCategories} />;
  
};

export default Categories;
