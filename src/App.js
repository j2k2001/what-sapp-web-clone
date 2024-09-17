import React from 'react'
import {Leftpane,Rightpane} from './containers';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [selectedConvId,setSelectedConvId] = useState(null);
  const [messages,setMessages] = useState([]);
  const [connections,setConnections] = useState([]);
  return (
    <div className='app'>
      <Leftpane  setSelectedConvId={setSelectedConvId} connections={connections} setConnections={setConnections}></Leftpane>
      <Rightpane selectedConvId={selectedConvId} messages={messages} setMessages={setMessages} connections={connections}></Rightpane>
    </div>
  )
}

export default App
