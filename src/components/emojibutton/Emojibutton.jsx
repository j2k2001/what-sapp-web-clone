import React from 'react';
import './emojibutton.css';
import { FaRegLaugh } from "react-icons/fa";

const Emojibutton = () => {
  return (
    <div className='emojibuttoncontainer'>
      <FaRegLaugh size={24} color='#aebac1'/>
    </div>
  )
}

export default Emojibutton
