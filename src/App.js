import React from 'react';
import {  BrowserRouter ,Routes, Route } from 'react-router-dom';


import Admin from './Admin';
import Customer from './Customers';
import Home from './Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/customer"element={<Customer/>} />
        <Route path="/admin" element={<Admin/>} />
     </Routes>
     </BrowserRouter>
    
  );
};

export default App;