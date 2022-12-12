import React from 'react';
import MyButton from "../button/MyButton";
import "./itemCount.css";

function ItemCount({stock, addToCart}){
    let [count, setCount] = React.useState(1)

    function handleSuma(){
        if(count < stock)
        setCount (count+1);
    }

    function handleResta(){
       if(count > 1){ 
            setCount (count-1);
        }    
    }

    return(
        <div className='addToCart'>
            <MyButton onClick={handleResta}>-</MyButton>
            <span>{count}</span>
            <MyButton onClick={handleSuma}>+</MyButton>
            <button onClick={()=>addToCart(count)} className="btnAddToCart"> agregar al carrito </button>
        </div>
    )

}

export default ItemCount;