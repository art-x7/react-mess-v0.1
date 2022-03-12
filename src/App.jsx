import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Photo from './pages/Photo'
import Messenger from './pages/Messenger'

import Navbar from './components/Navbar'


export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/messenger' element={<Messenger />} />
      </Routes>
    </>
  );
}
