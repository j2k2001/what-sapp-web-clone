import React from 'react'
import {Leftpane,Rightpane} from './containers';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [selectedConvId,setSelectedConvId] = useState(null);
  return (
    <div className='app'>
      <Leftpane  setSelectedConvId={setSelectedConvId}></Leftpane>
      <Rightpane selectedConvId={selectedConvId}></Rightpane>
    </div>
  )
}

export default App
