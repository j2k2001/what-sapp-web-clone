import React from 'react';
import './modalcomponent1.css';
import { useState } from 'react';

const Modalcomponent1 = ({placeholdertext,button1,button2,button1f,button2f}) => {
  const [text,setText] = useState('');
  return (
    <div className="modalcomponentcontainer">
      <div className="modalcomponentinnercontainer">
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder={placeholdertext}/>
        <div className="buttoncontainerinmodal">
          <button className="modalbutton" onClick={button1f}>{button1}</button>
          <button className="modalbutton" onClick={button2f}>{button2}</button>
        </div>
      </div>
    </div>
  )
}

export default Modalcomponent1
