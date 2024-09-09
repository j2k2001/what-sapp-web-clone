import React from 'react';
import './rightpane.css';
import {CONNECTIONS} from '../../constant/connections';
import { Userphoto } from '../../components';
import {Emojibutton,Plussign,Microphonebutton} from '../../components';

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

const Inputmessage = () => {
  return (
    <div className='inputmessagecontainer'>
      <form className='inputmessageform'>
        <input type="text" 
        placeholder='Type your text here'/>
      </form>
    </div>
  )
}

function Messageinput() {
  return (
    <div className="messageinputcontainer">
      <Emojibutton /> 
      <Plussign />
      <div className='inputmessagecontainer'>
        <Inputmessage />
      </div>
      <Microphonebutton />
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
