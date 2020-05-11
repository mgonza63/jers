import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand"><Link to="/"><img className="logo" src="assets/img/logo.jpg" alt="logo"></img></Link></span>

                <div className="navbar-nav">
                    {/* <Link to="/about" className="nav-item nav-link active">
                        About<span className="sr-only">(current)</span>
                    </Link> */}
                    <Link to="/shop" className="nav-item nav-link">
                        Shop
                    </Link>
                    {/* <Link to="/contact" className="nav-item nav-link">
                        Contact
                    </Link> */}
                    {/* <span className="nav-item nav-link disabled" tabindex="-1" aria-disabled="true">Blog</span> */}
                </div>
        </nav>
    )
}

export default Nav