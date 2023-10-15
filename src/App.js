import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from './Commp/Login';
import Signup from './Commp/Signup';
import Profile from './Commp/Profilee';

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
