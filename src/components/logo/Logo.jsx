import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";

function Logo() {
    return(
        <>
            <Link className="logo br" to="/">.Razzzo.</Link>
        </>
    )
}

export default Logo;