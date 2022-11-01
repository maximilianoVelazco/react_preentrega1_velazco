import React from 'react';
import "./navBar.css";

function NavBarLink(props) {
  return (
    <>
    <li><a href="http://#">{props.link}</a></li>
    </>
  )
}

export default NavBarLink