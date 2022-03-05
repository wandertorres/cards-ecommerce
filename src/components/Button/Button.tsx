import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Product } from '../../types/Product';
import './Button.css';

export default function Button (product: Product) {
    const { cartProducts, handleProducts } = useContext(ProductContext);
    const [activeComponent, setActiveComponent] = useState(false);
    
    useEffect(() => {
        cartProducts.map((cartProduct) => setActiveComponent(cartProduct.id === product.id));
    }, []);

    return (
        <button 
            className={ activeComponent ? "--activeComponent" : "" } 
            onClick={() => {
                handleProducts(product, activeComponent, "cart");
                setActiveComponent(!activeComponent);
            }}
        >
            { activeComponent ? "Adicionado" : "Adicionar" } 
        </button>
    );
}
