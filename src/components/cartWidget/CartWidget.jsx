import React, { useContext } from "react";
import './cartWidget.css';
import { cartContext } from "../../context/cartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = (props) =>{
    
    const contexto = useContext(cartContext);
    const toCart = `/cart/`;
    
    return( 
        <Link to={toCart} className='cartContainer'> 

        { 
            (contexto.itemsEnCarrito() > 0) ? 
                <span className="cartCounter">{contexto.itemsEnCarrito()}</span> :
                <></> 
        }

           <img src={props.imgurl} className="cart" alt="carrito de compras" />
        </Link>
    )

}

export default CartWidget;