import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand"><Link to="/"><img className="logo" src="assets/img/logo.jpg" alt="logo"></img></Link></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
            </div>
        </nav>
    )
}

export default Nav