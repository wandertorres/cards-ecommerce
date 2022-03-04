import { createContext, SetStateAction, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface ProductInterface {
    savedProducts: Product[];
    cartProducts: Product[];
    setSavedProducts: React.Dispatch<SetStateAction<Product[]>>;
    setCartProducts: React.Dispatch<SetStateAction<Product[]>>
}

const defaultProductContext: ProductInterface = {
    savedProducts: [],
    cartProducts: [],
    setSavedProducts: () => {},
    setCartProducts: () => {},
}

export const ProductContext = createContext<ProductInterface>(defaultProductContext);

export const ProductProvider: React.FC = ({ children }) => {
    const [savedProducts, setSavedProducts] = useState(defaultProductContext.savedProducts);
    const [cartProducts, setCartProducts] = useState(defaultProductContext.cartProducts);

    return(
        <ProductContext.Provider value={{
            savedProducts, 
            cartProducts,
            setSavedProducts,
            setCartProducts,
        }}>
            {children}
        </ProductContext.Provider>
    );
}
