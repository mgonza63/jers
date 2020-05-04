import React from 'react'


export default function ShopCard(props) {

    return (
        <div className="col-md-3">
            <div class="card">
                <img src={props.image} class="card-img-top" alt={props.id} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h6 className="d-flex justify-content-center">$ {props.price}</h6>
                </div>
                <button class="snipcart-add-item"
                    data-item-id={props.name}
                    data-item-price={props.price}
                    data-item-url={props.url}
                    data-item-description={props.description}
                    data-item-image={props.image} 
                    data-item-name={props.name}>
                    <svg class="bi bi-bag-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"/>
                    </svg>
                </button>
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