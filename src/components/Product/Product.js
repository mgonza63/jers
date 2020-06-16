import React from 'react';

import ProductDefinition from './ProductDefinition'

const Product = (props) => {
  return (
    <div className="card product">
        {/* <h2 className="product__title">{props.product.name}</h2> */}
        <img src={props.product.image} alt="product image" className="card-img" />
        {/* <p className="product__description">{props.product.description}</p> */}
        <div className="buy-button">
          <ProductDefinition product={props.product}/>
        </div>
    </div>
  )
}

export default Product;