import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Reward from './pages/Reward.jsx';
import Error from './pages/Error.jsx';
import Menu from './pages/Menu.jsx';
import GiftCards from './pages/GiftCards.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/rewards',
        element: <Reward />,
      },
      {
        path: '/gift',
        element: <GiftCards />,
      },
    ],
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
