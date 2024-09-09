import React from 'react'
import {Leftpane,Rightpane} from './containers';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [selectedConvId,setSelectedConvId] = useState(null);
  const [messages,setMessages] = useState([]);
  return (
    <div className='app'>
      <Leftpane  setSelectedConvId={setSelectedConvId}></Leftpane>
      <Rightpane selectedConvId={selectedConvId} messages={messages} setMessages={setMessages}></Rightpane>
    </div>
  )
}

export default App
