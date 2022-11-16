import products from '../data/data';


//para filtrar las categorias
function getItems(idCategory) {
  return new Promise((resolve) =>{

    if (idCategory === undefined){
      setTimeout(() => {
          resolve(products);
      }, 2000); 

    }else{
      setTimeout(() => {
        let itemsRequested = products.filter((item) => item.category == idCategory)
        resolve(itemsRequested);
      }, 2000); 
    }
  });
}

//para el detalle del producto
export function getSingleItem(id) {
  return new Promise((resolve) =>{
    let itemRequested = products.find((item) => item.id == id)

    setTimeout(() => {
        resolve(itemRequested);
    }, 2000); 
  });
}


export default getItems;