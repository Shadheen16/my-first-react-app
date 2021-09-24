import React from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import "./Shop.css"

const Shop = () => {
    return (
        <div className="bg-green-200 mt-28">
          <Products></Products>
          <Cart></Cart>
        </div>
    );
};

export default Shop;