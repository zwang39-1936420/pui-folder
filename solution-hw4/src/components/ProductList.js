import React from 'react';
import Product from './Product';


function ProductList(props) {

  return (
      <div className="row">
        {props.products.map((product) => (
          <Product 
            key={product.id}
            size = {props.size} 
            glazing = {props.glazing} 
            product={product} 
            totalPrice = {props.price} 
            count = {props.count} 
            setCount = {props.setCount} 
            setType = {props.setType} 
            setGlaze = {props.setGlaze} 
            setSize = {props.setSize} 
            setTotalPrice = {props.setPrice} 
            setShowUp = {props.setShowUp} 
            setCopy = {props.setCopy}
          />
        ))}
      </div>
  );
}

export default ProductList;

