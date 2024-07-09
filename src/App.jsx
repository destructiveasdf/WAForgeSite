import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Home from './Pages/Home';
import Header from './assets/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  
  return (
    
      <>
        <div className='ContentDiv bg-black'>
          <Home />

        </div>
      </>
    
  )
}

export default App;
