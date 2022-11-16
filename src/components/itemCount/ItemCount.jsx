import React from 'react';

function ItemCount(props){
    let [count, setCount] = React.useState(1)

    function handleSuma(){
        if(count < props.stock)
        setCount (count+1);
    }

    function handleResta(){
       if(count > 0){ 
            setCount (count-1);
        }    
    }

    return(
        <div>
            <button onClick={handleResta}>-</button>
            <span>{count}</span>
            <button onClick={handleSuma}>+</button>
            <br/>
            <button>agregar al carrito</button>
        </div>
    )

}

export default ItemCount;