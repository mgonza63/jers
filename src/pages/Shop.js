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
                "image": "./assets/img/product/male2-compressor.jpg",
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
            <div className="container" id="shop">
                <h2 className="row d-flex justify-content-center" >Nuestra Colleccion</h2>
                <h4 className="row d-flex justify-content-center lead"><a href="https://www.instagram.com/jersmx/" target="_blank">Mandanos un mensaje en Instagram para Comprar</a></h4>
                <div className="row">
                    {
                        firstRow.map((product) => {
                            
                            return (
                                <ShopCard
                                    key={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price} >
                                </ShopCard>
                                )
                            })
                        }
                </div>
                <div className="row">
                {
                        secondRow.map((product) => {
                            
                            return (
                                <ShopCard
                                    key={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price} >
                                </ShopCard>
                                )
                            })
                        }
                </div>
                <div hidden id="snipcart" data-api-key="ZTJkY2JkN2MtNDBiYi00MjdhLTk0MzQtMmUwODI3ZWRhZTdmNjM3MjQwMDUwNjA4OTExOTE1" data-currency="mxn"></div> 
            </div>
            
        )
    }
}
export default Shop;
