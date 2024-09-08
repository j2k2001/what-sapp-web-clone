import React from 'react';
import './menubutton.css';
import { FiMoreVertical } from "react-icons/fi";

const Menubutton = () => {
  return (
    <div className='menubuttoncontainer'>
      <FiMoreVertical color="#aebac1" size={24}></FiMoreVertical>
    </div>
  )
}

export default Menubutton