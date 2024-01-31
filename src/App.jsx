import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import '../index.css';
import Footer from './components/Footer';

function App({ cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-col font-light h-full'>
      <Header cart={cart} />
      {!loading && <Outlet context={products} />}
      <Footer />
    </div>
  );
}

export default App;
