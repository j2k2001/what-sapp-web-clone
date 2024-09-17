import React from 'react';
import './searchbar.css';
import { profileImg } from '../../constant/connections';

const Newchatbutton = ({setConnections}) => {
  function handleclick(){
    let userInput = prompt("User");
    if(userInput!==null){
      setConnections((connections)=>[...connections,{id:Date.now(),name:userInput,profileImg:profileImg}])
    }
  }
  return (
    <><button className="startnewchatbutton" onClick={handleclick}>New Chat</button></>
  );
}

const Searchbar = ({setConnections}) => {
  return (
    <div className='searchbarcontainer'>
      <form className='connectionsearchbar'>
        <input type="text" 
        placeholder='Search'/>
      </form>
      <Newchatbutton setConnections={setConnections}/>
    </div>
  )
}

export default Searchbar