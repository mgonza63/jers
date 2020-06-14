import React from "react";

import './style.css';

function StickyBar() { 
    return(

            <ul class="nav justify-content-center sticky-top" id="stickyBar">
                <li class="nav-item">
                    <a class="nav-link" href="#camisas">Camisas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#blusas">Blusas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#sudaderas">Sudaderas</a>
                </li>
            </ul>
    )
}

export default StickyBar;