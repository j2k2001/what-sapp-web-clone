import React, { Fragment } from 'react';
import './contactlist.css';
import {CONNECTIONS} from '../../constant/connections';
import {Userphoto} from '../../components';

function Connectioncomp({person,setSelectedConvId}) {
  //the connection component that will store the conversations
  function handleClick(key){
    setSelectedConvId(key);
  }
  return (
    <>
    <li key={person.id} className='connectionslab' onClick={() => handleClick(person.id)}>
      <Userphoto imageUrl={person.profileImg} size={48} />
      <div className="connectioninfo">{person.name}</div>
    </li>
    </>
  );
}

const Contactlist = ({setSelectedConvId,connections,setConnections}) => {
  const listNodes = connections.map(person => {
    return (<Connectioncomp person={person} setSelectedConvId={setSelectedConvId}/>);
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
