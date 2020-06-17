import React from 'react';

import Product from "./Product";
import { useState, useEffect } from 'react'

const ProductList = (props) => {

  return (
    <div className="row">
      {props.products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  )
}

export default ProductList;