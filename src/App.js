import React from 'react';
import './App.css';
import OtherApiMethods from './Pages/OtherApiMethods';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newsapp from './Pages/Newsapp';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Newsapp />} />
        <Route path="/newsapp" element={<Newsapp />} />
        <Route path="/otherapimethods" element={<OtherApiMethods />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
