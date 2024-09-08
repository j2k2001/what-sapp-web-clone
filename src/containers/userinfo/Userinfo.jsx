import React from 'react';
import './userinfo.css';
import {Userphoto,Statusbutton,Darkmodebutton,Menubutton,Messagebutton} from '../../components';

const Userinfo = () => {
  return (
    <div className='userinfocontainer'>
      <div className="userinfoleftcontainer">
        <Userphoto></Userphoto>
      </div>
      <div className="userinforightcontainer">
        <Statusbutton></Statusbutton>
        <Darkmodebutton></Darkmodebutton>
        <Messagebutton></Messagebutton>
        <Menubutton></Menubutton>
      </div>
    </div>
  )
}

export default Userinfo
