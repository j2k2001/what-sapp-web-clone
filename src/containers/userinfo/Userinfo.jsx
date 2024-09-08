import React from 'react';
import './userinfo.css';
import {Userphoto,Darkmodebutton,Menubutton,Messagebutton} from '../../components';
import {User} from '../../constant/connections';

const Userinfo = () => {
  return (
    <div className='userinfocontainer'>
      <div className="userinfoleftcontainer">
        <Userphoto imageUrl={User.profileImg}></Userphoto>
      </div>
      <div className="userinforightcontainer">
        <Darkmodebutton></Darkmodebutton>
        <Messagebutton></Messagebutton>
        <Menubutton></Menubutton>
      </div>
    </div>
  )
}

export default Userinfo
