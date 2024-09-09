import React from 'react';
import './microphonebutton.css';
import { FaMicrophone } from "react-icons/fa";

const Microphonebutton = () => {
  return (
    <div className='microphonebuttoncontainer'>
        <FaMicrophone size={24} color='#aebac1'></FaMicrophone>
    </div>
  )
}

export default Microphonebutton
