import React from 'react'
import Button from 'react-bootstrap/Button';


const Products = () => {
    const	products	=	["Learning	React","Pro	React","Beginning	React"]; 
    const	listProducts	=	products.map((product)	=> <li	key={product.toString()}>{product}</li> );
  return (
    <div>
      <h2>Products</h2>
      <ul>{listProducts}</ul>

    </div>
  )
}

export default Products