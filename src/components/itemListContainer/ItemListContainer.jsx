import { useState, useEffect, Children } from "react";
import "./itemListContainer.css";
import getItems from "../../services/mocServices";
import Item from "../item/Item";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function getItemAsync() {
    getItems(id).then(response =>{
      setIsLoading(false)
      setProducts(response);
    });
  }

  useEffect(() => {
    getItemAsync();
  }, [id]);

//pinto las tarjetas de productos
if (isLoading) {
  return (<>
      <Loader />
  </>);
}

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
              stock={products.stock}
              btnText="Ver más"
            />
          )
        })
      }
    </div>
  );
}

export default ItemListContainer