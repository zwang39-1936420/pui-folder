import React, { useState } from 'react';
import Glazing from './Glazings';
import PackSize from './PackSize';



function Product({ product }) {

  const [currentPackSize, setCurrentPackSize] = useState(product.packSize);
  const [currentGlazing, setCurrentGlazing] = useState(product.glazing);
  const [currentPrice, setCurrentPrice] = useState(product.price);
  
  // const handleAddToCart = (e) => {
  //   // Update the current glazing
  //   setcurrentPackSize(e.target.value);

  //   // Call the parent's callback function to update its state
  //   props.setSize(e.target.value);
  // };

  return (
    <section className="product">
              <img src={product.imageSrc} alt="Product 1"/>
              <h2>{product.type} Cinnamon Roll</h2>
              <div className = "desc">
                <div className = "left-sec">
                  <p>Glazing:</p>
                </div>

              
                <div className = "right-sec">
                    <Glazing setGlazing = {setCurrentGlazing} setCurrentPrice = {setCurrentPrice} size = {currentPackSize}/>
                </div>
              </div>

              <div className = "desc">
                <div className = "left-sec">
                  <p>Pack size:</p>
                </div>

                <PackSize setSize = {setCurrentPackSize} setCurrentPrice = {setCurrentPrice}  glazing = {currentGlazing} position = {product} />

              </div>

              <div className = "add-to-cart">
                <div className = "left-sec">
                  <p>${currentPrice}</p>
                </div>

                <div className = "right-sec">
                  <button>Add to Cart</button>
                </div>
              </div>
          </section>
  );
}

export default Product;
