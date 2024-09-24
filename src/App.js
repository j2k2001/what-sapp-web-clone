import React, { useEffect } from 'react'
import {Leftpane,Rightpane} from './containers';
import './App.css';
import { useState } from 'react';

const App = () => {
  //implementing the fetching functions from the local storage
  //we will persist only messages and connections over the page refreshes

  const getInitialMessages = () => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [] ;
  }

  const getInitialConnections = () => {
    const savedConnections = localStorage.getItem("connections");
    return savedConnections ? JSON.parse(savedConnections) : [];
  }

  const getInitialLastMessages = () => {
    const savedLastMessages = localStorage.getItem("lastmessages");
    return savedLastMessages ? JSON.parse(savedLastMessages) : [];
  }

  const [lastMessages,setLastMessages] = useState(getInitialLastMessages);
  const [selectedConvId,setSelectedConvId] = useState(null);
  const [messages,setMessages] = useState(getInitialMessages);
  const [connections,setConnections] = useState(getInitialConnections);

  useEffect(() => {
    localStorage.setItem("messages",JSON.stringify(messages));
  },[messages]);

  useEffect(() => {
    localStorage.setItem("connections",JSON.stringify(connections));
  },[connections]);

  useEffect(() => {
    localStorage.setItem("lastmessages",JSON.stringify(lastMessages));
  },[lastMessages])

  return (
    <>
    <div className='app'>
      <Leftpane  setSelectedConvId={setSelectedConvId} connections={connections} setConnections={setConnections} lastMessages={lastMessages}></Leftpane>
      <Rightpane selectedConvId={selectedConvId} messages={messages} setMessages={setMessages} connections={connections} setLastMessages={setLastMessages}></Rightpane>
    </div>
    </>
  )
}

export default App
