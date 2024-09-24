import React from 'react';
import './modalcomponent.css';

const Modalcomponent = ({header,button1,button2}) => {
  return (
    <div className="modalcomponentcontainer">
      <div className="modalcomponentinnercontainer">
        {header}
        <div className="buttoncontainerinmodal">
          <button className="modalbutton">{button1}</button>
          <button className="modalbutton">{button2}</button>
        </div>
      </div>
    </div>
  )
}

export default Modalcomponent
