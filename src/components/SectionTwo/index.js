import React from 'react'
import './style.css'
import { AddToCart } from 'react-snipcart'

function SectionTwoTitle() {
    return (
        <div class="container" id="section2">
            <div class="row d-flex justify-content-center">
                <h2>Nueva Collección</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div class="card product">
                    <img class="card-img" src="../assets/img/product/jers-007-blue.jpeg" alt="Card image" />
                    <AddToCart  data={{
                        id: "ers-c01-01",
                        name: "JERS Tipografía Verde",
                        price: "240.00",
                        image: "../assets/img/product/jers-007-blue.jpeg",
                        customFields:[{
                            "name":"Tamaños",
                            "options":"S|M|L",
                            "type": "dropdown"}],
                        url:"https://jersmx.netlify.app/tienda"
                        }}>
                        Añadir al Carrito $240.00
                    </AddToCart>
                </div>
                <div class="card product">
                    <img class="card-img" src="../assets/img/product/jers-013-w-black.jpg" alt="Card image" />
                </div>
                <div class="card product">
                    <img class="card-img" src="../assets/img/product/jers-006-w-black.jpg" alt="Card image" />
                </div>
                <div class="card product">
                    <img class="card-img" src="../assets/img/product/jers-007-grey.jpeg" alt="Card image" />
                </div>
            </div>
        </div>

    )
}
export default SectionTwoTitle
