import React from 'react';
import Product from './Product';

function ProductList() {
  const products_one = [
    { id: 1, type:"Original", price:2.49, glazing:"Keep Original", packSize: 1,imageSrc: "./assets/products/original-cinnamon-roll.jpg"},
    { id: 2, type:"Apple", price:3.49, glazing:"Keep Original", packSize: 1, imageSrc: "./assets/products/apple-cinnamon-roll.jpg"},
    { id: 3, type:"Raisin", price:2.99, glazing:"Keep Original", packSize: 1,imageSrc: "./assets/products/raisin-cinnamon-roll.jpg"},
  ];

  const products_two = [
    { id: 4, type:"Walnut", price:3.49, glazing:"Keep Original", packSize: 1, imageSrc: "./assets/products/walnut-cinnamon-roll.jpg"},
    { id: 5, type:"Double-Chocolate", price:3.99, glazing:"Keep Original", packSize: 1, imageSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg"},
    { id: 6, type:"Strawberry", price:3.99, glazing:"Keep Original", packSize: 1, imageSrc: "./assets/products/strawberry-cinnamon-roll.jpg"},
  ];

  return (
    <>
      <div className="row">
        {products_one.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="row">
        {products_two.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
    
  );
}

export default ProductList;

