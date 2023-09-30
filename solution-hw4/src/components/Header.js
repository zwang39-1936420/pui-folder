import React from 'react';
import Logo from '../assets/logo/logo-01.svg';

function Header(props) {

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
              {props.toggle && (
                <div id = "pop-up">
                    <p>Added to cart: </p>
                    
                    <br></br>
                    <p className = "cart-headline"> {props.type} cinnamon roll</p>
                    <p>{props.glazing}</p>
                    <p>Pack of {props.size}</p>
                    <p>Price: ${props.currentPrice}</p>
                </div>
              )}
                <p className = "summary" id = "numberOfItems">{props.count} items</p>
                <p className = "summary" id = "totalPrice">Total: ${props.price}</p>
                
                <hr></hr>

                <header>
                <h1>Our Hand-Made Cinnamon Rolls</h1>
                </header>
            </div>
    </div>
  );
}

export default Header;