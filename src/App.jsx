import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Home from './Pages/Home';
import Header from './assets/Header';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  
  return (
    
      <>
        <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16742883036"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16742883036');
                    `}
                </script>
        </Helmet>

        <div className='ContentDiv bg-black'>
          <Home />

        </div>
      </>
    
  )
}

export default App;
