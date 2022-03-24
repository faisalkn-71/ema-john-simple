import React from 'react'; 
import './Cart.css'


const Cart = (props) => {
    const {cart} = props
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const item of cart){
        // console.log(item)
        quantity = quantity + item.quantity
        total = total + item.price * item.quantity
        shipping = shipping + item.shipping
    }

    let tax = parseFloat((total * 0.1).toFixed(2));
    // console.log(typeof tax)

    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Select Items: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;