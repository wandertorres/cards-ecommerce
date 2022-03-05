import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Product } from '../../types/Product';
import './Button.css';

export default function Button (product: Product) {
    const { cartProducts, setCartProducts } = useContext(ProductContext);
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        cartProducts.map((cartProduct) => setActive(cartProduct.id === product.id));
    }, []);
    
    const handleCart = (): void => {
        let listProducts: Product[] = cartProducts;
        
        if(active)  
            listProducts = cartProducts.filter(filtredProduct => filtredProduct.id !== product.id);
        else
            listProducts.push(product);

        setCartProducts(listProducts);
    }

    return (
        <button 
            className={ active ? "--active" : "" } 
            onClick={() => {
                handleCart();
                setActive(!active);
            }}
        >
            { active ? "Adicionado" : "Adicionar" } 
        </button>
    );
}
