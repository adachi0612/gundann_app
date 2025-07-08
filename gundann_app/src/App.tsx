import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'


function App() {

  return (
    <div className='main'>
      <Sidebar />
      <div className='content'>
        <h1>最初の画面</h1>
      </div>
    </div>
  )
}

export default App
