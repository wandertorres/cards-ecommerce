import { useEffect, useState } from 'react';
import './App.css';
import db from './services/db';
import Card from './components/Card/Card';

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
    <div className="App">
      <h2>Todos os produtos</h2>
      <div className='divCard'>
        {listProducts.map((item, key) => 
          <Card key={key} product={item} handleSaved={handleSaved} handleCart={handleCart} />)}
      </div>
      
      <h2>Produtos salvos</h2>
      <div className='divCard'>
        {listSaved.map((item, key) => 
          <Card key={key} product={item} handleSaved={handleSaved} handleCart={handleCart} />)}
      </div>

      <h2>Carrinho</h2>
      <div className='divCard'>
        {cart.map((item, key) => 
          <Card key={key} product={item} handleSaved={handleSaved} handleCart={handleCart} />)}
      </div>
    </div>
  );
}
