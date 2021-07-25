import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './CategoryItem.css';

const CategoryItem = props => {

  return (
      <li className="place-item">
        <Card className="place-item__content">
		<Link to={`/categories/${props.c_id}`}>
          <div className="place-item__info">
            <h2>{props.c_id} ({props.products.length})</h2>
          </div>
		  </Link>
        </Card>
      </li>
  );
};

export default CategoryItem;
