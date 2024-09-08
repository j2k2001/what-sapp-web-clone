import React from 'react';
import './messagebutton.css';
import { BiSolidMessageDetail } from "react-icons/bi";

const Messagebutton = () => {
  return (
    <div className='messagebuttoncontainer'>
      <BiSolidMessageDetail size={24} color='#aebac1'></BiSolidMessageDetail>
    </div>
  )
}

export default Messagebutton
