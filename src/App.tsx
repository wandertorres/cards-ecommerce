import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Product } from './types/Product';
import db from "./services/db";
import { ProductContext, ProductProvider } from './context/ProductContext';

function App() {
    const { saved, cart } = useContext(ProductContext);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async (): Promise<void> => {
            const list: Product[] = db;
            setProducts(list);
        }

        loadProducts();
    }, [products]);

    return (
        <ProductProvider>
            <main>
                <h2>Todos os produtos</h2>
                <section>
                    {products.map((product: Product) => (
                        <Card key={ product.id } product={ product } />
                    ))}
                </section>
                
                <h2>Produtos salvos</h2>
                <section>
                    {saved.map((product: Product) => 
                        <Card key={ product.id } product={ product } />
                    )}
                </section>

                <h2>Carrinho</h2>
                <section>
                    {cart.map((product: Product) => 
                        <Card key={ product.id } product={ product } />
                    )}
                </section>
            </main>
        </ProductProvider>
    );
}

export default App;
