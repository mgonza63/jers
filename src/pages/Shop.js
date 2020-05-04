import React from 'react'

import products from '../products.json'
import Footer from '../components/Footer'
import ShopCard from '../components/ShopCards'


class Shop extends React.Component {
    state = {
        products: products
    }
    render() {
        return (
            <div className="container" id="shop">
                <div class="card-deck">
                  {
                    this.state.products.map((product) => {
                        return (
                            <ShopCard
                                name={product.name}
                                image={product.image}
                                price={product.price} >


                            </ShopCard>
                            )
                        })
                    }
                </div> 
            </div>
            
        )
    }
}
export default Shop;

// class ShopCard extends React.Component{
//     constructor(props)  {
//         super(props)
//         this.state(props)
//         this.state = {
//             products: products
//         }
//     }
//     render() {

//     }
// }