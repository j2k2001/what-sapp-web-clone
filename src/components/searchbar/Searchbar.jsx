import React from 'react';
import './searchbar.css';
import { profileImg } from '../../constant/connections';
import { useState } from 'react';
import {Modalcomponent1} from '../../components';

const Newchatbutton = ({setConnections}) => {
  const [newChatModalOpen,setNewChatModalOpen] = useState(false);
  function handleclick(){
    setNewChatModalOpen(true);
  }
  return (
    <>
      {newChatModalOpen&&<Modalcomponent1 placeholdertext="New User" button1="Add" button2="Cancel" /> }
      <button className="startnewchatbutton" onClick={handleclick}>New Chat</button>
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