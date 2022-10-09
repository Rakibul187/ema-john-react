import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RewviewItem.css'

const ReviewItem = ({ product }) => {
    console.log(product)
    const { img, name, price, quantity, shipping } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: <span>${price}</span></small></p>
                    <p><small>Shipping: <span>${shipping}</span></small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div className='delete-container'>
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;