import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';

function Router() {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cart={cart} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'shop/product/:id', element: <Product cart={cart} setCart={setCart} /> },
        { path: 'cart', element: <Cart cart={cart} setCart={setCart}/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
