import React from 'react';
import './style.css'

export default function ShopCard(props) {


    return (
        <div className="card product" >
                <img src={props.image} className="card-img" alt={props.unique} />
        </div>

    )
}

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