import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
// import { BrowserRouter } from 'react-router-dom';
// import {HashLink as Link} from "react-router-hash-link";

<meta 
     name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
/>

function App() {
  return (
    
    <div>
        <Navbar/>
        <Hero />
        
        <Destinations />
        <Search />
        <Selects />
        <Carousel />
        <Footer />
    </div>
    
  );
}

export default App;
