import { createContext, SetStateAction, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface ProductInterface {
    savedProducts: Product[];
    cartProducts: Product[];
    handleProducts: (product: Product, activeComponent: boolean, listType: string) => void;
}

const defaultProductContext: ProductInterface = {
    savedProducts: [],
    cartProducts: [],
    handleProducts: () => {}
}

export const ProductContext = createContext<ProductInterface>(defaultProductContext);

export const ProductProvider: React.FC = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(defaultProductContext.cartProducts);
    const [savedProducts, setSavedProducts] = useState(defaultProductContext.savedProducts);

    const handleProducts = (product: Product, activeComponent: boolean, listType: string): void => {
        let listProducts: Product[] = [];
        listType === "cart" ? listProducts = cartProducts : listProducts = savedProducts;
        
        if(activeComponent)  
            listProducts = listProducts.filter(filtredProduct => filtredProduct.id !== product.id);
        else
            listProducts.push(product);

        listType === "cart" ? setCartProducts(listProducts) : setSavedProducts(listProducts);
    }

    return(
        <ProductContext.Provider value={{
            savedProducts, 
            cartProducts,
            handleProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
}
