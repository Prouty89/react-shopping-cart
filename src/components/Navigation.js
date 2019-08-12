import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className='navigation'>
      <h3>Welcome to the Book Store</h3>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/cart'>
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;