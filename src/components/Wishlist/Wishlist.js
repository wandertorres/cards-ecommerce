import { useState } from 'react';
import './Wishlist.css';
import { FaRegHeart } from 'react-icons/fa';

export default ({id}) => {

    return (
        <div className='wishlist'>
            <span className='heart'>
                <FaRegHeart />
            </span>
        </div>
    );
}
