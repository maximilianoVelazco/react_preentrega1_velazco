import React from "react";
import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
    const contador = 6;

    return (
        <header className="navBar" >
            <div className="mainContainer">
                <Logo />
                <nav>
                    <ul>
                        <li><Link className="enlace" to="/category/Ropa de hombre">Ropa Hombre</Link></li>
                        <li><Link className="enlace" to="/category/Ropa de mujer">Ropa Mujer</Link></li>
                        <li><Link className="enlace" to='/category/Electronica'>Electronica</Link></li>
                    </ul>
                    {/* carrito de compras */}
                    <CartWidget imgurl="/images/icons/cart.png" count={contador} />
                </nav>
            </div>
        </header>
    )
}

export default NavBar;