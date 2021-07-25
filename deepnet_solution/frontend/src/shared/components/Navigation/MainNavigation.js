import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
	
  return (
    <React.Fragment>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">Home</Link>
        </h1>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
