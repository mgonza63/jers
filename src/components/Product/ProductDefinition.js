import React from 'react';

const ProductDefinition = (props) => {
  return (
    <button className="snipcart-add-item product-definition btn btn-dark"
      data-item-id={props.product.id}
      data-item-name={props.product.name}
      data-item-price={props.product.price}
      data-item-image={props.product.image}
      data-item-custom2-options="S|M|L"
      data-item-custom2-name="Tamaños"
      data-item-url="https://jersmx.netlify.app/">
      Añadir al Carrito ${props.product.price}
    </button>
  )
}

export default ProductDefinition;