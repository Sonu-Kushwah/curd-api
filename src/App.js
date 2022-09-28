import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import RestorentList from './component/RestorentList';
import RestorentCreate from './component/RestorentCreate';
import Insert from './component/Insert';
import Home from './component/Home';
import Navbar from './component/Navbar';
function App() {
  return (
    <>
    <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/RestorentList" element={<RestorentList/>}/>
          <Route  path="/RestorentCreate" element={<RestorentCreate/>}/>
          <Route  path="/Insert" element={<Insert/>}/>
        </Routes>
  </BrowserRouter>
  </React.StrictMode>
    </>
  );
}

export default App;
