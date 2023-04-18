import { useEffect, useState } from 'react';
import './App.css';

import  Table  from './components/Table';

function App() {

  const [products, setProduct] = useState([]);
  const fetchProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProduct(data);
    })
  }
  useEffect(() =>{
    fetchProducts();
  }, []);
  return (
    <table className='table'>
       <Table products={products}/>
     
    </table>
  );
}

export default App;