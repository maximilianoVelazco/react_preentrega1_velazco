import React from "react";
import { useState, useEffect } from "react";
import {getSingleItem} from "../../services/mocServices";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  const {id} = useParams();

  async function getItemAsync() {
    let response = await getSingleItem(id);
    setProduct(response);
  }
  
  useEffect(() =>{
    getItemAsync();
  }, []);
    
  return (
    <div className='itemDetailContainer'>
       <ItemDetail
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
       />
    </div>
  );
} 

export default ItemDetailContainer