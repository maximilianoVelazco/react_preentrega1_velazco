import React, {useContext} from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../button/MyButton";

function CartPage(){

    
    const {cart, removeItem, clearCart, costoTotal} = useContext(cartContext);


    return(
        <table className="tableCart">
            <tr className="tableDataTitle">
                <td>Id</td>
                <td>Producto</td>
                <td>Cantidad</td>
                <td>Precio</td>
            </tr>
            {cart.map((item) => (
                <tr className="tableData">
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.count}</td>
                    <td>{item.price}</td>
                    <td>
                        <MyButton onClick={()=>removeItem(item.id)} >Borrar item</MyButton>
                    </td>
                    <td>
                        <MyButton onClick={()=>clearCart()} >Borrar</MyButton>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default CartPage;