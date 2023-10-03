import React from "react";
import ProductInCart from './ProductInCart';

function ShoppingCart(props) {
    return (
        <>
            <p className = "summary" id = "numberOfItems">Shopping Cart: ({props.count} items)</p>
            <p className = "summary" id = "totalPrice">Total: ${props.price}</p>
            <div className="row">
                {props.product.map((product) => (
                    <ProductInCart 
                        key = {product.id}
                        imageSrc = {product.imageSrc}
                        type = {product.type}
                        glazing = {product.glazing}
                        packSize = {product.packSize}
                        currentPrice = {product.price}
                    />
                ))}
            </div>
        </>
        
    );
}

export default ShoppingCart;