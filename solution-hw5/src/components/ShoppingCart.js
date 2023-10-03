import React from "react";
import ProductInCart from './ProductInCart';

function ShoppingCart(props) {
    return (
        <>
            <div className="column">
                <p className = "summary" id = "numberOfItems">Shopping Cart: ({props.count} items)</p>
                <p className = "summary" id = "totalPrice">Total: ${props.totalPrice}</p>
            </div>
            <div className="row">
                {props.product.map((product) => (
                    <ProductInCart 
                        key = {product.id}
                        imageSrc = {product.imageSrc}
                        type = {product.type}
                        glazing = {product.glazing}
                        packSize = {product.size}
                        currentPrice = {product.price}
                    />
                ))}
            </div>
        </>
        
    );
}

export default ShoppingCart;