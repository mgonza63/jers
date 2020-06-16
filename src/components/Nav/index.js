import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand"><Link to="/"><img className="logo" src="assets/img/logo.jpg" alt="logo"></img></Link></span>
                <div className="navbar-nav">
                    <Link to="/shop" className="nav-item nav-link">
                        Shop
                    </Link>
                </div>     
                <div className="navbar-nav">
                    <Link to="/tienda" className="nav-item nav-link">
                        Tienda
                    </Link>
                </div>            
        </nav>
    )
}

export default Nav