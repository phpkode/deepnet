import React from 'react';
import {withRouter} from 'react-router'

import Card from '../../shared/components/UIElements/Card';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

const CategoryList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
		<h2>Categories</h2>
          <h2>No categories found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
		<li className="place-item">
        <Card className="place-item__content">
            <h2>Categories</h2>
        </Card>
      </li>
      {props.items.map(item => (
        <CategoryItem
          key={item.id}
          id={item.id}
          c_id={item.c_id}
		  products={item.products}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
