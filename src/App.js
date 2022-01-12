import { useEffect, useState } from 'react';
import './App.css';
import { db } from './services/db.js';
import Card from './components/Card/Card.js';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(db);
  }, []);

  return (
    <div className="App">
      {list.map(product => <Card key={product.id} product={product} />)}
    </div>
  );
}

export default App;
