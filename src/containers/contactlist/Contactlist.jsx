import React from 'react';
import './contactlist.css';
import {CONNECTIONS} from '../../constant/connections';
import {Userphoto} from '../../components';

function Connectioncomp({person}) {
  //the connection component that will store the conversations
  return (
    <>
    <li key={person.id} className='connectionslab'>
      <Userphoto imageUrl={person.profileImg} size={48} />
      <div className="connectioninfo">{person.name}</div>
    </li>
    </>
  );
}

const Contactlist = () => {
  const listNodes = CONNECTIONS.map(person => {
    return (<Connectioncomp person={person} />);
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
