import React from "react";
import './cartWidget.css';

const CartWidget = (props) =>{
    return( 
        <div className='cartContainer'> 
           <span className="cartCounter">{props.count}</span>
           <img src={props.imgurl} className="cart" alt="carrito de compras" />
        </div>
    )
}

export default CartWidget;