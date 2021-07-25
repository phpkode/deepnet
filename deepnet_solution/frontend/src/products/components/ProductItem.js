import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './ProductItem.css';

const ProductItem = props => {

  return (
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__info">
            <h2>{props.name} (${props.cost})</h2>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ProductItem;
