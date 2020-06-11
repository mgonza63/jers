
const ProductDefinition = (props) => {
    return (
      <button className="snipcart-add-item product-definition"
        data-item-id={props.product.id}
        data-item-name={props.product.name}
        data-item-price={props.product.price}
        data-item-image={props.product.image}
        data-item-custom2-options="S|M|L"
        data-item-custom2-name="size"
        data-item-url="https://snipcart-nextjs-seo.netlify.com/">
        Add to cart ${props.product.price}
      </button>
    )
  }
  
  export default ProductDefinition;