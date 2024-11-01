import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cursor from './assets/Cursor'
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import About from './Pages/About.jsx'
import Sponsor from './Pages/Sponsor.jsx'
import PastEvents from './Pages/PastEvents.jsx'
import Competitions from './Pages/Competitions.jsx'

const router = createBrowserRouter([

  {path: "/", element: <App />},
  {path: "/About", element: <About />},
  {path: "/Sponsor", element: <Sponsor />},
  {path: "/PastEvents", element: <PastEvents />},
  {path: "/Competitions", element: <Competitions />}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Cursor />
  </React.StrictMode>
)
