import React from 'react'

import products from '../products.json'
import Footer from '../components/Footer'
import ShopCard from '../components/ShopCards'


class Shop extends React.Component {
    state = {
        products: products
    }
    
    render() {
        const firstRow = this.state.products.filter(product => product.firstRow)
        const secondRow = this.state.products.filter(product => product.secondRow)
        return (
            <div className="container" id="shop">
                <h2 className="row d-flex justify-content-center" >Nuestra Colleccion</h2>
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