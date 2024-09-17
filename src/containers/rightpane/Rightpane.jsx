import React, { useEffect } from 'react';
import './rightpane.css';
import {CONNECTIONS} from '../../constant/connections';
import { Userphoto } from '../../components';
import {Emojibutton,Plussign,Microphonebutton} from '../../components';
import { useState ,useRef} from 'react';

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

function Chat({chatter,messages,setMessages,selectedConvId}) {
  const bottomRef =useRef(null);
  useEffect(()=>{
    if(bottomRef.current){
      bottomRef.current.scrollIntoView();
    }
  },[messages,selectedConvId]);
  const chats=messages.filter((message)=>message.id===chatter.id);
  const chatlistitems = chats.map((message)=><Message message={message} messages={messages} setMessages={setMessages} />);
  return (
    <div className="chatcontainer">
      <ul className="chatlist">
        {chatlistitems}  
        <div className="bottomref" ref={bottomRef}></div>
      </ul>
    </div>
  );
}

const Inputmessage = ({chatter,setMessages,setLastMessages}) => {
  const [inputMessage,setInputMessage] = useState('');
  function handleOnSubmit(e){
    e.preventDefault();
    if(inputMessage.trim()==='') return ;
    setMessages((messages)=>[
      ...messages,{id:chatter.id,sendor:chatter.name,message:inputMessage,timestamp:Date.now()}
    ]);
    setLastMessages((lastMessages)=>{
      const intermediateLastMessages = lastMessages.filter((lastMessage)=>lastMessage.sendor!==chatter.name);
      return [
        ...intermediateLastMessages,
        {
          id: chatter.id,
          sendor: chatter.name,
          message: inputMessage,
          timestamp: Date.now(),
        },
      ];
    });
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

function Messageinput({chatter,setMessages,setLastMessages}) {
  return (
    <div className="messageinputcontainer">
      <Emojibutton /> 
      <Plussign />
      <div className='inputmessagecontainer'>
        <Inputmessage chatter={chatter} setMessages={setMessages} setLastMessages={setLastMessages}/>
      </div>
      <Microphonebutton />
    </div>
  );
}

function Chatwindow({selectedConvId,messages,setMessages,connections,setLastMessages}){
  const Chatters = connections.filter(person => {
    return person.id === selectedConvId;
  });
  if(Chatters.length === 0){

  } else {
    return (
    <><Chatinfo Chatter={Chatters[0]} />
    <Chat chatter={Chatters[0]} messages={messages} setMessages={setMessages} selectedConvId={selectedConvId} setLastMessages={setLastMessages}/>
    <Messageinput chatter={Chatters[0]} setMessages={setMessages} setLastMessages={setLastMessages}/>
    </>
    )
  }
}
const Rightpane = ({selectedConvId,messages,setMessages,connections,setLastMessages}) => {
  return (
    <div className='rightpanecontainer'>
      <Chatwindow selectedConvId={selectedConvId} messages={messages} setMessages={setMessages} connections={connections} setLastMessages={setLastMessages} />
    </div>
  )
}

export default Rightpane
