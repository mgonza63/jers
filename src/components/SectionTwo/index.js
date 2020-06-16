import React from 'react'
import './style.css'

function SectionTwoTitle() {
    return (
        <div class="container" id="section2">
            <div class="row d-flex justify-content-center">
                <h2>Nueva Collección</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div class="card product">
                    <img class="card-img" src="../assets/img/product/jers-007-blue.jpeg" alt="Card image" />
                    <button className="snipcart-add-item product-definition btn btn-dark"
                        data-item-id="ers-c01-01"
                        data-item-name="JERS Tipografía Verde"
                        data-item-price="240.00"
                        data-item-image="../assets/img/product/jers-007-blue.jpeg"
                        data-item-custom2-options="S|M|L"
                        data-item-custom2-name="Tamaños"
                        data-item-url="https://jersmx.netlify.app/tienda">
                        Añadir al Carrito $240.00
                    </button>
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
