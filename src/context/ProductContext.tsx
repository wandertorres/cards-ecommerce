import { createContext } from "react";

interface ProductInterface {

}

const defaultProductContext: ProductInterface = {

}

export const ProductContext = createContext<ProductInterface>(defaultProductContext);

export const ProductProvider: React.FC = ({ children }) => {
    return(
        <ProductContext.Provider value={{

        }}>
            {children}
        </ProductContext.Provider>
    );
}