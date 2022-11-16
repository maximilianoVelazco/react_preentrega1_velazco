import React from 'react';
import "./item.css";
import { Link } from 'react-router-dom';

export default function Item({id, image, category, title, price, btnText}) {
  
  const ruta = `/detail/${id}`; 
  return (
    <div className='cardItem'>

            <div className="cardImg">
              <img src={image} alt="imagen del producto" /> 
            </div>
            <div className="cardContent">
              <span>{category}</span>
              <h3>{title}</h3>
              <p className='negrita'>${price}</p>

              <Link to={ruta} className='btn'>{btnText}</Link>
            </div>

    </div>
  )
}
 