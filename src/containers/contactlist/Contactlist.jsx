import React, { Fragment } from 'react';
import './contactlist.css';
import {CONNECTIONS} from '../../constant/connections';
import {Userphoto} from '../../components';

function Connectioncomp({person,setSelectedConvId,lastMessages}) {
  //the connection component that will store the conversations

  const lastMessage = lastMessages.filter((message) => message.id===person.id);

  function handleClick(key){
    setSelectedConvId(key);
  }

  if(lastMessage.length===0){
    return (
      <>
        <li key={person.id} className='connectionslab' onClick={() => handleClick(person.id)}>
          <Userphoto imageUrl={person.profileImg} size={48} />
          <div className="connectioninfo">{person.name}</div>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li key={person.id} className='connectionslab' onClick={() => handleClick(person.id)}>
        <Userphoto imageUrl={person.profileImg} size={48} />
        <div className="connectioninfo">{person.name} <br /><span className="truncatelastmessage">{lastMessage[0].message}</span></div>
        </li>
      </>
    );
  } 
}

const Contactlist = ({setSelectedConvId,connections,setConnections,lastMessages}) => {
  const listNodes = connections.map(person => {
    return (<Connectioncomp key={person.id} person={person} setSelectedConvId={setSelectedConvId} lastMessages={lastMessages}/>);
  });
  if(listNodes.length===0){
    return <div className="contactlistcontainer"><div className="noconvyet">No Conversation Yet</div></div>;
  }
  return (
    <div className='contactlistcontainer'>
      <ul className="connectionlistlist">
        {listNodes}
      </ul>
    </div>
  );
}

export default Contactlist
