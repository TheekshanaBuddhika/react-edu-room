import React, { Fragment } from 'react';

import './App.css';
import { Navbar } from './componenets/Navbar/Navbar';
import { MainContent } from './componenets/MainContent/MainContent';
import { Footer } from './componenets/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
