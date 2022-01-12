import { useState } from 'react';
import './Wishlist.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function Wishlist ({id, handleSaved}) {
    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('wishlist');

    const changeWishlist = (id) => {
        setActive(!active);

        if(active) {
            setClassName('wishlist');
        } else {
            setClassName('wishlist active2');
        }

        handleSaved(id);
    }

    return (
        <div className={className}  onClick={() => changeWishlist(id)}>
            <span className='heart'>
                {active ? <FaHeart /> : <FaRegHeart />}
            </span>
        </div>
    );
}
