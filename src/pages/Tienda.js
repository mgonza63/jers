import React from 'react';

import products from '../products.json';
import ProductList from '../components/Product/ProductList';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: products
        }
    }
    render() {
        return (
                <ProductList products={products} />
        )
    }
}
export default Shop;