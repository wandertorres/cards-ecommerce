import { useState } from 'react';
import './Button.css';
import { FaCheck } from 'react-icons/fa';

export default function Button ({id, handleSaved}) {
    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('button');
    const [title, setTitle] = useState('Adicionar');

    const changeButton = (id) => {
        setActive(!active);

        if(active) {
            setTitle('Adicionar'); 
            setClassName('button');
        } else {
            setTitle('Adicionado');
            setClassName('button active');
        }

        handleSaved(id);
    }

    return (
        <button className={className} onClick={() => changeButton(id)}>
            {active && 
                <FaCheck />} 
            {title}
        </button>
    );
}
