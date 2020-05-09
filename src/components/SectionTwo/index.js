import React from 'react'

function SectionTwoTitle() {
    return (
        <div class="container" id="section2">
            <div class="row d-flex justify-content-center">
                <h2>Top Sellers</h2>
            </div>
            <div class="row">
            <div class="card-deck">
                <div class="card">
                    <img src="./assets/img/product/male2-compressor.jpg" class="card-img-top" alt="JERS Clasica" />
                    <div class="card-body">
                        <h5 class="card-title">JERS Clasica</h5>
                        <h6 className="d-flex justify-content-center">$ 250.00</h6>
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/img/product/JERScrop-compressor.jpg" class="card-img-top" alt="JERS Crop" />
                    <div class="card-body">
                        <h5 class="card-title">JERS Crop Top</h5>
                        <h6 className="d-flex justify-content-center">$ 200.00</h6>
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/img/product/male3-compressor.jpg" class="card-img-top" alt="JERS JERS JERS" />
                    <div class="card-body">
                        <h5 class="card-title">JERS JERS JERS</h5>
                        <h6 className="d-flex justify-content-center">$ 180.00</h6>
                    </div>
                </div>            
            </div>
        </div>
        </div>


    )
}
export default SectionTwoTitle
