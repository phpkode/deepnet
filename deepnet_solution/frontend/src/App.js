import React, { useState, useCallback } from 'react';
import {withRouter} from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Categories from './categories/pages/Categories';
import Products from './products/pages/Products';

const App = () => {
  let routes;

  return (
      <Router >
		<MainNavigation />
        <main>
			<Switch>
				<Route path="/" exact>
				  <Categories />
				  <Products />
				</Route>
				<Route path="/categories/:id" exact>
				  <Categories />
				  <Products />
				</Route>
				<Redirect to="/" />
			  </Switch>
		</main>
      </Router>
  );
};

export default App;
