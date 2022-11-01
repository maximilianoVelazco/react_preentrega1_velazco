import React from "react";
import cart from '../../images/icons/cart.png';
import './cartWidget.css';

const CartWidget = (props) =>{
    return( 
        <div className='cartContainer'> 
           <span className="cartCounter">{props.count}</span>
           <img src={cart} className="cart" alt="carrito de compras" />
        </div>
    )
}

export default CartWidget;