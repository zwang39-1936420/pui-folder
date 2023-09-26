import React from 'react';


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

                <ul className="right-sec">
                  <li >  
                          <input type="radio" name="set-ori" value="#" id= "radio-ori-1"/>
                          <label for="radio-ori-1"> 1 </label>
                  </li>
                  <li >
                          <input type="radio" name="set-ori" value="#" id= "radio-ori-3"/> 
                          <label for="radio-ori-3"> 3 </label>
                  </li>
                  <li>
                          <input type="radio" name="set-ori" value="#" id= "radio-ori-6"/>
                          <label for="radio-ori-6">6</label>
                  </li>
                  <li>
                          <input type="radio" name="set-ori" value="#" id= "radio-ori-12"/>
                          <label for="radio-ori-12"> 12 </label>
                  </li>
                </ul>

              </div>

              <div className = "add-to-cart">
                <div className = "left-sec">
                  <p>{product.price}</p>
                </div>

                <div className = "right-sec">
                  <button>Add to Cart</button>
                </div>
              </div>
          </section>
  );
}

export default Product;
