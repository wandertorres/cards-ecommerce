import { useState } from 'react';
import './Button.css';

export default ({id}) => {
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('Adicionar')

    function changeButton() {
        setActive(!active);
        !active ? setTitle('+ Adicionado') : setTitle('Adicionar');
    }

    return (
        <button 
            className={`${active ? 'button active': 'button'}`} 
            onClick={changeButton}>
            {title}
        </button>
    );
}


