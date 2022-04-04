import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product,  handleRemoveProduct} = props
    const {name, img, price, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviewItem-detail-container">
            <div className='reviewItem-detail'>
                <h3 className='product-name' title={name}>{name.length>20 ? name.slice(0, 20)+ '...' : name}</h3>
                <p>Price: <span className='product-num'>${price}</span></p>
                <p><small>Shipping: <span className='product-num'>${shipping}</span></small></p>
                <p><small>Quantity: <span className='product-num'>{quantity}</span></small></p>
            </div>
            <div className="delete-container">
                <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
           
        </div>
    );
};

export default ReviewItem;