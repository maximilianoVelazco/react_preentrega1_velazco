import React from "react";
import { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mocServices";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import Loader from "../loader/Loader";

function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function getItemAsync() {
    getSingleItem(id).then(response => {
      setProduct(response);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemAsync();
  }, []);


  if (isLoading) {
    return (<>
        <Loader />
    </>);
  }

  return (
    <div className='itemDetailContainer'>
      <ItemDetail
        product={product}
      />

    </div>
  );
}

export default ItemDetailContainer