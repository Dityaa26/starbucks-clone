import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Reward from './pages/Reward.jsx';
import Error from './pages/Error.jsx';
import Menu from './pages/Menu.jsx';
import GiftCards from './pages/GiftCards.jsx';
import MainSection from './components/menu/MainSection.jsx';
import ItemPage from './components/menu/ItemPage.jsx';
import Intro from './pages/Intro.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Intro />
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "/menu",
            element: <MainSection />,
          },
          {
            path: `/menu/:category/:id`,
            element: <ItemPage />,
          },
        ],
      },
      {
        path: "/rewards",
        element: <Reward />,
      },
      {
        path: "/gift",
        element: <GiftCards />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
