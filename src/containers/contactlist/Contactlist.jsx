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

const Contactlist = ({setSelectedConvId}) => {
  const listNodes = CONNECTIONS.map(person => {
    return (<Connectioncomp person={person} setSelectedConvId={setSelectedConvId}/>);
  });
  return (
    <div className='contactlistcontainer'>
      <ul className="connectionlistlist">
        {listNodes}
      </ul>
    </div>
  );
}

export default Contactlist
