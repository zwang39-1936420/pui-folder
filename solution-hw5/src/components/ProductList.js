import React from 'react';
import Product from './Product';



function ProductList(props) {
  
  return (
      <div className="row">
        {props.products.map((product) => (
          <Product 
            key={product.id}
            imageSrc = {product.imageSrc}
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
            setCopy = {props.setCopy}
            setCart = {props.setCart}
            dummie = {props.dummie}
            setCounter = {props.setDummieCounter}
          />
        ))}
      </div>
  );
}

export default ProductList;

