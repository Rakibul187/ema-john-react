import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'
const Product = (props) => {
    const { product, handleAddToCart } = props
    const { name, img, seller, ratings, price } = product
    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-button'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;