import { useEffect, useState } from 'react';
import './App.css';
import db from "./services/db";
import { Card } from './components/Card/Card';
import { Product } from './types/Product';
import { ProductProvider } from './context/ProductContext';

function App() {
    const [allProducts, setAllProducts] = useState<Product[]>();

    useEffect(() => {
        const getProducts = (): Product[] => {
            const listProducts: Product[] = db;
            return listProducts;
        }

        setAllProducts(getProducts);
    }, []);

    return (
        <ProductProvider>
            <main>
                <h2>Todos os produtos</h2>
                <section>
                    {
                        allProducts?.map((product: Product) => (
                            <Card key={ product.id } { ...product } />
                        ))
                    }
                </section>
            </main>
        </ProductProvider>
    );
}

export default App;
