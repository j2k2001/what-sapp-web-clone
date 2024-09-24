import React from 'react';
import './modalcomponent.css';

const Modalcomponent = ({header,button1,button2,button1f,button2f}) => {
  return (
    <div className="modalcomponentcontainer">
      <div className="modalcomponentinnercontainer">
        {header}
        <div className="buttoncontainerinmodal">
          <button className="modalbutton" onClick={button1f}>{button1}</button>
          <button className="modalbutton" onClick={button2f}>{button2}</button>
        </div>
      </div>
    </div>
  )
}

export default Modalcomponent
