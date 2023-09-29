import React from 'react';
import Product from './Product';
import Logo from '../assets/logo/logo-01.svg';

function Header() {
  return (
    <div className = "column">
            <img src={Logo} alt="logo"/>
            <div>
                <nav>
                    <ul>
                        <li id= "cart"><button>Cart</button></li>
                        <li id= "product"><button>Products</button></li>
                    </ul>
                </nav>

                <div id = "pop-up">
                    <p>Added to cart: </p>
                    
                    <br></br>
                    <p className = "cart-headline"> ${Product.type} cinnamon roll</p>
                    <p>${Product.glazing}</p>
                    <p>Pack of ${Product.packSize}</p>
                    {/* <p>Price: ${currentPrice}</p> */}
                </div>

                <p className = "summary" id = "numberOfItems">0 items</p>
                <p className = "summary" id = "totalPrice">Total: $0.00</p>
                
                <hr></hr>

                <header>
                <h1>Our Hand-Made Cinnamon Rolls</h1>
                </header>
            </div>
    </div>
  );
}

export default Header;