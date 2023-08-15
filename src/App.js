import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';



function App() {
  return (
    <>
    <Navbar />
    <News pagesize="6" />
    </>
  );
}

export default App;
