import "./itemDetail.css";


function ItemDetail({key, image, category, title, price, description}) {
    return (
      <div className='cardItemDetail'>
  
              <div className="cardImg">
                <img src={image} alt="imagen del producto" /> 
              </div>
              <div className="cardContent">
                <span>{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className='negrita'>${price}</p>
              </div>
  
      </div>
    )
  }

  export default ItemDetail;