import React, {useState}from 'react';
import Logo from '../assets/logo/logo-01.svg';
import ShoppingCart from './ShoppingCart';

function Header(props) {
  const [showReminder, setShowReminder] = useState(false);
  const pack_size = [
      { option:"1", adaption: 1},
      { option:"3", adaption: 3},
      { option:"6", adaption: 5},
      { option:"12", adaption: 10},
  ];
  console.log(props.cart)
  const translator = (number) => {
    let temp = ""; 
    pack_size.forEach( pack => {
      if(pack.adaption == number){
        temp = pack.option;
      }
    })
    return (temp);
  };

  let packSize = translator(props.size);



  return (

    <>
      <div className = "column">
          <img src={Logo} alt="logo"/>
          <div>
              <nav>
                  <ul>
                      <li id= "cart"><button onClick={() => {setShowReminder(!showReminder)}}>Cart</button></li>
                      <li id= "product"><button>Products</button></li>
                  </ul>
              </nav>
              
              <hr></hr>

              <header>
              <h1>Our Hand-Made Cinnamon Rolls</h1>
              </header>
          </div>
      </div>
      
      {showReminder && (
        <>
          <hr></hr>
          <ShoppingCart
            product={props.cart}
            type={props.type}
            glazing={props.glazing}
            packSize={packSize}
            currentPrice={props.currentPrice} 
          />
        </>
      )}
    </>
  );
}

export default Header;