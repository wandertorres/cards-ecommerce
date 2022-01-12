import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';
import Card from './components/Card/Card';

function App() {

  const [listProducts, setProductList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      let list = await api.productsFetch();
      setProductList(list);
    }

    loadProducts();
  }, []);

  return (
    <div className="App">
      {listProducts.map((item, key) => <Card key={key} product={item} />)}
    </div>
  );
}

export default App;
