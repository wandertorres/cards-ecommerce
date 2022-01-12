import { useState } from 'react';
import './Wishlist.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function Wishlist ({id}) {
    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('wishlist');

    function changeWishlist() {
        setActive(!active);

        if(active) {
            setClassName('wishlist');
        } else {
            setClassName('wishlist active2');
        }
    }

    return (
        <div className={className}  onClick={changeWishlist}>
            <span className='heart'>
                {active ? <FaHeart /> : <FaRegHeart />}
            </span>
        </div>
    );
}
