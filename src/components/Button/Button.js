import { useState } from 'react';
import './Button.css';
import { FaCheck } from 'react-icons/fa';

export default function Button ({id}) {
    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('button');
    const [title, setTitle] = useState('Adicionar');

    function changeButton() {
        setActive(!active);

        if(active) {
            setTitle('Adicionar'); 
            setClassName('button');
        } else {
            setTitle('Adicionado');
            setClassName('button active');
        }
    }

    return (
        <button className={className} onClick={changeButton}>
            {active && 
                <FaCheck />} 
            {title}
        </button>
    );
}
