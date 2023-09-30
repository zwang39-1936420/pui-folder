import React, { useState }from 'react';
import Glazing from './Glazings';
import PackSize from './PackSize';



function Product({ product, totalPrice, count, size, glazing, setType, setGlaze, setSize, setTotalPrice, setShowUp, setCount, setCopy}) {

  const [price, setPrice] = useState(product.price);
  const toggleReminder = () => {
    setTotalPrice(totalPrice + price);
    setCopy(price);
    setCount(count+1);
    setShowUp(true);
    setTimeout(() => {
      setShowUp(false);
    }, 3000);
    setType(product.type);
  };


  return (
    <section className="product">
              <img src={product.imageSrc} alt="Product 1"/>
              <h2>{product.type} Cinnamon Roll</h2>
              <div className = "desc">
                <div className = "left-sec">
                  <p>Glazing:</p>
                </div>

              
                <div className = "right-sec">
                    <Glazing setGlazing = {setGlaze} setPrice = {setPrice} size = {size}/>
                </div>
              </div>

              <div className = "desc">
                <div className = "left-sec">
                  <p>Pack size:</p>
                </div>

                <PackSize setSize = {setSize} setPrice = {setPrice}  glazing = {glazing} position = {product} />

              </div>

              <div className = "add-to-cart">
                <div className = "left-sec">
                  <p>${price}</p>
                </div>

                <div className = "right-sec">
                  <button onClick={toggleReminder}>Add to Cart</button>
                </div>
              </div>
          </section>
  );
}

export default Product;
