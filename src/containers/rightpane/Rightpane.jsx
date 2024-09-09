import React from 'react';
import './rightpane.css';
import {CONNECTIONS} from '../../constant/connections';
import { Userphoto } from '../../components';
import {Emojibutton,Plussign,Microphonebutton} from '../../components';
import { useState } from 'react';

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

function Message({messages,message,setMessages}){
  function handleDelete(){
    setMessages((messages)=>messages.filter((currmessage)=>currmessage!==message))
  }
  return (
    <>
      <li className="messageaslistitems" key={message.timestamp}>{message.message}<button onClick={handleDelete} className='deletebutton'>x</button></li>
    </>
  );
}

function Chat({chatter,messages,setMessages}) {
  const chats=messages.filter((message)=>message.id===chatter.id);
  const chatlistitems = chats.map((message)=><Message message={message} messages={messages} setMessages={setMessages} />);
  return (
    <div className="chatcontainer">
      <ul className="chatlist">
        {chatlistitems}  
      </ul>
    </div>
  );
}

const Inputmessage = ({chatter,setMessages}) => {
  const [inputMessage,setInputMessage] = useState('');
  function handleOnSubmit(e){
    e.preventDefault();
    if(inputMessage.trim()==='') return ;
    setMessages((messages)=>[
      ...messages,{id:chatter.id,sendor:chatter.name,message:inputMessage,timestamp:Date.now()}
    ]);
    setInputMessage('');
  }
  function handleInputChange(e){
    setInputMessage(e.target.value);
  }
  return (
    <div className='inputmessagecontainer'>
      <form className='inputmessageform' onSubmit={handleOnSubmit}>
        <input type="text" 
        placeholder='Type your text here' value={inputMessage} onChange={handleInputChange}/>
      </form>
    </div>
  )
}

function Messageinput({chatter,setMessages}) {
  return (
    <div className="messageinputcontainer">
      <Emojibutton /> 
      <Plussign />
      <div className='inputmessagecontainer'>
        <Inputmessage chatter={chatter} setMessages={setMessages}/>
      </div>
      <Microphonebutton />
    </div>
  );
}

function Chatwindow({selectedConvId,messages,setMessages}){
  const Chatters = CONNECTIONS.filter(person => {
    return person.id === selectedConvId;
  });
  if(Chatters.length === 0){

  } else {
    return (
    <><Chatinfo Chatter={Chatters[0]} />
    <Chat chatter={Chatters[0]} messages={messages} setMessages={setMessages}/>
    <Messageinput chatter={Chatters[0]} setMessages={setMessages}/>
    </>
    )
  }
}
const Rightpane = ({selectedConvId,messages,setMessages}) => {
  return (
    <div className='rightpanecontainer'>
      <Chatwindow selectedConvId={selectedConvId} messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Rightpane
