import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button className='cart-button'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;