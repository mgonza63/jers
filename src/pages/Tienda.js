import React from 'react';

import products from '../products.json';
import ProductList from '../components/Product/ProductList';
import { useState, useEffect } from 'react';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: products
        }
    }
    render() {
        const maleShirts = this.state.products.filter(product => product.maleShirt)

        return (
            <div className="container shop">
                <div className="row d-flex justify-content-center">
                    <h2>Nuestras Collecciones</h2>
                </div>
                <ProductList products={maleShirts} />

            </div>
            
        )
    }
 }

export default Shop;