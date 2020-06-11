import React from 'react'

import products from '../products.json'
import ShopCard from '../components/ShopCards'


class Shop extends React.Component {
    state = {
        products: products,
        button: [
            {
                "id": "SKUJERS01",
                "price": "250.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Playera JERS Clasica de color Rosa",
                "image": "./assets/img/product/jers-003-pink.jpg",
                "name": "JERS Clasica",
            },
            {
                "id": "SKUJERS02",
                "price": "200.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Crop top JERS con logo de color Rojo",
                "image": "./assets/img/product/JERScrop-compressor.jpg",
                "name": "JERS Crop",
            },
            {
                "id": "SKUJERS03",
                "price": "280.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Playera Jers con nombre repetido Naranja en el pecho",
                "image": "./assets/img/product/male3-compressor.jpg",
                "name": "JERS Cool",
            },
            {
                "id": "SKUJERS04",
                "price": "280.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Playera Jers con nombre repetido Naranja en el pecho",
                "image": "./assets/img/product/jers-male4-compressor.jpg",
                "name": "JERS Cool",
            },
            {
                "id": "SKUJERS05",
                "price": "250.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Playera JERS Clasica de color Rosa",
                "image": "./assets/img/product/male5-compressor.jpg",
                "name": "JERS Naranja",
            },
            {
                "id": "SKUJERS06",
                "price": "200.00",
                "url": "https://jers.netlify.app/shop",
                "description":"Playera JERS Clasica de color Rosa",
                "image": "./assets/img/product/male6-compressor.png",
                "name": "Tinta Artesanal",
            }
        ]
    }  
    render() {
        const firstRow = this.state.products.filter(product => product.firstRow)
        const secondRow = this.state.products.filter(product => product.secondRow)
        return (
            <div className="container">
                <h2 className="row d-flex justify-content-center">Nuestras Collecciones</h2>
                <h4 className="row d-flex lead"><a href="https://www.instagram.com/jersmx/" target="_blank">Mandanos un mensaje en Instagram para Comprar</a></h4>
                <h4 className="row shop-sub">Camisas</h4>
                <div className="row">
                    <div class="card product">
                        <img class="card-img" src="../assets/img/product/jers-001-green.jpeg" alt="Card image" />
                    </div>
                    <div class="card product">
                        <img class="card-img" src="../assets/img/product/jers-003-pink.jpg" alt="Card image" />
                    </div>
                    <div class="card product">
                        <img class="card-img" src="../assets/img/product/jers-001-green.jpeg" alt="Card image" />
                    </div>
                    <div class="card product">
                        <img class="card-img" src="../assets/img/product/jers-001-green.jpeg" alt="Card image" />
                    </div>
                </div>
                <h4 className="row shop-sub">Sudaderas</h4>
            </div>
            
        )
    }
}
export default Shop;
