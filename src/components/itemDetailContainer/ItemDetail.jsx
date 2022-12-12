import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount"
import { useContext} from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../button/MyButton";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  
  const toCart = `/cart/`;
  const [isInCart, setIsInCart] = useState(false)
  const {alAgregar} = useContext(cartContext)

   function addToCart(count){
    setIsInCart(count);
    alAgregar(product, count);
  };

  return (
      <div className='cardItemDetail'>
              <div className="cardImg">
                <img src={product.image} alt="imagen del producto" /> 
              </div>
              <div className="cardContent">
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className='negrita'>${product.price}</p>

              { isInCart ?
                <Link to={toCart} className="btnGoCartContainer">
                  <MyButton className="btnGoCart">Ver carrito</MyButton>
                </Link> :
                <ItemCount addToCart={addToCart} stock={product.stock} />
              }
              
              </div>
      </div>
    )
  }

  export default ItemDetail;