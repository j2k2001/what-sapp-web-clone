import React from 'react';
import './leftpane.css';
import {Searchbar} from '../../components';
import Contactlist from '../contactlist/Contactlist';
import Userinfo from '../userinfo/Userinfo';

const Leftpane = () => {
  return (
    <div className='leftpanecontainer'>
      <Userinfo></Userinfo>
      <Searchbar></Searchbar>
      <Contactlist></Contactlist>
    </div>
  )
}

export default Leftpane
