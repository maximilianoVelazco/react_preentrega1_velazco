import React from 'react';
import "./myButton.css";

export default function MyButton(props) {
  return (
    <>
        <button 
          className='myButton'
          onClick={props.onClick}
          >
          {props.children}
        </button>
    </>
  )
}
