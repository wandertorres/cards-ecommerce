import { useEffect, useState } from 'react';
import './App.css';
import db from './services/db';
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';

export default function App() {
    const [listProducts, setProductList] = useState([]);
    const [listSaved, setListSaved] = useState([]);
    const [cart, setCart] = useState([]);

    const handleSaved = (id) => {
        let list = [];
        let aux = listSaved.find(item  => item.id === id);
        
        if(!aux) {
            list = listProducts.filter(item  => item.id === id);
            setListSaved(prevState => ([...prevState, ...list]));
        } else {
            list = listSaved.filter(item  => item.id !== id)
            setListSaved(prevState => (prevState, list));
        }
    }

    const handleCart = (id) => {
        let list = [];
        let aux = cart.find(item  => item.id === id);
        
        if(!aux) {
            list = listProducts.filter(item  => item.id === id);
            setCart(prevState => ([...prevState, ...list]));
        } else {
            list = cart.filter(item  => item.id !== id)
            setCart(prevState => (prevState, list));
        }
    }

    const loadProducts = async () => {
        let list = db;
        setProductList(list);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <main>
            <h2>Todos os produtos</h2>
            <section>
                {listProducts.map((item, key) => 
                  <Card key={key} product={item} handleSaved={handleSaved} handleCart={handleCart} />)}
            </section>
            
            <h2>Produtos salvos</h2>
            <section>
                {listSaved.map((item, key) => 
                  <CardDetails key={key} product={item} />)}
            </section>

            <h2>Carrinho</h2>
            <section>
                {cart.map((item, key) => 
                  <CardDetails key={key} product={item} />)}
            </section>
        </main>
    );
}
