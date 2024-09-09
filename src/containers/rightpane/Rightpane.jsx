import React from 'react';
import './rightpane.css';
import {CONNECTIONS} from '../../constant/connections';
import { Userphoto } from '../../components';

function Chatinfo({Chatter}) {
  return (
    <div className='chatinfocontainer'>
      <div className="chatinfoleftcontainer">
        <Userphoto imageUrl={Chatter.profileImg}></Userphoto>
        {Chatter.name}
      </div>
      <div className="chatinforightcontainer">
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="chatcontainer">
      chat
    </div>
  );
}

function Messageinput() {
  return (
    <div className="messageinputcontainer">
      messageinput
    </div>
  );
}

function Chatwindow({selectedConvId}){
  const Chatters = CONNECTIONS.filter(person => {
    return person.id === selectedConvId;
  });
  if(Chatters.length === 0){

  } else {
    return (
    <><Chatinfo Chatter={Chatters[0]} />
    <Chat />
    <Messageinput />
    </>
    )
  }
}
const Rightpane = ({selectedConvId}) => {
  return (
    <div className='rightpanecontainer'>
      <Chatwindow selectedConvId={selectedConvId} />
    </div>
  )
}

export default Rightpane
