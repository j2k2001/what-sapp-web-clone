import React from 'react';
import './searchbar.css';
import { profileImg } from '../../constant/connections';
import { useState } from 'react';
import {Modalcomponent1} from '../../components';

const Newchatbutton = ({setConnections}) => {
  const [newChatModalOpen,setNewChatModalOpen] = useState(false);
  function handleClick(){
    setNewChatModalOpen(true);
  }
  function handleAdd(userInput){
    if(userInput!==null){
      setConnections((connections)=>[...connections,{id:Date.now(),name:userInput,profileImg:profileImg}])
    }
    setNewChatModalOpen(false);
  }
  function handleCancel(){
    setNewChatModalOpen(false);
  }
  return (
    <>
      {newChatModalOpen&&<Modalcomponent1 placeholdertext="New User" button1="Add" button2="Cancel" button1f={handleAdd} button2f={handleCancel}/> }
      <button className="startnewchatbutton" onClick={handleClick}>New Chat</button>
    </>
  );
}

const Searchbar = ({setConnections}) => {
  return (
    <>
    <div className='searchbarcontainer'>
      <form className='connectionsearchbar'>
        <input type="text" 
        placeholder='Search'/>
      </form>
      <Newchatbutton setConnections={setConnections}/>
    </div>
    </>
  )
}

export default Searchbar