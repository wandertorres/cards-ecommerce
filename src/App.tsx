import { useEffect, useState } from 'react';
import './App.css';
import db from './services/db';
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';
import { Product } from './types/Product';

function App() {
    const [listProducts, setProductList] = useState<Product[]>([]);
    const [listSaved, setListSaved] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const handleSaved = (id: number): void => {
        let list: Product[] = [];
        const aux: Product | undefined = listSaved.find((item: Product) => item.id === id);
        
        if(!aux) {
            list = listProducts.filter((item: Product) => item.id === id);
            setListSaved((prevState: Product[]) => ([...prevState, ...list]));
        } else {
            list = listSaved.filter((item: Product) => item.id !== id)
            setListSaved(list);
        }
    }

    const handleCart = (id: number): void => {
        let list: Product[] = [];
        const aux: Product | undefined = cart.find((item: Product) => item.id === id);
        
        if(!aux) {
            list = listProducts.filter((item: Product) => item.id === id);
            setCart((prevState: Product[]) => ([...prevState, ...list]));
        } else {
            list = cart.filter((item: Product) => item.id !== id)
            setCart(list);
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            const list: Product[] = db;
            setProductList(list);
        }

        loadProducts();
    }, []);

    return (
        <main>
            <h2>Todos os produtos</h2>
            <section>
                {listProducts.map((item: Product) => 
                    <Card 
                        key={ item.id }
                        product={ item } 
                        handleSaved={ handleSaved } 
                        handleCart={ handleCart } 
                    />
                )}
            </section>
            
            <h2>Produtos salvos</h2>
            <section>
                {listSaved.map((item: Product) => 
                    <CardDetails key={ item.id } product={ item } />)}
            </section>

            <h2>Carrinho</h2>
            <section>
                {cart.map((item: Product) => 
                  <CardDetails key={ item.id } product={ item } />)}
            </section>
        </main>
    );
}

export default App;
