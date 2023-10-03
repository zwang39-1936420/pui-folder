import React from 'react';

function ProductInCart(props) {
  console.log(props)
  return (
    <div className='row'>
      <section className="product">
            <img src={props.imageSrc} alt="Product 1"/>
            <h2>{props.type} Cinnamon Roll</h2>
            <p className = "cart-headline"> {props.type} cinnamon roll</p>
            <p>{props.glazing}</p>
            <p>Pack of {props.packSize}</p>
            <p>Price: ${props.currentPrice}</p>

            {/* This is the is the state update function that updates the [] in Index */}
            <button >Remove</button>
      </section>
    </div>
    
  );
}

export default ProductInCart;
