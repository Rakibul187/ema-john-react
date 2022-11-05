import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import Singup from './Components/Signup/Singup';
import Main from './Layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/products'),

          element: <Shop></Shop>
        },
        {
          path: 'about', element: <About></About>
        },
        {
          path: 'shop',
          loader: () => fetch('products.json'),

          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'about', element: <About></About>
        },
        {
          path: 'inventory', element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'shipping', element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'login', element: <Login></Login>
        },
        {
          path: 'signup', element: <Singup></Singup>
        }
      ]
    },

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
