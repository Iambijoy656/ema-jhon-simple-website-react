import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Oders from './Components/Oders/Oders';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoaders';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'oders',
          loader: productsAndCartLoader,
          element: <Oders></Oders>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
      ]

    },

  ]);

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
