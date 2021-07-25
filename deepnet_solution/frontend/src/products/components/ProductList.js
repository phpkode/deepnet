import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
		<h2>Products.</h2>
          <h2>No products found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
		<Card className="place-item__content">
            <h2>Products</h2>
        </Card>
      {props.items.map(item => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
		  cost={item.cost}
        />
      ))}
    </ul>
  );
};

export default ProductList;
