import React from 'react';
import PackSize from './PackSize';


function Product({ product }) {
  return (
    <section className="product">
              <img src={product.imageSrc} alt="Product 1"/>
              <h2>{product.type} Cinnamon Roll</h2>
              <div className = "desc">
                <div className = "left-sec">
                  <p>Glazing:</p>
                </div>

                <div className = "right-sec">
                  <select className="dropdown">
                    <option value="Keep original">Keep original</option>
                    <option value="Sugar milk">Sugar milk</option>
                    <option value="Vanilla milk">Vanilla milk</option>
                    <option value="Double chocolate">Double chocolate</option>
                  </select>
                </div>
              </div>

              <div className = "desc">
                <div className = "left-sec">
                  <p>Pack size:</p>
                </div>

                <PackSize position = {product} />

              </div>

              <div className = "add-to-cart">
                <div className = "left-sec">
                  <p>${product.price}</p>
                </div>

                <div className = "right-sec">
                  <button>Add to Cart</button>
                </div>
              </div>
          </section>
  );
}

export default Product;
