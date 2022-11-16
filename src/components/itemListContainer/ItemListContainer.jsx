import { useState, useEffect } from "react";
import "./itemListContainer.css";
import getItems from "../../services/mocServices";
import Item from "../item/Item";
import {useParams} from "react-router-dom";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();

  async function getItemAsync(){
    let respuesta = await getItems(id);
    setProducts(respuesta);
  }
  
  useEffect(() => {
    getItemAsync();
    },[id]);


    //pinto las tarjetas de productos
  return (
    <div className='itemListContainer'>
      {
        products.map((products) => { 
          return (
            <Item 
              key={products.id}
              id={products.id}
              image={products.image}
              category={products.category}
              title={products.title}
              description={products.description}
              price={products.price}
              btnText="Ver más"
            />
          )
        })
      }  
    </div>
  );
} 

export default ItemListContainer