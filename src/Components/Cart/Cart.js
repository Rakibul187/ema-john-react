import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart, children }) => {
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((price * .075).toFixed(2));
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h2>Cart Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            <br />
            {children}
        </div>
    );
};

export default Cart;