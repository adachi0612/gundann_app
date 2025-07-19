import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom";
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import YouTube from '../pages/YouTube';
function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/youtube" element={<YouTube />} />
    </Routes>
  )
}

export default Content