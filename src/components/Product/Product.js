import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = (props) => {
    const {img,name,category,ratings,price,seller} = props.product
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
            
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
        </div>

        <button className='btn-card'>
            <p className='btn-text' onClick={() => props.handleAddToCart(props.product)}>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
  )
}

export default Product