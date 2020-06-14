import React from 'react'
import './style.css'

function SectionTwoTitle() {
    return (
        <div class="container" id="section2">
            <div class="row d-flex justify-content-center">
                <h2>Nueva Collección</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div class="card new">
                    <img class="card-img" src="../assets/img/product/jers-007-blue.jpeg" alt="Card image" />
                </div>
                <div class="card new">
                    <img class="card-img" src="../assets/img/product/jers-013-w-black.jpg" alt="Card image" />
                </div>
                <div class="card new">
                    <img class="card-img" src="../assets/img/product/jers-006-w-black.jpg" alt="Card image" />
                </div>
                <div class="card new">
                    <img class="card-img" src="../assets/img/product/jers-007-grey.jpeg" alt="Card image" />
                </div>
            </div>
        </div>

    )
}
export default SectionTwoTitle
