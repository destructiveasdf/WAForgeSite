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
import Catalyst from './Pages/Catalyst.jsx'
import Internship from './Pages/Internship.jsx'

const router = createBrowserRouter([

  {path: "/", element: <App />},
  {path: "/About", element: <About />},
  {path: "/Sponsor", element: <Sponsor />},
  {path: "/PastEvents", element: <PastEvents />},
  {path: "/Catalyst", element: <Catalyst />},
  {path: "/Internship", element: <Internship />}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Cursor /> */}
  </React.StrictMode>
)
