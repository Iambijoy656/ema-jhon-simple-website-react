import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Oders from './Components/Oders/Oders';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoaders';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './Components/routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
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
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: 'shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
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
