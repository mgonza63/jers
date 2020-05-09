import React from 'react';


export default function ShopCard(props) {


    return (
        <div className="col-md-3" >
            <div className="card" >
                <img src={props.image} className="card-img-top" alt={props.unique} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="d-flex justify-content-center">$ {props.price}</h6>
                </div>
                {/* <button className="snipcart-add-item"
                    data-item-id={props.image}
                    data-item-price={props.price}
                    data-item-url={props.url}
                    data-item-description={props.description}
                    data-item-image={props.image} 
                    data-item-name={props.name}
                    data-item-custom1-name='Tamaños'
                    data-item-custom1-options='Pequeña|Mediana|Grande'>
                        add to cart
                </button> */}

            </div>
        </div>

    )
}
