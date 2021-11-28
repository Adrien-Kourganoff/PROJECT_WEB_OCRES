import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Galerie from './pages/galerie';
import Contact from './pages/contact';
import Concours from './pages/concours';
import Event from './pages/event';
import NotFound from './pages/notFound';

export default function App() {
  return (
    <div className="bigApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/galerie" element={<Galerie/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/games" element={<Concours/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>)
}
