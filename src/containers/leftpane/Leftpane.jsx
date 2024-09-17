import React from 'react';
import './leftpane.css';
import {Searchbar} from '../../components';
import Contactlist from '../contactlist/Contactlist';
import Userinfo from '../userinfo/Userinfo';

const Leftpane = (props) => {
  return (
    <div className='leftpanecontainer'>
      <Userinfo></Userinfo>
      <Searchbar setConnections={props.setConnections}></Searchbar>
      <Contactlist {...props}></Contactlist>
    </div>
  )
}

export default Leftpane
