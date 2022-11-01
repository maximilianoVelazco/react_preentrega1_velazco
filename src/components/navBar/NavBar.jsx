import React from "react";
import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import NavBarLink from "./NavBarLink";

const NavBar = () =>{
    const contador = 6;

    return(
        <header className="navBar" >
            <div className="mainContainer">
                <h1 className="logo">Razzo</h1>
                <nav>
                    <ul>
                        <NavBarLink link="Inicio" />
                        <NavBarLink link="Categorias" />
                        <NavBarLink link="Tienda" /> 
                    </ul>
                    <CartWidget count={contador}/>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;