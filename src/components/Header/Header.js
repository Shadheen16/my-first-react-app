import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div>
            <div className="btext-white bg-white z-50 p-5">
                 <img className='w-32 m-auto' src={logo} alt="" /> 
            </div>
             
              <div className="lh-2 bg-gray-800 text-white w-full flex justify-center align-center">
      
            <nav className="w-10/12 text-left">
                <li><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/products">Producs</a></li>     
            </nav>
        </div>
        </div>
       
    );
};

export default Header;