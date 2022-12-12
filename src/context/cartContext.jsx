import { useContext } from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }){

    const [cart, setCart] = useState([]);

    function alAgregar (product, count) {

        let buscarItem = cart.find( buscarItem => buscarItem.id === product.id  )

        if(buscarItem){
            alert("Ya agregaste este producto al carrito")
        } else{
            let nuevoCarrito = [...cart];
            product.count = count;
            nuevoCarrito.push(product);
            setCart(nuevoCarrito)
        }
    }

    function removeItem(id){

    }

    function clearCart(){
        let borrado = [];
        cart = borrado
    }

    function costoTotal(){}

    const itemsEnCarrito = () =>{
        let suma = 0
        cart.forEach( itemsEnCarrito => suma = suma + itemsEnCarrito.count);
        return suma;
    }

    return(
        <cartContext.Provider value={{cart, alAgregar, itemsEnCarrito, removeItem, clearCart, costoTotal}}>
            {children}
        </cartContext.Provider>
    )

}

export default CartContextProvider;