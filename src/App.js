import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';
import Card from './components/Card/Card';

export default function App() {

  const [listProducts, setProductList] = useState([]);
  const [listSaved, setListSaved] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSaved = (id) => {
    let list;
    let aux = listSaved.find(item  => item.id === id);
    
    if(!aux) {
      list = listProducts.filter(item  => item.id === id);
      setListSaved(prevState => ([...prevState, ...list]));
      //return;
    } else {
      list = listSaved.filter(item  => item.id !== id)
      console.log(list);
      setListSaved(prevState => (prevState, list));
    }
    
  }

  const loadProducts = async () => {
    let list = await api.productsFetch();
    setProductList(list);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="App">
      <h2>Aqui 1</h2>
      {listProducts.map((item, key) => 
        <Card key={key} product={item} handleSaved={handleSaved} />)}
      <h2>Aqui 2</h2>
      {listSaved.map((item, key) => 
        <Card key={key} product={item} handleSaved={handleSaved} />)}
    </div>
  );
}
