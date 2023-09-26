import React from 'react';
import Product from './Product';


function ProductList(props) {

  return (
      <div className="row">
        {props.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
  );
}

export default ProductList;

