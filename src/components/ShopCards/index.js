import React from 'react'
import './style.css'

export default function ShopCard(props) {
    return (
                    <div class="card">
                        <img src={props.image} class="card-img-top" alt={props.id} />
                        <div class="card-body">
                            <h5 class="card-title">{props.name}</h5>
                            <h6 className="d-flex justify-content-center">$ {props.price}</h6>
                        </div>
                    </div>
    )
}






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