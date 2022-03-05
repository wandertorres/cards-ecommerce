import { useState } from 'react';
import './Button.css';

export default function Button (id: number) {
    const [active, setActive] = useState(false);

    const changeButton = (id: number) => {
        setActive(!active);

        //handleCart(id);
    }

    return (
        <button 
            className={ active ? "--active" : "" } 
            onClick={() => changeButton(id)}>
            { active ? "Adicionado" : "Adicionar" } 
        </button>
    );
}
