import { useState } from 'react';
import './Button.css';

export default ({id}) => {
    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('button');
    const [title, setTitle] = useState('Adicionar');

    function changeButton() {
        setActive(!active);

        if(active) {
            setTitle('Adicionar'); 
            setClassName('button');
        } else {
            setTitle('+ Adicionado');
            setClassName('button active');
        }
    }

    return (
        <button className={className} onClick={changeButton}>{title}</button>
    );
}
