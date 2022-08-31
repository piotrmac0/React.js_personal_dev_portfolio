import React from 'react';

import { About, Footer, Header, Skills, Team, Contact, Work } from './container';
import { Navbar } from './components'; 
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Team />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App