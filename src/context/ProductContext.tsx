import { createContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface ProductInterface {
    saved: Product[];
    cart: Product[];
}

const defaultProductContext: ProductInterface = {
    saved: [],
    cart: [],
}

export const ProductContext = createContext<ProductInterface>(defaultProductContext);

export const ProductProvider: React.FC = ({ children }) => {
    const [saved, setSaved] = useState(defaultProductContext.saved);
    const [cart, setCart] = useState(defaultProductContext.cart);

    return(
        <ProductContext.Provider value={{
            saved, 
            cart
        }}>
            {children}
        </ProductContext.Provider>
    );
}